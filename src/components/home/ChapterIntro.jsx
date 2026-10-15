import Button from '../Button'
import HeroTitle from './HeroTitle'
import FadeIn from './FadeIn'
import Magnetic from './Magnetic'
import ProfileTag from './ProfileTag'
import { useLanguage } from '../../i18n/LanguageContext'
import { refCode } from '../../data/shared'
import { heroTiming } from '../../motion'

// § I Quién soy: nombre a todo el ancho, ficha de perfil y los CTAs de siempre.
export default function ChapterIntro({ chapter }) {
  const { t, lang } = useLanguage()
  const cvFile = lang === 'es' ? 'Edgar-Cedeno-CV-ES.pdf' : 'Edgar-Cedeno-CV-EN.pdf'
  const cvHref = `${import.meta.env.BASE_URL}cv/${cvFile}`

  return (
    <header className="hero chapter" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <div className="hero-masthead">
          <span>
            <span className="hero-chapter">{chapter.numero}</span> · {chapter.label}
          </span>
          <span>{t.hero.refPrefix} {refCode} · {t.hero.revPrefix} 2026-09-17</span>
        </div>
        <div className="rule" />
        <HeroTitle id={`${chapter.id}-title`} />
        <div className="hero-grid">
          <div className="hero-copy">
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
          <ProfileTag />
        </div>
      </div>
    </header>
  )
}
