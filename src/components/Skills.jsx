import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeading numero="§ IV">Habilidades</SectionHeading>
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
