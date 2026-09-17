import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/content'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

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
        <div className="logo">Alejandro <span>Cedeño</span></div>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`navlinks${open ? ' open' : ''}`} id="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
