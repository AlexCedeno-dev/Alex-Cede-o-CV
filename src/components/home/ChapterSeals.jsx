import { motion, useReducedMotion } from 'framer-motion'
import ChapterHead from './ChapterHead'
import SealArc from '../SealArc'
import { useContent } from '../../data/useContent'
import Reveal from '../Reveal'
import { revealViewport, cardStampSpring, cardStampDelay, cardStampFrom } from '../../motion'

// Rotación fija por posición (se repite si hay más sellos que valores).
const TILTS = [-4, 3, -2, 4]

// § II Sellos, en apartados (homeChapters.seals.groups). Se alimenta del array
// homeChapters.seals.items: agregar un sello es agregar un objeto con su `group`,
// sin tocar el componente ni el CSS. El orden de los apartados es el de `groups`.
export default function ChapterSeals({ chapter }) {
  const { homeChapters } = useContent()
  const shouldReduceMotion = useReducedMotion()
  const { title, subtitle, groups, items } = homeChapters.seals

  // índice global por sello: define su inclinación; el retardo es por apartado.
  const indexed = items.map((seal, index) => ({ seal, index }))

  return (
    <section className="chapter chapter-seals" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <ChapterHead chapter={chapter} title={title} />
        <p className="chapter-sub">{subtitle}</p>
        {Object.entries(groups).map(([key, groupTitle]) => {
          const entries = indexed.filter(({ seal }) => seal.group === key)
          if (entries.length === 0) return null
          const headingId = `${chapter.id}-${key}`
          return (
            <div className="seal-group" key={key}>
              <h3 className="seal-group-title" id={headingId}>{groupTitle}</h3>
              <ul className={`seal-list${entries.length === 1 ? ' seal-list-single' : ''}`} aria-labelledby={headingId}>
                {entries.map(({ seal, index }, i) => (
                  <li className="seal-item" key={`${seal.title}-${seal.label}`}>
                    <Reveal as="article" className="seal-card card-fx" card delay={i * 0.09}>
                      <div className="seal-card-seal">
                        <motion.div
                          className={`seal seal-${seal.tone}${seal.compact ? ' seal-compact' : ''}${seal.arc ? ' seal-has-arc' : ''}`}
                          style={{ rotate: TILTS[index % TILTS.length] }}
                          initial={shouldReduceMotion ? false : { opacity: 0, scale: cardStampFrom }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={revealViewport}
                          transition={{ opacity: { duration: 0.12, delay: cardStampDelay + i * 0.09 }, scale: { ...cardStampSpring, delay: cardStampDelay + i * 0.09 } }}
                        >
                          <span className="seal-ring" aria-hidden="true" />
                          {seal.arc && <SealArc arc={seal.arc} />}
                          <span className="seal-text">
                            <span className="seal-label">{seal.label}</span>
                            <span className="seal-title">{seal.title}</span>
                            <span className="seal-sub">{seal.sub}</span>
                          </span>
                        </motion.div>
                      </div>
                      <div className="seal-card-body">
                        {seal.org && <p className="seal-card-org">{seal.org}</p>}
                        <h4 className="seal-card-title">{seal.caption}</h4>
                        <p className="seal-card-desc">{seal.description}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
