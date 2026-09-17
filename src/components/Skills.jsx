import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { colors, easeOutStrong } from '../motion'
import { skillGroups } from '../data/content'

const tagVariants = {
  rest: {
    scale: 1,
    color: colors.inkDim,
    borderColor: colors.border,
    backgroundColor: colors.paperAlt,
    boxShadow: '0 0 0 rgba(148,62,23,0)',
    transition: { duration: 0.14, ease: easeOutStrong },
  },
  hover: {
    scale: 1.012,
    color: colors.stamp,
    borderColor: colors.stamp,
    backgroundColor: colors.stampDim,
    boxShadow: '2px 3px 0 rgba(148,62,23,0.12)',
    transition: { duration: 0.22, ease: easeOutStrong },
  },
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="title">Habilidades</h2>
        <Reveal className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <div className="tags">
                {group.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="tag"
                    variants={tagVariants}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
