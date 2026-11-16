import { motion, useReducedMotion } from 'framer-motion'
import { revealViewport, cardStampSpring, cardStampFrom } from '../../motion'
import SealArc from '../SealArc'

// Sello circular chico para las cards del CV. Reutiliza las clases .seal del Home
// (color, anillo punteado, tipografía) y se "estampa" al entrar en vista: entra
// grande y girado, y asienta en su inclinación final.
export default function CvSeal({ seal, tilt = -4, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()
  if (!seal) return null

  return (
    <motion.div
      className={`seal cv-seal seal-${seal.tone}${seal.compact ? ' seal-compact' : ''}${seal.arc ? ' seal-has-arc' : ''}`}
      aria-hidden="true"
      style={{ rotate: tilt }}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: cardStampFrom, rotate: tilt - 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
      viewport={revealViewport}
      transition={{
        opacity: { duration: 0.12, delay },
        scale: { ...cardStampSpring, delay },
        rotate: { ...cardStampSpring, delay },
      }}
    >
      <span className="seal-ring" />
      {seal.arc && <SealArc arc={seal.arc} />}
      <span className="seal-text">
        <span className="seal-label">{seal.label}</span>
        <span className="seal-title">{seal.title}</span>
        <span className="seal-sub">{seal.sub}</span>
      </span>
    </motion.div>
  )
}
