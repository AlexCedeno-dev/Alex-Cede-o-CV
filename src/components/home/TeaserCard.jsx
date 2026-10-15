import { Link } from 'react-router-dom'

// El desplazamiento del § y de la flecha en hover / focus-visible vive en CSS
// (transiciones interrumpibles, solo transform).
export default function TeaserCard({ numero, to, title, text, viewLabel }) {
  return (
    <Link to={to} className="teaser-card">
      <span className="folio teaser-numero">{numero}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="teaser-link">
        {viewLabel}
        <span className="teaser-arrow" aria-hidden="true">↗</span>
      </span>
    </Link>
  )
}
