import { useLanguage } from '../i18n/LanguageContext'
import { fullName, refCode } from '../data/shared'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-meta">
          <span>© 2026 · {fullName} · Ref. {refCode}</span>
          <span>{t.contact.rightsLine}</span>
        </div>
      </div>
    </footer>
  )
}
