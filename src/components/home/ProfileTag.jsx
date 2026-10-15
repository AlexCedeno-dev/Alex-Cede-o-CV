import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useContent } from '../../data/useContent'
import LocalTime from './LocalTime'
import { heroTiming, stampSpring } from '../../motion'

// La hora local va justo después de la ubicación.
const LOCAL_TIME_AFTER = 2

// Quick Profile como ficha de archivo colgada: inclinada, con ojal y el
// sello "disponible" estampado encima. Las filas entran con un stagger corto
// sincronizado con el título (heroTiming en motion.js).
export default function ProfileTag() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const { ledgerFields, homeLabels } = useContent()

  const fields = ledgerFields.filter((f) => !f.stamp)
  const status = ledgerFields.find((f) => f.stamp)
  const rows = [
    ...fields.slice(0, LOCAL_TIME_AFTER + 1),
    { k: homeLabels.localTime, clock: true },
    ...fields.slice(LOCAL_TIME_AFTER + 1),
  ]

  const listVariants = {
    hidden: {},
    show: { transition: { delayChildren: heroTiming.ledgerRows, staggerChildren: heroTiming.ledgerStagger } },
  }
  const rowVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  }

  return (
    <div className="profile-tag">
      <span className="profile-tag-eyelet" aria-hidden="true" />
      <div className="profile-tag-head">
        <span>{t.ledger.title}</span>
        <span>2026</span>
      </div>
      <motion.dl
        className="profile-tag-body"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="show"
        variants={listVariants}
      >
        {rows.map((item) => (
          <motion.div key={item.k} className="ledger-row" variants={rowVariants}>
            <dt className="field">{item.k}</dt>
            <dd>{item.clock ? <LocalTime /> : <span className="value">{item.v}</span>}</dd>
          </motion.div>
        ))}
      </motion.dl>
      {status && (
        <motion.p
          className="profile-tag-stamp"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.25, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 6 }}
          transition={{
            opacity: { duration: 0.12, ease: 'easeOut', delay: heroTiming.stamp },
            scale: { ...stampSpring, delay: heroTiming.stamp },
            rotate: { ...stampSpring, delay: heroTiming.stamp },
          }}
        >
          <span className="sr-only">{status.k}: </span>
          <span className="stamp active">{status.stamp}</span>
        </motion.p>
      )}
    </div>
  )
}
