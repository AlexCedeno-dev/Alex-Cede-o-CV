import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

const LEVEL_KEYS = { 1: 'level1', 2: 'level2', 3: 'level3' }

export default function SkillsDetail() {
  const { t } = useLanguage()
  const { skillsDetailed, skillGroups } = useContent()
  // Idiomas / Spoken languages siempre es el último grupo en skillGroups
  // (ver content.es.js/content.en.js), no tiene nivel de dominio propio
  // porque la etiqueta ya lo dice (nativo/B1), así que se muestra aparte.
  const spokenLanguages = skillGroups[skillGroups.length - 1]

  return (
    <>
      <PageHeader eyebrow={t.pages.skillsEyebrow} title={t.pages.skillsTitle} />
      <section id="skills-detail">
        <div className="wrap">
          <Reveal className="skill-detail-groups">
            {skillsDetailed.map((group) => (
              <div className="skill-detail-group" key={group.title}>
                <div className="skill-group-head">
                  <h4>{group.title}</h4>
                  <div className="skill-group-rule" />
                </div>
                <div className="skill-detail-list">
                  {group.items.map((item) => {
                    const levelLabel = `${t.skillsPage.levelLabel}: ${t.skillsPage[LEVEL_KEYS[item.level]]}`
                    return (
                      <div className="skill-detail-item" key={item.name}>
                        <div className="skill-detail-row">
                          <span className="skill-detail-name">{item.name}</span>
                          <span className="skill-level-dots" role="img" aria-label={levelLabel}>
                            {[1, 2, 3].map((n) => (
                              <span key={n} className={`skill-level-dot${n <= item.level ? ' filled' : ''}`} aria-hidden="true" />
                            ))}
                          </span>
                        </div>
                        {item.usedIn.length > 0 && (
                          <p className="skill-used-in">
                            {t.skillsPage.usedIn}: {item.usedIn.join(' · ')}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </Reveal>

          {spokenLanguages && (
            <div className="skill-detail-group skill-detail-languages">
              <div className="skill-group-head">
                <h4>{spokenLanguages.title}</h4>
                <div className="skill-group-rule" />
              </div>
              <div className="skill-list">
                {spokenLanguages.tags.map((tag) => (
                  <div className="skill-item" key={tag}>
                    <span className="skill-bullet" aria-hidden="true" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
