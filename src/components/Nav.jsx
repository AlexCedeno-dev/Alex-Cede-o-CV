import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const { t } = useLanguage()
  const { navLinks } = useContent()

  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav>
      <div className="wrap">
        <NavLink to="/" end className="logo" onClick={() => setOpen(false)}>
          Alejandro <span>Cedeño</span>
        </NavLink>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label={t.nav.toggle}
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`navlinks${open ? ' open' : ''}`} id="navlinks">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
