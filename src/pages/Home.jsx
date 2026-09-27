import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const teasers = [
  { numero: '§ I', to: '/cv', titleKey: 'cvTitle', textKey: 'cvText' },
  { numero: '§ II', to: '/proyectos', titleKey: 'projectsTitle', textKey: 'projectsText' },
  { numero: '§ III', to: '/skills', titleKey: 'skillsTitle', textKey: 'skillsText' },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Hero />
      <section id="index">
        <div className="wrap">
          <div className="section-head-row">
            <span className="section-tab">{t.home.indexEyebrow}</span>
            <div className="rule" />
          </div>
          <Reveal className="teaser-grid">
            {teasers.map((item) => (
              <Link key={item.to} to={item.to} className="teaser-card">
                <span className="folio teaser-numero">{item.numero}</span>
                <h3>{t.home[item.titleKey]}</h3>
                <p>{t.home[item.textKey]}</p>
                <span className="teaser-link">{t.home.viewMore}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
