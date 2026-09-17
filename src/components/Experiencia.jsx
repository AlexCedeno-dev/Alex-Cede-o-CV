import Reveal from './Reveal'
import { jobs } from '../data/content'

export default function Experiencia() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="title">Trayectoria profesional</h2>
        {jobs.map((job) => (
          <Reveal key={job.role} className="job">
            <div className="job-date">{job.date}</div>
            <div>
              <div className="job-role">{job.role}</div>
              <div className="job-org">{job.org}</div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
