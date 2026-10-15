import { motion } from 'framer-motion'
import { useMagnetic } from '../../hooks/useMagnetic'

// Envoltorio magnético: el botón real queda adentro, así que el foco,
// el :focus-visible y el área de click siguen siendo los del botón.
export default function Magnetic({ max = 6, children }) {
  const { ref, style, onPointerMove, onPointerLeave } = useMagnetic(max)

  return (
    <motion.span
      ref={ref}
      className="magnetic"
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.span>
  )
}
