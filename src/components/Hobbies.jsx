import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { hobbies } from '../data/content'

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="wrap">
        <SectionHeading numero="§ V">Hobbies, y lo que aportan a mi trabajo</SectionHeading>
        <Reveal className="hobby-grid">
          {hobbies.map((hobby, i) => (
            <div className="hobby-card" key={hobby.code}>
              <span className="folio hobby-number">{String(i + 1).padStart(2, '0')}</span>
              <h4>{hobby.title}</h4>
              <p>{hobby.text}</p>
              <div className="hobby-skill">{hobby.skill}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
