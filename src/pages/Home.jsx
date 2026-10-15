import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import ScrollProgress from '../components/home/ScrollProgress'
import LedgerGlow from '../components/home/LedgerGlow'
import TeaserCard from '../components/home/TeaserCard'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

const teasers = [
  { numero: '§ I', to: '/cv', titleKey: 'cvTitle', textKey: 'cvText' },
  { numero: '§ II', to: '/proyectos', titleKey: 'projectsTitle', textKey: 'projectsText' },
  { numero: '§ III', to: '/skills', titleKey: 'skillsTitle', textKey: 'skillsText' },
]

const TEASER_STAGGER = 0.08

export default function Home() {
  const { t } = useLanguage()
  const { homeLabels } = useContent()

  return (
    <>
      <ScrollProgress />
      <LedgerGlow />
      <Hero />
      <section id="index">
        <div className="wrap">
          <div className="section-head-row">
            <span className="section-tab">{t.home.indexEyebrow}</span>
            <div className="rule" />
          </div>
          <div className="teaser-grid">
            {teasers.map((item, i) => (
              <Reveal key={item.to} className="teaser-cell" delay={i * TEASER_STAGGER}>
                <TeaserCard
                  numero={item.numero}
                  to={item.to}
                  title={t.home[item.titleKey]}
                  text={t.home[item.textKey]}
                  viewLabel={homeLabels.view}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
