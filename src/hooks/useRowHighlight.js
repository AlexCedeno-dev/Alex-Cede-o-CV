import { useEffect, useRef } from 'react'

// Una sola barra de resalte que se desliza a la fila bajo el cursor.
// Se mueve y se dimensiona solo con transform (translateY + scaleY sobre
// una barra de 100px), en un requestAnimationFrame por frame.
// Solo con puntero fino; en touch o con reduced motion no se monta nada.
const BAR_BASE = 100

export function useRowHighlight(enabled) {
  const listRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const list = listRef.current
    const bar = barRef.current
    if (!list || !bar) return

    let frame = 0
    let row = null

    const render = () => {
      frame = 0
      if (!row) {
        bar.style.opacity = '0'
        return
      }
      bar.style.opacity = '1'
      bar.style.transform = `translate3d(0, ${row.offsetTop}px, 0) scaleY(${row.offsetHeight / BAR_BASE})`
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onMove = (e) => {
      const next = e.target.closest('[data-row]')
      if (next !== row) {
        row = next
        schedule()
      }
    }
    const onLeave = () => {
      row = null
      schedule()
    }

    list.addEventListener('pointermove', onMove)
    list.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      list.removeEventListener('pointermove', onMove)
      list.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled])

  return { listRef, barRef }
}
