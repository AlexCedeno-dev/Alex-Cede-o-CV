import { useEffect, useRef } from 'react'

// Mueve una "lupa" fija que sigue al cursor sobre el rayado del body.
// `outer` se traslada con el cursor; `inner` lleva el rayado y se corrige
// con translateY para quedar alineado con las líneas del documento
// (que se desplazan con el scroll), así el resalte cae justo sobre ellas.
// Todo se escribe en un solo requestAnimationFrame por frame.
export function useLedgerGlow({ enabled, size, lineGap }) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    let frame = 0
    let pointer = null

    const render = () => {
      frame = 0
      if (!pointer) return
      const left = pointer.x - size / 2
      const top = pointer.y - size / 2
      const docTop = top + window.scrollY
      const shift = -(((docTop % lineGap) + lineGap) % lineGap)
      outer.style.transform = `translate3d(${left}px, ${top}px, 0)`
      inner.style.transform = `translate3d(0, ${shift}px, 0)`
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      pointer = { x: e.clientX, y: e.clientY }
      outer.style.opacity = '1'
      schedule()
    }
    const onLeave = () => {
      outer.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', schedule, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', schedule)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
    }
  }, [enabled, size, lineGap])

  return { outerRef, innerRef }
}
