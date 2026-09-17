import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { colors, easeOutStrong } from '../motion'
import { educationCards } from '../data/content'

// La tarjeta crece levemente hacia el usuario (scale) en vez de "levitar"
// con translateY: salida rápida (140ms), entrada más deliberada (220ms).
const cardVariants = {
  rest: {
    scale: 1,
    backgroundColor: colors.paperAlt,
    boxShadow: '0 0 0 rgba(33,29,22,0)',
    transition: { duration: 0.14, ease: easeOutStrong },
  },
  hover: {
    scale: 1.012,
    backgroundColor: colors.paperDeep,
    boxShadow: '3px 4px 0 rgba(33,29,22,0.09)',
    transition: { duration: 0.22, ease: easeOutStrong },
  },
}

export default function Formacion() {
  return (
    <section id="education">
      <div className="wrap">
        <h2 className="title">Formación</h2>
        <Reveal className="cards">
          {educationCards.map((item) => (
            <motion.div
              key={item.title}
              className="card"
              variants={cardVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <div className="card-top">
                <div>
                  <h3>{item.title}</h3>
                  <div className="org">{item.org}</div>
                </div>
                <span className={`stamp ${item.status.type}`}>{item.status.label}</span>
              </div>
              <p>{item.meta}</p>
              {item.link && (
                <a className="link" href={item.link.href} target="_blank" rel="noopener">
                  {item.link.label}
                </a>
              )}
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
