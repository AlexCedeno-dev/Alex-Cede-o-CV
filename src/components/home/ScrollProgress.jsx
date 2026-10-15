import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

// Barra decorativa: el navegador ya expone la posición de scroll a lectores de pantalla.
export default function ScrollProgress() {
  const progress = useScrollProgress()
  return <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
}
