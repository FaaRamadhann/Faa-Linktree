function initShare() {
  const btn = document.getElementById('share-button');
  const toast = document.getElementById('toast');
  if (!btn || !toast) return;

  btn.classList.add('visible');

  let timeout;

  function showToast(msg, type = 'success') {
    toast.textContent = msg;
    toast.className = 'toast';
    toast.classList.add('visible', `toast--${type}`);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2000);
  }

  btn.addEventListener('click', async () => {
    const shareData = {
      title: 'Fauzi Ramadhan',
      text: 'Mechanical Engineering \u2022 Developer',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied!');
      } catch {
        showToast('Failed to copy link', 'error');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initShare);
