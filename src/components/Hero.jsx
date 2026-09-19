import Button from './Button'
import Ledger from './Ledger'
import { useLanguage } from '../i18n/LanguageContext'
import { refCode } from '../data/shared'

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
            <h1>Edgar Alejandro<br />Cedeño Suárez&nbsp;—<br /><em>Full-Stack Developer</em></h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="hero-cta">
              <Button variant="primary" href="#contact">{t.hero.ctaContact}</Button>
              <Button variant="ghost" href={cvHref} download>{t.hero.ctaCv}</Button>
              <Button variant="ghost" href="#experience">{t.hero.ctaExperience}</Button>
              <Button variant="ghost" href="https://github.com/AlexCedeno-dev" external>{t.hero.ctaGithub}</Button>
            </div>
          </div>
          <Ledger />
        </div>
      </div>
    </header>
  )
}
