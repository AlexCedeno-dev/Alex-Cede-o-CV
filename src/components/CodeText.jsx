import { Fragment } from 'react'

// Identificadores de código dentro de texto corrido: os.uptime(), last_report.json,
// MAX_QUEUE, uso_segundos... Es una palabra con "_" o "." internos (y "()" opcional).
// El texto no cambia; solo se envuelve en <code> para verlo en mono.
const IDENTIFIER = /([A-Za-z]+(?:[._][A-Za-z_]+)+(?:\(\))?)/

export default function CodeText({ children }) {
  return children.split(IDENTIFIER).map((part, i) =>
    // con un grupo de captura, split deja los identificadores en los índices impares
    i % 2 ? <code key={i} className="code-inline">{part}</code> : <Fragment key={i}>{part}</Fragment>,
  )
}
