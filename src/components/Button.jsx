import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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

const MotionLink = motion(Link)

// href = link externo/mailto/descarga (ancla normal). to = ruta interna
// del sitio (usa react-router Link, soporta pasar `state`, ej. para
// indicarle a la página destino que haga scroll a una sección).
export default function Button({ variant = 'ghost', href, to, state, children, external = false, download }) {
  const variants = variant === 'primary' ? primaryVariants : ghostVariants
  const sharedProps = {
    className: `btn ${variant}`,
    variants,
    initial: 'rest',
    animate: 'rest',
    whileHover: 'hover',
    whileTap: { scale: 0.97, transition: { duration: 0.1, ease: easeOutStrong } },
  }

  if (to) {
    return (
      <MotionLink to={to} state={state} {...sharedProps}>
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      download={download}
      {...sharedProps}
    >
      {children}
    </motion.a>
  )
}
