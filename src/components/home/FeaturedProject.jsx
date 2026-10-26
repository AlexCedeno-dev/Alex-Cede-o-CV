import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { useContent } from '../../data/useContent'

// Tarjeta "Proyecto destacado": no es capítulo (sin §, fuera del índice).
export default function FeaturedProject() {
  const { projects, homeChapters } = useContent()
  const project = projects[0]
  const labels = homeChapters.featured

  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="wrap">
        <Reveal className="featured-card">
          <p className="featured-eyebrow">{labels.eyebrow}</p>
          <h2 className="featured-name" id="featured-title">{project.title}</h2>
          <p className="featured-tagline">{project.tagline}</p>
          <p className="featured-links">
            <Link to="/proyectos" className="featured-btn featured-btn-main">
              {labels.project} <span aria-hidden="true">→</span>
            </Link>
            <a href={project.demoHref} target="_blank" rel="noopener" className="featured-btn featured-btn-ghost">
              {labels.demo} <span aria-hidden="true">↗</span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
