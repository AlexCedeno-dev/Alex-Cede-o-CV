import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function Hobbies() {
  const { t } = useLanguage()
  const { hobbies } = useContent()

  return (
    <section id="hobbies">
      <div className="wrap">
        <SectionHeading numero="§ V">{t.hobbies.heading}</SectionHeading>
        <Reveal className="hobby-grid">
          {hobbies.map((hobby, i) => (
            <div className="hobby-card" key={hobby.code}>
              <span className="folio hobby-number">{String(i + 1).padStart(2, '0')}</span>
              <h4>{hobby.title}</h4>
              <p>{hobby.text}</p>
              <div className="hobby-skill">{hobby.skill}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
