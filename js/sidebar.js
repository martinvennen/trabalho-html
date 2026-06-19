// sidebar.js — injeta a sidebar em todas as páginas internas
// Uso: <script src="../js/sidebar.js"></script> + chamar injectSidebar('nome-da-pagina')

function injectSidebar(activePage) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const pages = [
    { id: 'oqueehia',    href: 'oqueehia.html',    icon: '🤖', label: 'O que é IA',   section: 'Conteúdo' },
    { id: 'tipos',       href: 'tipos.html',       icon: '⚙️', label: 'Tipos de IA',  section: 'Conteúdo' },
    { id: 'timeline',    href: 'timeline.html',    icon: '📅', label: 'Timeline',      section: 'Conteúdo' },
    { id: 'exemplos',    href: 'exemplos.html',    icon: '🎮', label: 'Exemplos',      section: 'Conteúdo' },
    { id: 'futurodahia', href: 'futurodahia.html', icon: '🚀', label: 'Futuro da IA', section: 'Conteúdo' },
    { id: 'conclusao',   href: 'conclusao.html',   icon: '📝', label: 'Conclusão',     section: 'Conteúdo' },
    { id: 'quiz',        href: 'quiz.html',        icon: '🧠', label: 'Quiz',          section: 'Extras' },
    { id: 'galeria',     href: 'galeria.html',     icon: '🖼️', label: 'Galeria',       section: 'Extras' },
    { id: 'referencias', href: 'referencias.html', icon: '📚', label: 'Referências',   section: 'Extras' },
    { id: 'faleconosco', href: 'faleconosco.html', icon: '✉️', label: 'Contato',       section: 'Extras' },
  ];

  const sections = ['Conteúdo', 'Extras'];

  let html = `
    <div class="sidebar-logo">
      <div class="logo-title">IA<span>Games</span></div>
      <div class="logo-sub">IA nos Videogames</div>
    </div>
    <nav>
      <div class="nav-section">
        <div class="nav-label">Início</div>
        <a class="nav-item" href="../index.html">
          <span class="nav-icon">🏠</span> Início
        </a>
      </div>
  `;

  sections.forEach(sec => {
    html += `<div class="nav-section"><div class="nav-label">${sec}</div>`;
    pages.filter(p => p.section === sec).forEach(p => {
      const isActive = p.id === activePage ? 'active' : '';
      html += `
        <a class="nav-item ${isActive}" href="${p.href}">
          <span class="nav-icon">${p.icon}</span> ${p.label}
        </a>`;
    });
    html += `</div>`;
  });

  html += `
    </nav>
    <div class="sidebar-footer">
      <a href="http://www.uniube.br/" target="_blank">
        <img src="../images/uniube-logo-png_seeklogo-409307.webp" alt="Uniube">
      </a>
      <p>Enzo William Coelho Fortes<br>RA: 5165527 · Eng. de Computação</p>
    </div>
  `;

  sidebar.innerHTML = html;
}

// Hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('overlay');
  const hamburger = document.getElementById('hamburger');
  if (!hamburger) return;
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
});
