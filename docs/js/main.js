// theme toggle: persist preference in localStorage
;(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  function applyTheme(theme){
    if(theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
  }
  const stored = localStorage.getItem('theme');
  applyTheme(stored || 'dark');
  toggle.addEventListener('click', ()=>{
    const now = root.classList.contains('light') ? 'dark' : 'light';
    applyTheme(now);
    localStorage.setItem('theme', now);
  });

  // footer year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();
