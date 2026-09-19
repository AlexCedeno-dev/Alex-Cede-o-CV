import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext'
import { AccessibilityProvider } from './a11y/AccessibilityContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </LanguageProvider>
  </StrictMode>,
)
