import { useReducedMotion, useScroll, useSpring } from 'framer-motion'

// Progreso de scroll de la página (0 a 1). Con reduced motion se devuelve
// el valor crudo, sin el suavizado del spring.
export function useScrollProgress() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 260, damping: 40, restDelta: 0.001 })
  return shouldReduceMotion ? scrollYProgress : smooth
}
