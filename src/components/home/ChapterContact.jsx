import { motion, useReducedMotion } from 'framer-motion'
import ChapterHead from './ChapterHead'
import Button from '../Button'
import Magnetic from './Magnetic'
import { useLanguage } from '../../i18n/LanguageContext'
import { useContent } from '../../data/useContent'
import { revealViewport, stampSpring } from '../../motion'

// § IV Contacto: el sello se estampa al entrar en vista y el CTA grande lleva
// al formulario de /cv (mismo destino que "Get in touch" del hero).
export default function ChapterContact({ chapter }) {
  const { t } = useLanguage()
  const { contactFields, homeChapters } = useContent()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="chapter chapter-contact" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <ChapterHead chapter={chapter} />
        <div className="closing">
          <div className="closing-copy">
            <p className="closing-heading">{t.contact.heading}</p>
            <p className="closing-intro">{t.contact.intro}</p>
            <Magnetic>
              <Button variant="primary" to="/cv" state={{ scrollTo: 'contact' }}>
                <span className="closing-cta">{homeChapters.contact.cta} <span aria-hidden="true">→</span></span>
              </Button>
            </Magnetic>
          </div>
          <div className="closing-side">
            <motion.p
              className="closing-stamp"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.6, rotate: -14 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={revealViewport}
              transition={{ opacity: { duration: 0.12 }, scale: stampSpring, rotate: stampSpring }}
            >
              <span className="round-stamp">
                <span className="round-stamp-ring" aria-hidden="true" />
                <span className="round-stamp-text">
                  <span className="round-stamp-status">{homeChapters.contact.stamp.status}</span>
                  <span className="round-stamp-main">{homeChapters.contact.stamp.available}</span>
                  <span className="round-stamp-status">{homeChapters.contact.stamp.year}</span>
                </span>
              </span>
            </motion.p>
            <dl className="closing-fields">
              {contactFields.map((f) => (
                <div className="closing-field" key={f.label}>
                  <dt className="field-label">{f.label}</dt>
                  <dd>
                    <a
                      className="field-value"
                      href={f.href}
                      target={f.external ? '_blank' : undefined}
                      rel={f.external ? 'noopener' : undefined}
                    >
                      {f.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
