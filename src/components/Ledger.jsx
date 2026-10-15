import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'
import LocalTime from './home/LocalTime'
import { heroTiming, stampSpring } from '../motion'

// La hora local va justo después de la ubicación.
const LOCAL_TIME_AFTER = 2

// Puerta de expediente: las filas entran una a una como stagger declarativo,
// sincronizado con la entrada del hero (ver heroTiming en motion.js).
export default function Ledger() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const { ledgerFields, homeLabels } = useContent()

  const rows = [
    ...ledgerFields.slice(0, LOCAL_TIME_AFTER + 1),
    { k: homeLabels.localTime, clock: true },
    ...ledgerFields.slice(LOCAL_TIME_AFTER + 1),
  ]

  const containerVariants = {
    hidden: {},
    show: {
      transition: { delayChildren: heroTiming.ledgerRows, staggerChildren: heroTiming.ledgerStagger },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  }

  // Estampado: entra un poco grande y girado, y asienta con un rebote corto.
  // El retraso es absoluto (desde el montaje), no relativo a su fila.
  const stampVariants = {
    hidden: { opacity: 0, scale: 1.25, rotate: -6 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: -1.2,
      transition: {
        opacity: { duration: 0.12, ease: 'easeOut', delay: heroTiming.stamp },
        scale: { ...stampSpring, delay: heroTiming.stamp },
        rotate: { ...stampSpring, delay: heroTiming.stamp },
      },
    },
  }

  return (
    <div className="ledger">
      <div className="ledger-header">
        <span>{t.ledger.title}</span>
        <span>2026</span>
      </div>
      <motion.div
        className="ledger-body"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="show"
        variants={containerVariants}
      >
        {rows.map((item) => (
          <motion.div key={item.k} className="ledger-row" variants={rowVariants}>
            <span className="field">{item.k}</span>{' '}
            {item.clock ? (
              <LocalTime />
            ) : item.stamp ? (
              <motion.span className="stamp active" variants={stampVariants}>
                {item.stamp}
              </motion.span>
            ) : (
              <span className="value">{item.v}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
