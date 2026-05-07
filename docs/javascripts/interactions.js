document.addEventListener('click', function(event) {
  const button = event.target.closest('.copy-prompt');
  if (button) {
    const id = button.getAttribute('data-copy-target');
    const target = document.getElementById(id);
    if (target) {
      navigator.clipboard.writeText(target.innerText).then(() => {
        const old = button.innerText;
        button.innerText = 'Kopiert ✓';
        setTimeout(() => button.innerText = old, 1600);
      });
    }
  }
  const quiz = event.target.closest('[data-quiz-answer]');
  if (quiz) {
    const box = quiz.closest('.ln-quiz');
    const feedback = box.querySelector('.ln-feedback');
    feedback.innerText = quiz.getAttribute('data-quiz-answer');
  }
});
