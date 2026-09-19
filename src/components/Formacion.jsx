import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function Formacion() {
  const { t } = useLanguage()
  const { educationCards } = useContent()

  return (
    <section id="education">
      <div className="wrap">
        <SectionHeading numero="§ III">{t.education.heading}</SectionHeading>
        <Reveal className="formacion-list">
          {educationCards.map((item) => (
            <div className="formacion-item" key={item.id}>
              <div className="formacion-row">
                <div>
                  <h3>{item.title}</h3>
                  <div className="formacion-org">{item.org}</div>
                </div>
                <div className="formacion-meta">
                  <span className="formacion-period">{item.period}</span>
                  <span className={`stamp ${item.status.type}`}>{item.status.label}</span>
                </div>
              </div>
              {item.detalle && <p className="formacion-detalle">{item.detalle}</p>}
              {item.link && (
                <a className="link" href={item.link.href} target="_blank" rel="noopener">
                  {item.link.label}
                </a>
              )}
              <p className="folio formacion-ref">{t.education.ref} {item.id}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
