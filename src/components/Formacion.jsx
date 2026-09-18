import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { educationCards } from '../data/content'

export default function Formacion() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionHeading numero="§ III">Formación</SectionHeading>
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
              <p className="folio formacion-ref">Ref. {item.id}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
