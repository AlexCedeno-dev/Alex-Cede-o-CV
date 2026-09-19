import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'
import { stampEase } from '../motion'

// Puerta de expediente: las filas entran una a una (antes setTimeout recursivo
// en script.js), ahora como stagger declarativo que Framer Motion puede interrumpir.
export default function Ledger() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const { ledgerFields } = useContent()

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.26 } },
  }

  const rowVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' } },
  }

  const stampVariants = {
    hidden: { opacity: 0, scale: 2, rotate: -14 },
    show: {
      opacity: [0, 1, 1],
      scale: 1,
      rotate: -1.2,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            opacity: { duration: 0.5, times: [0, 0.6, 1], ease: stampEase },
            scale: { duration: 0.5, ease: stampEase },
            rotate: { duration: 0.5, ease: stampEase },
          },
    },
  }

  return (
    <div className="ledger">
      <div className="ledger-header">
        <span>{t.ledger.title}</span>
        <span>2026</span>
      </div>
      <motion.div className="ledger-body" initial="hidden" animate="show" variants={containerVariants}>
        {ledgerFields.map((item) => (
          <motion.div key={item.k} className="ledger-row" variants={rowVariants}>
            <span className="field">{item.k}</span>{' '}
            {item.stamp ? (
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
