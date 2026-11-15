import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { colors, fx } from '../motion'

// Salida rápida, entrada un poco más deliberada. Los valores viven en `fx`
// (motion.js), la misma fuente que usa el CSS de cards y demás botones.
const primaryVariants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: `0 0 0 ${colors.shadowClear}`,
    transition: { duration: fx.exit, ease: fx.ease },
  },
  hover: {
    x: fx.lift.x,
    y: fx.lift.y,
    boxShadow: `${fx.shadow.x}px ${fx.shadow.y}px 0 ${colors.shadow}`,
    transition: { duration: fx.enter, ease: fx.ease },
  },
}

const ghostVariants = {
  rest: {
    borderColor: colors.border,
    backgroundColor: colors.shadowClear,
    transition: { duration: fx.ghost.exit, ease: 'easeOut' },
  },
  hover: {
    borderColor: colors.ink,
    backgroundColor: colors.hoverWash,
    transition: { duration: fx.ghost.enter, ease: 'easeOut' },
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
    whileTap: { scale: fx.tapScale, transition: { duration: fx.tapDuration, ease: fx.ease } },
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
