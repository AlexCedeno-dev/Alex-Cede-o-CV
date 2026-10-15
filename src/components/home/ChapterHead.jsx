// Encabezado numerado de capítulo: pestaña § + regla + título.
// El h2 lleva tabIndex -1 para que el índice lateral pueda moverle el foco.
export default function ChapterHead({ chapter, as: Heading = 'h2' }) {
  return (
    <div className="chapter-head">
      <div className="section-head-row">
        <span className="section-tab">{chapter.numero}</span>
        <div className="rule" />
      </div>
      <Heading className="chapter-title" id={`${chapter.id}-title`} tabIndex={-1}>
        {chapter.label}
      </Heading>
    </div>
  )
}
