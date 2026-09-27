import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function PageHeader({ eyebrow, title }) {
  const { t } = useLanguage()

  return (
    <div className="page-header">
      <div className="wrap">
        <Link to="/" className="page-back">← {t.pages.back}</Link>
        <p className="folio page-eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <div className="rule" />
      </div>
    </div>
  )
}
