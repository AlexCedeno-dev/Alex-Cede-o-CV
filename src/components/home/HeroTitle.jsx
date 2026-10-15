import { motion, useReducedMotion } from 'framer-motion'
import { heroTiming, revealEase } from '../../motion'

const lines = [
  { key: 'first', content: 'Edgar Alejandro' },
  { key: 'last', content: 'Cedeño Suárez' },
  { key: 'role', content: <em>Full-Stack Developer</em> },
]

// Cada línea sube desde debajo de su propia máscara (overflow:hidden).
// Solo se anima transform: el alto de cada línea queda reservado desde el inicio.
export default function HeroTitle() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <h1>
      {lines.map((line, i) => (
        <span className="line-mask" key={line.key}>
          <motion.span
            className="line"
            initial={shouldReduceMotion ? false : { y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: heroTiming.lineDuration,
              ease: revealEase,
              delay: i * heroTiming.lineStagger,
            }}
          >
            {line.content}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
