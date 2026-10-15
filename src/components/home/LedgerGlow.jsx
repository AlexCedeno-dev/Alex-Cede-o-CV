import { useReducedMotion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLedgerGlow } from '../../hooks/useLedgerGlow'

// Debe coincidir con el rayado de `body` en index.css (línea cada 35px).
const LINE_GAP = 35
const SIZE = 320

// Resalte decorativo de las líneas del libro contable cerca del cursor.
export default function LedgerGlow() {
  const finePointer = useMediaQuery('(pointer: fine) and (hover: hover)')
  const shouldReduceMotion = useReducedMotion()
  const enabled = finePointer && !shouldReduceMotion
  const { outerRef, innerRef } = useLedgerGlow({ enabled, size: SIZE, lineGap: LINE_GAP })

  if (!enabled) return null

  return (
    <div className="ledger-glow" ref={outerRef} aria-hidden="true">
      <div className="ledger-glow-lines" ref={innerRef} />
    </div>
  )
}
