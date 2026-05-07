document.addEventListener('click', function(e){
  if(e.target.classList.contains('copy-prompt')){
    const id=e.target.getAttribute('data-copy-target');
    const el=document.getElementById(id);
    const text=el?el.innerText:'';
    navigator.clipboard.writeText(text).then(()=>{
      const old=e.target.textContent;
      e.target.textContent='Kopiert ✓';
      setTimeout(()=>e.target.textContent=old,1300);
    });
  }
  if(e.target.matches('[data-feedback]')){
    const box=e.target.closest('.ln-miniquiz');
    const out=box.querySelector('.ln-feedback');
    out.textContent=e.target.getAttribute('data-feedback');
  }
});
