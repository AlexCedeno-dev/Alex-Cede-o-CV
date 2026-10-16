// Curvas de easing compartidas (ver skill emil-design-eng): nunca ease-in en UI,
// ease-out fuerte para todo lo que entra o cambia de estado bajo el cursor.
export const easeOutStrong = [0.23, 1, 0.32, 1]
export const revealEase = [0.16, 1, 0.3, 1]
export const stampEase = [0.22, 1, 0.36, 1]

// Sello "estampado": rebote corto, sin oscilar más de una vez.
export const stampSpring = { type: 'spring', duration: 0.45, bounce: 0.35 }
// Seguimiento del cursor en botones magnéticos: rápido y sin rebote visible.
export const magneticSpring = { stiffness: 320, damping: 22, mass: 0.4 }

// Secuencia de entrada del hero (segundos). El sello cierra en ~1.1s.
export const heroTiming = {
  lineStagger: 0.07,
  lineDuration: 0.6,
  lead: 0.22,
  cta: 0.3,
  fadeDuration: 0.5,
  ledgerRows: 0.2,
  ledgerStagger: 0.05,
  stamp: 0.62,
}

export const revealViewport = { once: true, amount: 0.15 }

export const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: revealEase } },
}

// Tokens de color de index.css. Framer Motion 13 resuelve var(--token) al
// animar, así que siguen el tema claro/oscuro sin duplicar valores.
export const colors = {
  paper: 'var(--paper)',
  paperAlt: 'var(--paper-alt)',
  paperDeep: 'var(--paper-deep)',
  border: 'var(--border)',
  ink: 'var(--ink)',
  inkDim: 'var(--ink-dim)',
  stamp: 'var(--stamp)',
  stampDim: 'var(--stamp-dim)',
  shadow: 'var(--shadow-btn)',
  shadowClear: 'color-mix(in srgb, var(--ink) 0%, transparent)',
  hoverWash: 'color-mix(in srgb, var(--ink) 4%, transparent)',
}
