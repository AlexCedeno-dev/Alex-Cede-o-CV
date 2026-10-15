import { useReducedMotion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'

// Índice lateral fijo (solo escritorio ancho, ver CSS). Es un div con
// role="navigation" y no un <nav>, para no heredar los estilos globales de
// la barra superior (nav{ position:fixed; ... }). Son botones y no
// anclas #id porque el router usa el hash para las rutas. Salta con el
// scroll nativo (suave salvo reduced motion) y mueve el foco al título.
export default function ChapterIndex({ chapters, label }) {
  const active = useActiveSection(chapters.map((c) => c.id))
  const shouldReduceMotion = useReducedMotion()

  function jump(id) {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' })
    document.getElementById(`${id}-title`)?.focus({ preventScroll: true })
  }

  return (
    <div className="chapter-index" role="navigation" aria-label={label}>
      <ol>
        {chapters.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className="chapter-index-item"
              aria-current={active === c.id ? 'true' : undefined}
              onClick={() => jump(c.id)}
            >
              <span className="chapter-index-mark" aria-hidden="true" />
              <span className="chapter-index-num">{c.numero}</span>
              <span className="chapter-index-label">{c.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
