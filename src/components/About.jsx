import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { aboutParagraphs } from '../data/content'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHeading numero="§ I">Quién soy</SectionHeading>
        <Reveal className="about-grid">
          <div className="avatar-frame">
            <img
              className="avatar"
              src={`${import.meta.env.BASE_URL}media/avatar.jpg`}
              alt="Retrato de Edgar Alejandro Cedeño Suárez"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            {aboutParagraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
