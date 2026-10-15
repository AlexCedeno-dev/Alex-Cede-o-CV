import { useMotionValue, useReducedMotion, useScroll } from 'framer-motion'

// Progreso (0 a 1) del trazo del diagrama, ligado al scroll nativo.
// - pinned: la sección es pegajosa; el trazo avanza mientras dura el recorrido.
// - sin pin (móvil): avanza mientras el diagrama cruza la pantalla.
// Con reduced motion devuelve 1 fijo: el diagrama aparece ya dibujado.
export function useDiagramProgress(ref, pinned) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: pinned ? ['start start', 'end end'] : ['start 0.85', 'end 0.55'],
  })
  const drawn = useMotionValue(1)
  return shouldReduceMotion ? drawn : scrollYProgress
}
