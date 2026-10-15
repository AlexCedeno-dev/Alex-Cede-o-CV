import { motion, useReducedMotion } from 'framer-motion'
import { heroTiming, revealEase } from '../../motion'

// Entrada corta (opacity + translateY) para piezas de la secuencia del hero.
export default function FadeIn({ as = 'div', delay = 0, className, children }) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: heroTiming.fadeDuration, ease: revealEase, delay }}
    >
      {children}
    </MotionTag>
  )
}
