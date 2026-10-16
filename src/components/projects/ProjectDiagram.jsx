import GreonTrackDiagram from '../home/GreonTrackDiagram'
import { useContent } from '../../data/useContent'
import { useLanguage } from '../../i18n/LanguageContext'
import { useMediaQuery } from '../../hooks/useMediaQuery'

// El mismo diagrama del Home, en grande y sin sticky: se traza con el scroll
// normal (o aparece completo con reduced motion). En móvil, el layout vertical.
export default function ProjectDiagram({ project }) {
  const { t } = useLanguage()
  const { homeChapters } = useContent()
  const wide = useMediaQuery('(min-width: 769px)')

  return (
    <div className="pj-section" role="region" aria-labelledby="pj-diagram-title">
      <h3 className="pj-subheading" id="pj-diagram-title">{t.projectsPage.diagramHeading}</h3>
      <p className="pj-note">{t.projectsPage.diagramNote}</p>
      <GreonTrackDiagram
        key={wide ? 'wide' : 'tall'}
        layoutKey={wide ? 'wide' : 'tall'}
        pinned={false}
        large
        components={project.components}
        labels={homeChapters.build}
      />
    </div>
  )
}
