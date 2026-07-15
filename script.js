// Terminal boot sequence
const lines = [
  { p: 'edgar@sistemas', c: '~$', t: 'whoami' },
  { k: 'nombre', v: 'Edgar Alejandro Cedeño Suárez' },
  { k: 'rol', v: 'Estudiante de Ing. en Sistemas Computacionales' },
  { k: 'ubicación', v: 'Aguascalientes, México' },
  { k: 'stack', v: 'React · Node.js · Angular · MySQL · PHP' },
  { k: 'estado', v: 'disponible' },
  { p: 'edgar@sistemas', c: '~$', t: '_' }
];

const term = document.getElementById('termBody');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function render(i){
  if(i >= lines.length){ return; }
  const item = lines[i];
  const div = document.createElement('div');
  div.className = 'line';
  if(item.p){
    div.innerHTML = item.t === '_'
      ? `<span class="prompt">${item.p} ${item.c}</span> <span class="cursor"></span>`
      : `<span class="prompt">${item.p} ${item.c}</span> <span class="val">${item.t}</span>`;
  } else {
    div.innerHTML = `<span class="key">${item.k}:</span> <span class="val">${item.v}</span>`;
  }
  term.appendChild(div);
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
