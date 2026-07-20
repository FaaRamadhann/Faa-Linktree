function initScrollIndicator() {
  const indicator = document.getElementById('scroll-indicator');
  if (!indicator) return;

  const update = throttle(() => {
    indicator.style.width = `${getScrollPercent()}%`;
  }, 50);

  window.addEventListener('scroll', update, { passive: true });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggle = throttle(() => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, 100);

  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initBubbles() {
  const container = document.querySelector('.bg-bubbles');
  if (!container || prefersReducedMotion()) return;

  const count = isMobile() ? 4 : 7;

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = 20 + Math.random() * 40;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${10 + Math.random() * 15}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(bubble);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollIndicator();
  initBackToTop();
  initBubbles();
});
