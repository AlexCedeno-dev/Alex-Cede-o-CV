import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function Proyectos() {
  const { t } = useLanguage()
  const { projects } = useContent()

  return (
    <>
      <PageHeader eyebrow={t.pages.projectsEyebrow} title={t.pages.projectsTitle} />
      <section id="projects-detail">
        <div className="wrap">
          <Reveal className="project-list">
            {projects.map((p) => (
              <div className="project-card" key={p.id}>
                <div className="project-head">
                  <div>
                    <h2>{p.title}</h2>
                    <p className="project-tagline">{p.tagline}</p>
                  </div>
                  <span className="folio project-period">{p.period}</span>
                </div>

                {p.images.length > 0 ? (
                  <div className="project-gallery">
                    {p.images.map((img) => (
                      <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                    ))}
                  </div>
                ) : (
                  <p className="folio project-gallery-empty">{t.projectsPage.imagesSoon}</p>
                )}

                <p className="project-description">{p.description}</p>

                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>

                <p className="field-label project-role-label">{t.projects.role}</p>
                <p className="field-value">{p.role}</p>

                <a className="project-link demo project-demo-link" href={p.demoHref} target="_blank" rel="noopener">
                  {t.projectsPage.demo} ↗
                </a>

                <p className="field-label project-components-label">{t.projectsPage.componentsHeading}</p>
                <div className="project-components">
                  {p.components.map((c) => (
                    <div className="project-component" key={c.name}>
                      <div className="project-component-head">
                        <h3>{c.name}</h3>
                        <a href={c.repo} target="_blank" rel="noopener" className="project-link">
                          {t.projectsPage.repo}
                        </a>
                      </div>
                      <p>{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
