import Reveal from '../Reveal'
import CvHeading from './CvHeading'
import CvSeal from './CvSeal'
import { cardStampDelay } from '../../motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useContent } from '../../data/useContent'

const TILTS = [3, -4, 2, -3]

// Lista de credenciales (formación o certificaciones) tomada de educationCards,
// filtrada por los ids de cvPage[idsKey]. Sumar una al contenido no requiere
// tocar este componente.
export default function CvCredentials({ numero, idsKey, headingKey, anchor }) {
  const { t } = useLanguage()
  const { educationCards, cvPage } = useContent()
  const items = cvPage[idsKey].map((id) => educationCards.find((c) => c.id === id)).filter(Boolean)
  const titleId = `cv-${anchor}-title`

  return (
    <section id={anchor} aria-labelledby={titleId}>
      <div className="wrap">
        <CvHeading numero={numero} id={titleId}>{cvPage.sections[headingKey]}</CvHeading>
        <div className="cv-cards">
          {items.map((item, i) => (
            <Reveal as="article" key={item.id} className="cv-card card-fx" card delay={i * 0.09}>
              <div className="cv-card-seal">
                <CvSeal seal={cvPage.seals[item.id]} tilt={TILTS[i % TILTS.length]} delay={cardStampDelay + i * 0.09} />
              </div>
              <p className="cv-card-date">
                {item.date ? (
                  <time dateTime={item.date}>{cvPage.periods?.[item.id] ?? item.period}</time>
                ) : (
                  cvPage.periods?.[item.id] ?? item.period
                )}
              </p>
              <h3 className="cv-card-title">{item.title}</h3>
              <p className="job-org">{item.org}</p>
              {item.detalle && <p className="cv-text cv-card-detail">{item.detalle}</p>}
              {item.facts?.length > 0 && (
                <dl className="cv-card-facts">
                  {item.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd className={fact.mono ? 'cv-card-mono' : undefined}>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {item.link && (
                <a
                  className="link cv-card-link"
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.link.ariaLabel}
                >
                  {item.link.label}
                </a>
              )}
              <p className="folio job-ref">{t.education.ref} {item.id}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
