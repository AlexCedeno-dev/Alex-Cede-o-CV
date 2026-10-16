import { useLanguage } from '../../i18n/LanguageContext'

// Ficha de una pieza del sistema. Las capturas son opcionales: sin `images`
// no se renderiza nada (ni recuadro ni aviso).
export default function ComponentCard({ component, detail }) {
  const { t } = useLanguage()
  const images = detail.images ?? []

  return (
    <article className="pj-card">
      {images.length > 0 && (
        <div className="pj-card-media">
          {images.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
      <h4 className="pj-card-name">{component.name}</h4>
      <p className="field-label">{t.projectsPage.whatItDoes}</p>
      <p className="pj-card-text">{component.description}</p>
      <p className="field-label">{t.projectsPage.techLabel}</p>
      <ul className="pj-tech">
        {detail.tech.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <a className="pj-repo" href={component.repo} target="_blank" rel="noopener">
        <span className="sr-only">{component.name}: </span>
        {t.projectsPage.repo}
      </a>
    </article>
  )
}
