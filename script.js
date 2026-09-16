// Ledger fill-in: fields land one at a time, the status lands as a stamp
const fields = [
  { k: 'nombre', v: 'Edgar Alejandro Cedeño Suárez' },
  { k: 'rol', v: 'Estudiante de Ing. en Sistemas Computacionales' },
  { k: 'ubicación', v: 'Aguascalientes, México' },
  { k: 'stack', v: 'React · Node.js · Angular · MySQL · PHP' },
  { k: 'estado', stamp: 'disponible' }
];

const term = document.getElementById('termBody');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function render(i){
  if(i >= fields.length){ return; }
  const item = fields[i];
  const row = document.createElement('div');
  row.className = 'ledger-row';
  row.innerHTML = item.stamp
    ? `<span class="field">${item.k}</span> <span class="stamp active">${item.stamp}</span>`
    : `<span class="field">${item.k}</span> <span class="value">${item.v}</span>`;
  term.appendChild(row);
  if(reduced){ render(i+1); return; }
  setTimeout(() => render(i+1), 260);
}
render(0);

// Scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Nav mobile toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navlinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && navLinks.classList.contains('open')){
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}
