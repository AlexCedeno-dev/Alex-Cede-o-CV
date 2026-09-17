import Reveal from './Reveal'
import Button from './Button'
import { contactLinks } from '../data/content'

export default function Contacto() {
  return (
    <footer id="contact">
      <div className="wrap">
        <Reveal className="contact-box">
          <h2>¿Trabajamos juntos?</h2>
          <p>Disponible para prácticas, proyectos freelance y oportunidades de tiempo completo.</p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <Button key={link.href} variant={link.variant} href={link.href} external={link.external}>
                {link.label}
              </Button>
            ))}
          </div>
        </Reveal>
        <div className="foot-meta">Aguascalientes, México · expediente actualizado en 2026</div>
      </div>
    </footer>
  )
}
