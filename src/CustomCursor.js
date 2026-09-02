const finePointerQuery = '(hover: hover) and (pointer: fine)';

export function CustomCursor({ clickableSelector = 'a, button, input, select, textarea, [role="button"], [data-tilt]' } = {}) {
  if (!window.matchMedia(finePointerQuery).matches) return;

  // Import settings dynamically to avoid circular dependencies
  let settings = null;
  const getSettings = () => {
    if (!settings) {
      const module = require('./settings.js');
      settings = module.loadCursorSettings();
    }
    return settings;
  };

  const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    
    const currentSettings = getSettings();
    
    // Create cursor with main pointer and chain links
    let html = `<span class="cursor-pointer"></span>`;
    
    if (currentSettings.showChain) {
      for (let i = 0; i < currentSettings.chainLength; i++) {
        html += `<span class="cursor-chain-link" style="--link: ${i}"></span>`;
      }
    }
    
    if (currentSettings.showOrnament) {
      html += `<span class="cursor-ornament">✦</span>`;
    }
    
    cursor.innerHTML = html;
    return cursor;
  };

  let cursor = createCursor();
  document.body.append(cursor);
  document.body.classList.add('custom-cursor-active');

  let targetX = -40;
  let targetY = -40;
  let currentX = targetX;
  let currentY = targetY;
  let frame = 0;
  let visible = false;
  let velocityX = 0;
  let velocityY = 0;
  let speed = 0;

  // Chain link positions - each one follows the previous
  let chainLinks = [];
  const initChainLinks = () => {
    const currentSettings = getSettings();
    chainLinks = Array.from({ length: currentSettings.chainLength }, () => ({
      x: currentX,
      y: currentY,
      targetX: currentX,
      targetY: currentY,
      angle: 0,
      distance: 0,
    }));
  };
  initChainLinks();

  const elementFromEvent = (event) => event.target instanceof Element ? event.target : null;
  
  const updateHoverState = (event) => {
    const target = elementFromEvent(event);
    const interactive = target?.closest(clickableSelector);
    cursor.classList.toggle('is-hovering', Boolean(interactive));
    cursor.classList.toggle('is-card-hover', Boolean(target?.closest('[data-tilt]')));
    cursor.classList.toggle('is-text-hover', Boolean(target?.closest('p, h1, h2, h3, h4, h5, h6, span, a, button')));
  };

  const updateChainLinks = () => {
    const currentSettings = getSettings();
    if (!currentSettings.showChain) return;

    const chainLinks_el = cursor.querySelectorAll('.cursor-chain-link');
    let prevX = currentX;
    let prevY = currentY;

    // Update each link to follow the previous position
    chainLinks.forEach((link, index) => {
      // Smooth follow with easing
      const baseEasing = currentSettings.chainFollowSpeed;
      const easing = baseEasing - (index * 0.01); // Each link follows slower
      link.x += (prevX - link.x) * easing;
      link.y += (prevY - link.y) * easing;

      // Calculate angle for rotation
      const dx = link.x - prevX;
      const dy = link.y - prevY;
      link.angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      link.distance = Math.sqrt(dx * dx + dy * dy);

      // Apply styles to the element
      const el = chainLinks_el[index];
      if (el) {
        el.style.setProperty('--link-x', link.x + 'px');
        el.style.setProperty('--link-y', link.y + 'px');
        el.style.setProperty('--link-angle', link.angle + 'deg');
        el.style.setProperty('--link-distance', Math.min(link.distance, 12) + 'px');
        el.style.setProperty('--link-index', index);
      }

      // Next link follows this one
      prevX = link.x;
      prevY = link.y;
    });
  };

  const render = () => {
    const currentSettings = getSettings();
    const prevX = currentX;
    const prevY = currentY;
    
    currentX += (targetX - currentX) * currentSettings.cursorSpeed;
    currentY += (targetY - currentY) * currentSettings.cursorSpeed;
    
    // Calculate velocity for cursor tilt
    velocityX = currentX - prevX;
    velocityY = currentY - prevY;
    speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    
    // Update cursor position
    cursor.style.setProperty('--cursor-speed', Math.min(speed, 15));
    cursor.style.setProperty('--show-glow', currentSettings.showGlow ? '1' : '0');
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    cursor.style.setProperty('--cursor-theme', currentSettings.theme);
    
    // Update chain positions
    updateChainLinks();

    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      frame = requestAnimationFrame(render);
    } else {
      frame = 0;
    }
  };

  const move = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    
    if (!visible) {
      visible = true;
      cursor.classList.add('is-visible');
      currentX = targetX;
      currentY = targetY;
      chainLinks.forEach(link => {
        link.x = currentX;
        link.y = currentY;
        link.targetX = currentX;
        link.targetY = currentY;
      });
    }
    
    updateHoverState(event);
    if (!frame) frame = requestAnimationFrame(render);
  };

  const hide = () => {
    visible = false;
    cursor.classList.remove('is-visible', 'is-hovering', 'is-card-hover', 'is-text-hover');
  };

  // Handle settings changes
  const handleSettingsChange = (event) => {
    const currentSettings = event.detail;
    
    // Recreate cursor if chain or ornament visibility changed
    if (currentSettings.showChain !== getSettings().showChain || 
        currentSettings.showOrnament !== getSettings().showOrnament ||
        currentSettings.chainLength !== getSettings().chainLength) {
      
      cursor.remove();
      settings = currentSettings;
      cursor = createCursor();
      document.body.appendChild(cursor);
      cursor.classList.add('is-visible');
      initChainLinks();
    } else {
      settings = currentSettings;
    }
  };

  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerover', updateHoverState, { passive: true });
  document.addEventListener('pointerout', updateHoverState, { passive: true });
  document.documentElement.addEventListener('mouseleave', hide, { passive: true });
  window.addEventListener('cursorSettingsChanged', handleSettingsChange);

  return () => {
    cancelAnimationFrame(frame);
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerover', updateHoverState);
    document.removeEventListener('pointerout', updateHoverState);
    document.documentElement.removeEventListener('mouseleave', hide);
    window.removeEventListener('cursorSettingsChanged', handleSettingsChange);
    document.body.classList.remove('custom-cursor-active');
    cursor.remove();
  };
}
