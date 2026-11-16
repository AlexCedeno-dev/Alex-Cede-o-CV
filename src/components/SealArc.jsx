import { useId } from 'react'

// Texto curvo opcional sobre el borde del sello (seal.arc = { top, bottom }).
// Es decorativo: el nombre completo va también en el texto de la card.
// Lo comparten el sello del Home (ChapterSeals) y el de /cv (CvSeal).
export default function SealArc({ arc }) {
  const id = useId()
  return (
    <svg className="seal-arc" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path id={`${id}-top`} d="M 13 50 A 37 37 0 0 1 87 50" fill="none" />
      <path id={`${id}-bottom`} d="M 9 50 A 41 41 0 0 0 91 50" fill="none" />
      {arc.top && (
        <text><textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">{arc.top}</textPath></text>
      )}
      {arc.bottom && (
        <text><textPath href={`#${id}-bottom`} startOffset="50%" textAnchor="middle">★ {arc.bottom} ★</textPath></text>
      )}
    </svg>
  )
}
