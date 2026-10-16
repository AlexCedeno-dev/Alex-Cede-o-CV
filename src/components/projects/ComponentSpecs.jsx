import Reveal from '../Reveal'
import ComponentCard from './ComponentCard'
import { componentDetails } from '../../data/greontrackDetail'
import { useLanguage } from '../../i18n/LanguageContext'

export default function ComponentSpecs({ components }) {
  const { t } = useLanguage()

  return (
    <div className="pj-section" role="region" aria-labelledby="pj-specs-title">
      <h3 className="pj-subheading" id="pj-specs-title">{t.projectsPage.componentsHeading}</h3>
      <div className="pj-cards">
        {components.map((component, i) => (
          <Reveal key={component.name} delay={(i % 2) * 0.06}>
            <ComponentCard component={component} detail={componentDetails[i]} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
