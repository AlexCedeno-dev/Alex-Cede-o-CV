// Curvas de easing compartidas (ver skill emil-design-eng): nunca ease-in en UI,
// ease-out fuerte para todo lo que entra o cambia de estado bajo el cursor.
export const easeOutStrong = [0.23, 1, 0.32, 1]
export const revealEase = [0.16, 1, 0.3, 1]
export const stampEase = [0.22, 1, 0.36, 1]

export const revealViewport = { once: true, amount: 0.15 }

export const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: revealEase } },
}

// Framer Motion interpola colores por valor real, no puede leer var(--token);
// estos deben mantenerse en sync con las variables de :root en index.css.
export const colors = {
  paper: '#F1EAD9',
  paperAlt: '#E7DDC5',
  paperDeep: '#DCCFA9',
  border: '#C3B48C',
  ink: '#211D16',
  inkDim: '#5C5340',
  stamp: '#943E17',
  stampDim: 'rgba(148,62,23,0.12)',
}
