const finePointerQuery = '(hover: hover) and (pointer: fine)';

export function CustomCursor({ clickableSelector = 'a, button, input, select, textarea, [role="button"], [data-tilt]' } = {}) {
  if (!window.matchMedia(finePointerQuery).matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  
  // Create cursor with accessories that have dynamic behavior based on speed
  cursor.innerHTML = `
    <span class="cursor-pointer"></span>
    <span class="cursor-chain" style="--chain: 0"></span>
    <span class="cursor-chain" style="--chain: 1"></span>
    <span class="cursor-chain" style="--chain: 2"></span>
    <span class="cursor-ornament">✦</span>
    <span class="cursor-sparkle" style="--sparkle: 0"></span>
    <span class="cursor-sparkle" style="--sparkle: 1"></span>
    <span class="cursor-sparkle" style="--sparkle: 2"></span>
  `;
  document.body.append(cursor);
  document.body.classList.add('custom-cursor-active');

  let targetX = -40;
  let targetY = -40;
  let currentX = targetX;
  let currentY = targetY;
  let frame = 0;
  let visible = false;
  let lastX = 0;
  let lastY = 0;
  let velocityX = 0;
  let velocityY = 0;
  let speed = 0;

  const elementFromEvent = (event) => event.target instanceof Element ? event.target : null;
  
  const updateHoverState = (event) => {
    const target = elementFromEvent(event);
    const interactive = target?.closest(clickableSelector);
    cursor.classList.toggle('is-hovering', Boolean(interactive));
    cursor.classList.toggle('is-card-hover', Boolean(target?.closest('[data-tilt]')));
    cursor.classList.toggle('is-text-hover', Boolean(target?.closest('p, h1, h2, h3, h4, h5, h6, span, a, button')));
  };

  const render = () => {
    const prevX = currentX;
    const prevY = currentY;
    
    currentX += (targetX - currentX) * 0.25;
    currentY += (targetY - currentY) * 0.25;
    
    // Calculate velocity for accessories
    velocityX = currentX - prevX;
    velocityY = currentY - prevY;
    speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    
    // Apply speed-based tilt to accessories
    const tiltAngle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
    const tiltAmount = Math.min(speed * 3, 35); // Max 35 degree tilt
    
    cursor.style.setProperty('--tilt-angle', tiltAngle + 'deg');
    cursor.style.setProperty('--tilt-amount', tiltAmount + 'deg');
    cursor.style.setProperty('--speed', Math.min(speed, 15));
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

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
      lastX = targetX;
      lastY = targetY;
    }
    
    lastX = event.clientX;
    lastY = event.clientY;
    
    updateHoverState(event);
    if (!frame) frame = requestAnimationFrame(render);
  };

  const hide = () => {
    visible = false;
    cursor.classList.remove('is-visible', 'is-hovering', 'is-card-hover', 'is-text-hover');
  };

  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerover', updateHoverState, { passive: true });
  document.addEventListener('pointerout', updateHoverState, { passive: true });
  document.documentElement.addEventListener('mouseleave', hide, { passive: true });

  return () => {
    cancelAnimationFrame(frame);
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerover', updateHoverState);
    document.removeEventListener('pointerout', updateHoverState);
    document.documentElement.removeEventListener('mouseleave', hide);
    document.body.classList.remove('custom-cursor-active');
    cursor.remove();
  };
}
