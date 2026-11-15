import Reveal from '../Reveal'
import Button from '../Button'
import CvHeading from './CvHeading'
import { useContent } from '../../data/useContent'

// § V Skills: una sola línea con enlace interno; el stack vive en /skills.
export default function CvSkillsLink() {
  const { cvPage } = useContent()

  return (
    <section id="skills" aria-labelledby="cv-skills-title">
      <div className="wrap">
        <CvHeading numero="§ V" id="cv-skills-title">{cvPage.sections.skills}</CvHeading>
        <Reveal className="cv-skills-line">
          <p className="cv-text">{cvPage.skillsLine}</p>
          <Button variant="ghost" to="/skills">{cvPage.skillsCta} <span aria-hidden="true">→</span></Button>
        </Reveal>
      </div>
    </section>
  )
}
