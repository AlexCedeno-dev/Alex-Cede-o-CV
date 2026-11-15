import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import CvHeading from './CvHeading'
import { useLanguage } from '../../i18n/LanguageContext'
import { useContent } from '../../data/useContent'
import { refCode } from '../../data/shared'
import { revealViewport, stampSpring } from '../../motion'

// § I Masthead de folio + carta de presentación.
// La carta (cvPage.letter) es un BORRADOR pendiente de revisión de Edgar:
// ver el comentario en content.es.js / content.en.js.
export default function CvLetter() {
  const { t } = useLanguage()
  const { cvPage, homeChapters } = useContent()
  const shouldReduceMotion = useReducedMotion()
  const { letter } = cvPage
  const stamp = homeChapters.contact.stamp

  return (
    <section id="letter" aria-labelledby="cv-letter-title">
      <div className="wrap">
        <div className="hero-masthead cv-masthead">
          <span>{t.hero.masthead}</span>
          <span>{t.hero.refPrefix} {refCode} · {t.hero.revPrefix} {cvPage.rev}</span>
        </div>
        <CvHeading numero="§ I" id="cv-letter-title">{letter.heading}</CvHeading>
        <div className="cv-letter-grid">
          <Reveal className="cv-letter">
            {letter.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="cv-signature">{letter.signature}</p>
          </Reveal>
          <motion.p
            className="closing-stamp cv-letter-stamp"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.6, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={revealViewport}
            transition={{ opacity: { duration: 0.12 }, scale: stampSpring, rotate: stampSpring }}
          >
            <span className="round-stamp">
              <span className="round-stamp-ring" aria-hidden="true" />
              <span className="round-stamp-text">
                <span className="round-stamp-status">{stamp.status}</span>
                <span className="round-stamp-main">{stamp.available}</span>
                <span className="round-stamp-status">{stamp.year}</span>
              </span>
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
