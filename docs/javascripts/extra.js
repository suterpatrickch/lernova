function quizFeedback(id, success, fail, isCorrect) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = isCorrect ? success : fail;
  el.style.color = isCorrect ? '#1da672' : '#b45309';
}

async function copyPrompt(id) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    await navigator.clipboard.writeText(el.innerText);
    const btn = document.querySelector(`[data-copy-target="${id}"]`);
    if (btn) {
      const old = btn.textContent;
      btn.textContent = 'Kopiert ✓';
      setTimeout(() => btn.textContent = old, 1200);
    }
  } catch (e) {
    alert('Kopieren hat nicht funktioniert. Markiere den Prompt und kopiere ihn manuell.');
  }
}
