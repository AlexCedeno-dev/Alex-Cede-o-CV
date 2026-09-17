import Button from './Button'
import Ledger from './Ledger'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Edgar Alejandro<br />Cedeño Suárez&nbsp;—<br /><em>Full-Stack Developer</em></h1>
          <p className="lead">Estudiante de Ingeniería en Sistemas Computacionales en Aguascalientes, construyendo aplicaciones web, móviles y soluciones internas con enfoque en procesos claros.</p>
          <div className="hero-cta">
            <Button variant="primary" href="#contact">Contactarme</Button>
            <Button variant="ghost" href="#experience">Ver experiencia</Button>
            <Button variant="ghost" href="https://github.com/AlexCedeno-dev" external>GitHub ↗</Button>
          </div>
        </div>
        <Ledger />
      </div>
    </header>
  )
}
