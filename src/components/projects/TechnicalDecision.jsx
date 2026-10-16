import Reveal from '../Reveal'
import { useLanguage } from '../../i18n/LanguageContext'

// Decisión técnica real documentada en el README del Agente.
export default function TechnicalDecision() {
  const { t } = useLanguage()
  const d = t.projectsPage.decision

  return (
    <div className="pj-section" role="region" aria-labelledby="pj-decision-title">
      <h3 className="pj-subheading" id="pj-decision-title">{d.heading}</h3>
      <Reveal className="pj-decision">
        <p className="folio">{d.subject}</p>
        <p className="pj-decision-lead">{d.lead}</p>
        <dl className="pj-decision-points">
          {d.points.map((point) => (
            <div key={point.title}>
              <dt>{point.title}</dt>
              <dd>{point.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  )
}
