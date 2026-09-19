import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function Skills() {
  const { t } = useLanguage()
  const { skillGroups } = useContent()

  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeading numero="§ IV">{t.skills.heading}</SectionHeading>
        <Reveal className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-head">
                <h4>{group.title}</h4>
                <div className="skill-group-rule" />
              </div>
              <div className="skill-list">
                {group.tags.map((skill) => (
                  <div className="skill-item" key={skill}>
                    <span className="skill-bullet" aria-hidden="true" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
