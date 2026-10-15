import { motion, useReducedMotion } from 'framer-motion'
import { revealVariants, revealViewport } from '../motion'

// Reemplaza el [data-reveal] + IntersectionObserver del sitio estático:
// misma curva, mismo umbral, pero interrumpible y consciente de prefers-reduced-motion.
// `delay` (opcional, segundos) permite escalonar varios Reveal hermanos.
export default function Reveal({ as = 'div', className, delay = 0, children }) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]
  const variants = delay
    ? {
        ...revealVariants,
        show: { ...revealVariants.show, transition: { ...revealVariants.show.transition, delay } },
      }
    : revealVariants

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
