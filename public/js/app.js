function initApp() {
  const ready = () => document.documentElement.classList.add('loaded');
  if (document.readyState === 'complete') {
    ready();
  } else {
    window.addEventListener('load', ready);
  }
}

initApp();
