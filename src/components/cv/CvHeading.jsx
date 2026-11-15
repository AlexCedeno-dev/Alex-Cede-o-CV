// Variante de SectionHeading que acepta `id` en el h2, para que la sección
// pueda enlazarse con aria-labelledby. Mismo marcado y mismas clases.
export default function CvHeading({ numero, id, children }) {
  return (
    <div className="section-head">
      <div className="section-head-row">
        <span className="section-tab">{numero}</span>
        <div className="rule" />
      </div>
      <h2 className="title" id={id}>{children}</h2>
    </div>
  )
}
