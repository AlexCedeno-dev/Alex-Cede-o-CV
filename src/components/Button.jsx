import { motion } from 'framer-motion'
import { colors, easeOutStrong } from '../motion'

// Salida rápida (140ms), entrada un poco más deliberada (220ms), aplicada
// a los botones del hero y contacto.
const primaryVariants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: '0 0 0 rgba(33,29,22,0)',
    transition: { duration: 0.14, ease: easeOutStrong },
  },
  hover: {
    x: -1,
    y: -2,
    boxShadow: '3px 4px 0 rgba(33,29,22,0.18)',
    transition: { duration: 0.22, ease: easeOutStrong },
  },
}

const ghostVariants = {
  rest: {
    borderColor: colors.border,
    backgroundColor: 'rgba(33,29,22,0)',
    transition: { duration: 0.14, ease: 'easeOut' },
  },
  hover: {
    borderColor: colors.ink,
    backgroundColor: 'rgba(33,29,22,0.04)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export default function Button({ variant = 'ghost', href, children, external = false, download }) {
  const variants = variant === 'primary' ? primaryVariants : ghostVariants

  return (
    <motion.a
      className={`btn ${variant}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      download={download}
      variants={variants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97, transition: { duration: 0.1, ease: easeOutStrong } }}
    >
      {children}
    </motion.a>
  )
}
