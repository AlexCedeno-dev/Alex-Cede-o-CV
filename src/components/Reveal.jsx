import { motion, useReducedMotion } from 'framer-motion'
import { revealVariants, cardRevealVariants, revealViewport } from '../motion'

// Reemplaza el [data-reveal] + IntersectionObserver del sitio estático:
// misma curva, mismo umbral, pero interrumpible y consciente de prefers-reduced-motion.
// `delay` (opcional, segundos) permite escalonar varios Reveal hermanos.
// `card`: usa la entrada corta de las cards (10px) en lugar de la de sección.
export default function Reveal({ as = 'div', className, delay = 0, card = false, children }) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]
  const base = card ? cardRevealVariants : revealVariants
  const variants = delay
    ? {
        ...base,
        show: { ...base.show, transition: { ...base.show.transition, delay } },
      }
    : base

  if (shouldReduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
