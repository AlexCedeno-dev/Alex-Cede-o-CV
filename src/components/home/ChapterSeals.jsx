import { motion, useReducedMotion } from 'framer-motion'
import ChapterHead from './ChapterHead'
import { useContent } from '../../data/useContent'
import { revealViewport, stampSpring } from '../../motion'

// Rotación fija por posición (se repite si hay más sellos que valores).
const TILTS = [-4, 3, -2, 4]

// § II Sellos. Se alimenta del array homeChapters.seals.items: agregar un
// sello es agregar un objeto, sin tocar el componente ni el CSS.
export default function ChapterSeals({ chapter }) {
  const { homeChapters } = useContent()
  const shouldReduceMotion = useReducedMotion()
  const { title, subtitle, items } = homeChapters.seals

  return (
    <section className="chapter chapter-seals" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <ChapterHead chapter={chapter} title={title} />
        <p className="chapter-sub">{subtitle}</p>
        <ul className="seal-list">
          {items.map((seal, i) => {
            const tilt = TILTS[i % TILTS.length]
            return (
              <li className="seal-item" key={`${seal.title}-${seal.label}`}>
                <figure className="seal-figure">
                  <motion.div
                    className={`seal seal-${seal.tone}${seal.compact ? ' seal-compact' : ''}`}
                    style={{ rotate: tilt }}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.15 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={revealViewport}
                    transition={{ opacity: { duration: 0.12, delay: i * 0.09 }, scale: { ...stampSpring, delay: i * 0.09 } }}
                  >
                    <span className="seal-ring" aria-hidden="true" />
                    <span className="seal-text">
                      <span className="seal-label">{seal.label}</span>
                      <span className="seal-title">{seal.title}</span>
                      <span className="seal-sub">{seal.sub}</span>
                    </span>
                  </motion.div>
                  <figcaption className="seal-caption">{seal.caption}</figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
