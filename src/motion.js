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

// Cards (Home § II, /cv, /proyectos): entrada corta (10px) y el sello se estampa
// después de que la card ya apareció (cardStampDelay, en segundos).
export const cardRevealVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: revealEase } },
}
export const cardStampDelay = 0.28
export const cardStampSpring = { type: 'spring', duration: 0.5, bounce: 0.3 }
export const cardStampFrom = 1.08

export const revealViewport = { once: true, amount: 0.15 }

export const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: revealEase } },
}

// Lenguaje de movimiento de los botones del Hero, fuente única para todo el sitio.
// Button.jsx lo usa con Framer Motion; el CSS (.fx, .card-fx, .fx-link) lo lee de las
// variables --fx-* que applyFxTokens() publica en :root (ver main.jsx).
// Botón: sube (lift) y proyecta una sombra dura (shadow) en `enter`, vuelve en `exit`;
// al pulsar se hunde a `tapScale`. Las cards usan los mismos valores × cardScale.
export const fx = {
  ease: easeOutStrong,
  enter: 0.22,
  exit: 0.14,
  lift: { x: -1, y: -2 },
  shadow: { x: 3, y: 4 },
  tapScale: 0.97,
  tapDuration: 0.1,
  ghost: { enter: 0.2, exit: 0.14 },
  cardScale: 0.5,
}

export function applyFxTokens(root = document.documentElement) {
  const s = root.style
  s.setProperty('--fx-ease', `cubic-bezier(${fx.ease.join(', ')})`)
  s.setProperty('--fx-enter', `${fx.enter}s`)
  s.setProperty('--fx-exit', `${fx.exit}s`)
  s.setProperty('--fx-lift-x', `${fx.lift.x}px`)
  s.setProperty('--fx-lift-y', `${fx.lift.y}px`)
  s.setProperty('--fx-shadow-x', `${fx.shadow.x}px`)
  s.setProperty('--fx-shadow-y', `${fx.shadow.y}px`)
  s.setProperty('--fx-tap', `${fx.tapScale}`)
  s.setProperty('--fx-tap-dur', `${fx.tapDuration}s`)
  s.setProperty('--fx-card-k', `${fx.cardScale}`)
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
