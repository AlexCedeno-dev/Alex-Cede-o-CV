import PageHeader from '../components/PageHeader'
import ProjectHeader from '../components/projects/ProjectHeader'
import ProjectDiagram from '../components/projects/ProjectDiagram'
import ComponentSpecs from '../components/projects/ComponentSpecs'
import TechnicalDecision from '../components/projects/TechnicalDecision'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

// Solo GreonTrack. Las capturas se agregan en src/data/greontrackDetail.js.
export default function Proyectos() {
  const { t } = useLanguage()
  const { projects } = useContent()
  const project = projects[0]

  return (
    <>
      <PageHeader eyebrow={t.pages.projectsEyebrow} title={t.pages.projectsTitle} />
      <section id="projects-detail">
        <div className="wrap">
          <ProjectHeader project={project} />
          <ProjectDiagram project={project} />
          <ComponentSpecs components={project.components} />
          <TechnicalDecision />
        </div>
      </section>
    </>
  )
}
