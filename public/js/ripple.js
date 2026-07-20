function initRipple() {
  const targets = $$('.link-card, .featured-card, .back-to-top, .share-button');

  targets.forEach(el => {
    el.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initRipple);
