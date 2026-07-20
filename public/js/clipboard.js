function initClipboard() {
  const cards = $$('.link-card[data-copy]');
  const toast = document.getElementById('toast');
  if (!cards.length || !toast) return;

  let timeout;

  function showToast(text, type = 'success') {
    toast.textContent = text;
    toast.className = 'toast';
    toast.classList.add('visible', `toast--${type}`);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2000);
  }

  cards.forEach(card => {
    card.addEventListener('click', async () => {
      const text = card.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast('Copied to clipboard!');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initClipboard);
