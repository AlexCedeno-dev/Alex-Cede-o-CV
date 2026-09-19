import { useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useAccessibility } from '../a11y/AccessibilityContext'

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function AccessibilityPanel() {
  const { t, lang, setLang } = useLanguage()
  const a11y = useAccessibility()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const dialog = dialogRef.current
    const focusables = dialog ? Array.from(dialog.querySelectorAll(FOCUSABLE)) : []
    focusables[0]?.focus()

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  function close() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="a11y-trigger"
        aria-label={t.a11y.openPanel}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="7.6" r="1.5" fill="currentColor" />
          <path
            d="M6.8 10.4h10.4M12 10.4v4.2M12 14.6l-2.5 4.2M12 14.6l2.5 4.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="a11y-backdrop" onClick={close}>
          <div
            className="a11y-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="a11y-dialog-head">
              <h2 id={titleId}>{t.a11y.title}</h2>
              <button type="button" className="a11y-close" onClick={close} aria-label={t.a11y.close}>
                ✕
              </button>
            </div>

            <div className="a11y-group">
              <p className="a11y-group-label">{t.a11y.language}</p>
              <div className="a11y-btn-row" role="group" aria-label={t.a11y.language}>
                <button type="button" className="a11y-option" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
                  {t.a11y.langEn}
                </button>
                <button type="button" className="a11y-option" aria-pressed={lang === 'es'} onClick={() => setLang('es')}>
                  {t.a11y.langEs}
                </button>
              </div>
            </div>

            <div className="a11y-group">
              <p className="a11y-group-label">{t.a11y.textSize}</p>
              <div className="a11y-btn-row" role="group" aria-label={t.a11y.textSize}>
                <button type="button" className="a11y-option" onClick={() => a11y.cycleFontSize(-1)} aria-label={t.a11y.decrease}>
                  A−
                </button>
                <button type="button" className="a11y-option" onClick={a11y.resetFontSize} aria-label={t.a11y.reset}>
                  A
                </button>
                <button type="button" className="a11y-option" onClick={() => a11y.cycleFontSize(1)} aria-label={t.a11y.increase}>
                  A+
                </button>
              </div>
            </div>

            <div className="a11y-group">
              <label className="a11y-switch-row">
                <span>{t.a11y.contrast}</span>
                <input type="checkbox" checked={a11y.contrast} onChange={a11y.toggleContrast} />
              </label>
              <label className="a11y-switch-row">
                <span>{t.a11y.underline}</span>
                <input type="checkbox" checked={a11y.underline} onChange={a11y.toggleUnderline} />
              </label>
            </div>

            <div className="a11y-group">
              <p className="a11y-group-label">{t.a11y.theme}</p>
              <div className="a11y-btn-row" role="group" aria-label={t.a11y.theme}>
                <button type="button" className="a11y-option" aria-pressed={a11y.theme === 'light'} onClick={() => a11y.setTheme('light')}>
                  {t.a11y.themeLight}
                </button>
                <button type="button" className="a11y-option" aria-pressed={a11y.theme === 'dark'} onClick={() => a11y.setTheme('dark')}>
                  {t.a11y.themeDark}
                </button>
                <button type="button" className="a11y-option" aria-pressed={a11y.theme === 'system'} onClick={() => a11y.setTheme('system')}>
                  {t.a11y.themeSystem}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
