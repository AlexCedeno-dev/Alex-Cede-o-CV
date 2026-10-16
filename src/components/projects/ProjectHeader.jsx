import { useLanguage } from '../../i18n/LanguageContext'

// Encabezado de la ficha del proyecto: nombre, descripción, rol y demo (teal, externo).
export default function ProjectHeader({ project }) {
  const { t } = useLanguage()

  return (
    <header className="pj-head">
      <div className="pj-head-top">
        <h2 className="pj-name">{project.title}</h2>
        <span className="folio">{project.period}</span>
      </div>
      <p className="pj-description">{project.description}</p>
      <p className="pj-role">
        <span className="field-label">{t.projectsPage.roleLabel}</span>
        <span className="field-value">{project.role}</span>
      </p>
      <a className="pj-demo" href={project.demoHref} target="_blank" rel="noopener">
        {t.projectsPage.demoLink} <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
