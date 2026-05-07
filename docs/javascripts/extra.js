window.copyPrompt = async function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText || el.textContent;
  try {
    await navigator.clipboard.writeText(text.trim());
    const btn = document.querySelector(`[data-copy-target="${id}"]`);
    if (btn) {
      const old = btn.innerText;
      btn.innerText = "✓ Kopiert";
      setTimeout(() => btn.innerText = old, 1600);
    }
  } catch(e) {
    alert("Prompt konnte nicht kopiert werden. Bitte manuell markieren.");
  }
}

window.quizFeedback = function(id, okText, failText, isCorrect) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = isCorrect ? okText : failText;
  el.classList.add("show");
}
