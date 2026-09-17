import { motion, useReducedMotion } from 'framer-motion'
import { revealVariants, revealViewport } from '../motion'

// Reemplaza el [data-reveal] + IntersectionObserver del sitio estático:
// misma curva, mismo umbral, pero interrumpible y consciente de prefers-reduced-motion.
export default function Reveal({ as = 'div', className, children }) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]

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
      variants={revealVariants}
    >
      {children}
    </MotionTag>
  )
}
