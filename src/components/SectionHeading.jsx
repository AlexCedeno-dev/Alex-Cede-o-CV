export default function SectionHeading({ numero, children }) {
  return (
    <div className="section-head">
      <div className="section-head-row">
        <span className="section-tab">{numero}</span>
        <div className="rule" />
      </div>
      <h2 className="title">{children}</h2>
    </div>
  )
}
