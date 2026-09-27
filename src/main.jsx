import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext'
import { AccessibilityProvider } from './a11y/AccessibilityContext'

// HashRouter (URLs con #/ruta) a propósito: GitHub Pages sirve archivos
// estáticos sin reescritura de rutas del lado del servidor, así que un
// BrowserRouter con URLs limpias rompería al recargar o compartir un link
// directo a /proyectos. Con hash, todo resuelve siempre a index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <AccessibilityProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AccessibilityProvider>
    </LanguageProvider>
  </StrictMode>,
)
