import { useState } from 'react'
import Reveal from './Reveal'
import { contactFields, fullName, refCode } from '../data/content'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaoqbjv'

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [values, setValues] = useState({ asunto: '', mensaje: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setValues({ asunto: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-status success" role="status">
        Mensaje registrado. Respondo en menos de 48 horas hábiles.
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="asunto">Asunto</label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          value={values.asunto}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          value={values.mensaje}
          onChange={handleChange}
        />
      </div>
      {/* honeypot anti-spam: los bots suelen rellenar todos los campos */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="_gotcha">No llenar este campo</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      {status === 'error' && (
        <p className="form-status error" role="alert">
          No se pudo enviar. Probá de nuevo o escribime directo a{' '}
          <a href="mailto:cedenoalejandro0612@gmail.com">cedenoalejandro0612@gmail.com</a>.
        </p>
      )}
    </form>
  )
}

export default function Contacto() {
  return (
    <footer id="contact">
      <div className="wrap">
        <Reveal className="contact-box">
          <div className="contact-grid">
            <div className="contact-intro">
              <h2>¿Trabajamos juntos?</h2>
              <p>Disponible para prácticas, proyectos freelance y oportunidades de tiempo completo. La forma más directa de contactarme es por correo.</p>
              <div className="contact-fields">
                {contactFields.map((f) => (
                  <div className="contact-field" key={f.label}>
                    <p className="field-label">{f.label}</p>
                    <a
                      className="field-value"
                      href={f.href}
                      target={f.external ? '_blank' : undefined}
                      rel={f.external ? 'noopener' : undefined}
                    >
                      {f.value}
                    </a>
                  </div>
                ))}
              </div>
              <span className="stamp active">Disponible</span>
            </div>
            <ContactForm />
          </div>
        </Reveal>
        <div className="foot-meta">
          <span>© 2026 · {fullName} · Ref. {refCode}</span>
          <span>Portafolio profesional — Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  )
}
