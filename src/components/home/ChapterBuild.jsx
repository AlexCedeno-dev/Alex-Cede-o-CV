import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import ChapterHead from './ChapterHead'
import GreonTrackDiagram from './GreonTrackDiagram'
import { useContent } from '../../data/useContent'
import { useMediaQuery } from '../../hooks/useMediaQuery'

// § II Qué construyo. Única sección pegajosa del sitio: solo en escritorio
// y sin reduced motion (el CSS usa la misma condición). El scroll es el
// nativo; la sección solo es más alta para dar recorrido al trazo.
export default function ChapterBuild({ chapter }) {
  const sectionRef = useRef(null)
  const { projects, homeChapters } = useContent()
  const wide = useMediaQuery('(min-width: 769px)')
  const shouldReduceMotion = useReducedMotion()
  const pinned = wide && !shouldReduceMotion
  const project = projects[0]
  const labels = homeChapters.build

  return (
    <section className="chapter chapter-build" id={chapter.id} ref={sectionRef} aria-labelledby={`${chapter.id}-title`}>
      <div className="chapter-build-pin">
        <div className="wrap">
          <ChapterHead chapter={chapter} />
          <div className="build-intro">
            <p className="build-project">
              <span className="build-name">{project.title}</span>
              <span className="build-tagline">{project.tagline}</span>
            </p>
            <p className="build-links">
              <Link to="/proyectos" className="build-link">{labels.project} <span aria-hidden="true">→</span></Link>
              <a href={project.demoHref} target="_blank" rel="noopener" className="build-link build-link-ext">
                {labels.demo} <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
          <GreonTrackDiagram
            key={`${wide ? 'wide' : 'tall'}-${pinned}`}
            layoutKey={wide ? 'wide' : 'tall'}
            pinned={pinned}
            sectionRef={sectionRef}
            components={project.components}
            labels={labels}
          />
        </div>
      </div>
    </section>
  )
}
