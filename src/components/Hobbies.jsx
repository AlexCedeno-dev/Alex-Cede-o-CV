import Reveal from './Reveal'
import { hobbies } from '../data/content'

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="wrap">
        <h2 className="title">Hobbies, y lo que aportan a mi trabajo</h2>
        <Reveal className="hobby-grid">
          {hobbies.map((hobby) => (
            <div className="hobby-card" key={hobby.code}>
              <span className="code">{hobby.code}</span>
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
