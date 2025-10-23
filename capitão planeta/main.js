(function() {
  const body = document.body;
  const btn = document.getElementById('themeToggle');

  // Inicializa tema baseado em storage ou preferência do sistema
  const storedTheme = localStorage.getItem('rt_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark') body.classList.add('dark');
  else if (storedTheme === 'light') body.classList.add('light');
  else if (prefersDark) body.classList.add('dark');
  else body.classList.add('light');

  // Sincroniza o botão de alternância
  function syncToggle() {
    if (!btn) return;
    const isDark = body.classList.contains('dark');
    btn.setAttribute('aria-pressed', String(isDark));
    btn.innerText = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  }
  syncToggle();

  // Evento do botão de tema
  if (btn) {
    btn.addEventListener('click', () => {
      const isDarkNow = body.classList.toggle('dark');
      if (isDarkNow) body.classList.remove('light');
      else body.classList.add('light');

      localStorage.setItem('rt_theme', body.classList.contains('dark') ? 'dark' : 'light');
      syncToggle();
    });

    // Atalho teclado
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  }

  // Animação em cascade
  document.querySelectorAll('.animate').forEach((el, i) => {
    el.style.animationDelay = (i * 80) + 'ms';
  });

  // Atualiza estatísticas (usa strings como "2.5k+" para preservar formatação)
  const stats = [
    { id: 'stat1', value: '2.5k+' },
    { id: 'stat2', value: '1.8k+' },
    { id: 'stat3', value: '95%' }
  ];

  stats.forEach(stat => {
    const el = document.getElementById(stat.id);
    if (el) el.textContent = stat.value;
  });

  // Atualiza ano (caso tenha um elemento com id="year")
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
