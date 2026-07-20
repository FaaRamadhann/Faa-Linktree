const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function debounce(fn, delay = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit = 100) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
}

function isMobile() {
  return window.innerWidth < 768;
}

function isInViewport(el, threshold = 0) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > threshold && rect.top < (window.innerHeight - threshold);
}

function getScrollPercent() {
  const h = document.documentElement;
  return (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
