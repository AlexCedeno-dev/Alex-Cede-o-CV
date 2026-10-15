import Button from './Button'
import Ledger from './Ledger'
import HeroTitle from './home/HeroTitle'
import FadeIn from './home/FadeIn'
import Magnetic from './home/Magnetic'
import { useLanguage } from '../i18n/LanguageContext'
import { refCode } from '../data/shared'
import { heroTiming } from '../motion'

export default function Hero() {
  const { t, lang } = useLanguage()
  const cvFile = lang === 'es' ? 'Edgar-Cedeno-CV-ES.pdf' : 'Edgar-Cedeno-CV-EN.pdf'
  const cvHref = `${import.meta.env.BASE_URL}cv/${cvFile}`

  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-masthead">
          <span>{t.hero.masthead}</span>
          <span>{t.hero.refPrefix} {refCode} · {t.hero.revPrefix} 2026-09-17</span>
        </div>
        <div className="rule" />
        <div className="hero-grid">
          <div>
            <HeroTitle />
            <FadeIn as="p" className="lead" delay={heroTiming.lead}>{t.hero.lead}</FadeIn>
            <FadeIn className="hero-cta" delay={heroTiming.cta}>
              <Magnetic>
                <Button variant="primary" to="/cv" state={{ scrollTo: 'contact' }}>{t.hero.ctaContact}</Button>
              </Magnetic>
              <Magnetic>
                <Button variant="ghost" to="/cv">{t.hero.ctaCvFull}</Button>
              </Magnetic>
              <Magnetic>
                <Button variant="ghost" href={cvHref} download>{t.hero.ctaCv}</Button>
              </Magnetic>
            </FadeIn>
          </div>
          <Ledger />
        </div>
      </div>
    </header>
  )
}
