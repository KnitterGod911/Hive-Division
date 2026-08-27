const finePointerQuery = '(hover: hover) and (pointer: fine)';

export function CustomCursor({ clickableSelector = 'a, button, input, select, textarea, [role="button"], [data-tilt]' } = {}) {
  if (!window.matchMedia(finePointerQuery).matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<span class="cursor-trail"></span><span class="cursor-main"><span class="cursor-mark"></span></span>';
  document.body.append(cursor);
  document.body.classList.add('custom-cursor-active');

  let targetX = -40;
  let targetY = -40;
  let currentX = targetX;
  let currentY = targetY;
  let frame = 0;
  let visible = false;

  const elementFromEvent = (event) => event.target instanceof Element ? event.target : null;
  const updateHoverState = (event) => {
    const target = elementFromEvent(event);
    const interactive = target?.closest(clickableSelector);
    cursor.classList.toggle('is-hovering', Boolean(interactive));
    cursor.classList.toggle('is-card-hover', Boolean(target?.closest('[data-tilt]')));
  };

  const render = () => {
    currentX += (targetX - currentX) * 0.34;
    currentY += (targetY - currentY) * 0.34;
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
    }
    updateHoverState(event);
    if (!frame) frame = requestAnimationFrame(render);
  };

  const hide = () => {
    visible = false;
    cursor.classList.remove('is-visible', 'is-hovering', 'is-card-hover');
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
