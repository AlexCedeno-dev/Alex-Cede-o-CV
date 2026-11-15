import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import Button from '../Button'
import CvHeading from './CvHeading'
import { useContent } from '../../data/useContent'
import { easeOutStrong } from '../../motion'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

// El visor embebido solo se intenta donde el navegador declara soportarlo.
// Móviles (puntero táctil y pantalla angosta) casi nunca renderizan PDFs
// embebidos, así que ahí se ofrece abrir/descargar directamente.
function canEmbedPdf() {
  if (typeof navigator === 'undefined') return false
  if (navigator.pdfViewerEnabled === false) return false
  return !window.matchMedia('(pointer: coarse) and (max-width: 820px)').matches
}

// Comprueba que el PDF exista. Vite (dev) y Pages devuelven HTML para rutas
// desconocidas, así que además del status se exige un content-type de PDF.
function usePdfAvailable(href) {
  const [status, setStatus] = useState('checking') // checking | ok | missing

  useEffect(() => {
    const controller = new AbortController()
    setStatus('checking')
    fetch(href, { method: 'HEAD', signal: controller.signal })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        setStatus(res.ok && type.includes('pdf') ? 'ok' : 'missing')
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setStatus('missing')
      })
    return () => controller.abort()
  }, [href])

  return status
}

function PreviewModal({ href, pdf, canEmbed, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : 0.22

  // Esc cierra; Tab queda atrapado dentro del diálogo.
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE)
      if (!nodes || nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      } else if (!dialogRef.current.contains(document.activeElement)) {
        e.preventDefault()
        first.focus()
      }
    },
    [onClose],
  )

  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      // Devuelve el foco al botón que abrió el panel.
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [onKeyDown])

  const actions = (
    <div className="cv-pdf-actions">
      <Button variant="ghost" href={href} external>{pdf.openNewTab} <span aria-hidden="true">↗</span></Button>
      <Button variant="primary" href={href} download>{pdf.download}</Button>
    </div>
  )

  return (
    <motion.div
      className="cv-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, ease: easeOutStrong }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        ref={dialogRef}
        className="cv-modal"
        role="dialog"
        aria-modal="true"
        aria-label={pdf.dialogLabel}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration, ease: easeOutStrong }}
      >
        <div className="cv-modal-bar">
          <span className="folio">{pdf.dialogLabel}</span>
          <button ref={closeRef} type="button" className="cv-modal-close fx" onClick={onClose}>
            {pdf.close} <span aria-hidden="true">✕</span>
          </button>
        </div>
        <div className="cv-modal-body">
          {canEmbed ? (
            <object className="cv-modal-pdf" data={`${href}#view=FitH`} type="application/pdf" aria-label={pdf.dialogLabel}>
              <div className="cv-pdf-fallback">
                <p className="cv-text">{pdf.mobileNote}</p>
                {actions}
              </div>
            </object>
          ) : (
            <div className="cv-pdf-fallback">
              <p className="cv-text">{pdf.mobileNote}</p>
              {actions}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// § VI Vista previa y descarga del CV en PDF.
export default function CvPdf() {
  const { cvPage } = useContent()
  const { pdf } = cvPage
  const href = `${import.meta.env.BASE_URL}cv/${pdf.file}`
  const status = usePdfAvailable(href)
  const [open, setOpen] = useState(false)
  const [canEmbed] = useState(canEmbedPdf)
  const close = useCallback(() => setOpen(false), [])

  return (
    <section id="cv-pdf" aria-labelledby="cv-pdf-title">
      <div className="wrap">
        <CvHeading numero="§ VI" id="cv-pdf-title">{cvPage.sections.document}</CvHeading>
        <Reveal className="cv-pdf">
          {status === 'missing' && <p className="cv-text cv-pdf-missing" role="status">{pdf.missing}</p>}
          {status === 'ok' && (
            <>
              <p className="cv-text">{pdf.intro}</p>
              <div className="cv-pdf-actions">
                <Button variant="primary" href={href} download>{pdf.download} <span aria-hidden="true">↓</span></Button>
                <button type="button" className="btn ghost fx" onClick={() => setOpen(true)} aria-haspopup="dialog">
                  {pdf.preview}
                </button>
              </div>
            </>
          )}
        </Reveal>
      </div>
      {createPortal(
        <AnimatePresence>
          {open && <PreviewModal key="pdf-modal" href={href} pdf={pdf} canEmbed={canEmbed} onClose={close} />}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}
