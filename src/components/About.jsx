import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function About() {
  const { t } = useLanguage()
  const { aboutParagraphs } = useContent()

  return (
    <section id="about">
      <div className="wrap">
        <SectionHeading numero="§ I">{t.about.heading}</SectionHeading>
        <Reveal className="about-grid">
          <div className="avatar-frame">
            <img
              className="avatar"
              src={`${import.meta.env.BASE_URL}media/avatar.jpg`}
              alt={t.about.avatarAlt}
              loading="lazy"
            />
          </div>
          <div className="about-text">
            {aboutParagraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
