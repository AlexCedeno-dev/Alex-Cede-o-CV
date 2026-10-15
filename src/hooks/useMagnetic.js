import { useRef } from 'react'
import { useReducedMotion, useSpring } from 'framer-motion'
import { useMediaQuery } from './useMediaQuery'
import { magneticSpring } from '../motion'

// Atrae el elemento hacia el cursor, como máximo `max` px por eje.
// Solo con puntero fino; con teclado, touch o reduced motion no se mueve.
export function useMagnetic(max = 6) {
  const ref = useRef(null)
  const finePointer = useMediaQuery('(pointer: fine) and (hover: hover)')
  const shouldReduceMotion = useReducedMotion()
  const enabled = finePointer && !shouldReduceMotion
  const x = useSpring(0, magneticSpring)
  const y = useSpring(0, magneticSpring)

  function onPointerMove(e) {
    if (!enabled || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const clamp = (v) => Math.max(-1, Math.min(1, v))
    x.set(clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * max)
    y.set(clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * max)
  }

  function onPointerLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, style: { x, y }, onPointerMove, onPointerLeave }
}
