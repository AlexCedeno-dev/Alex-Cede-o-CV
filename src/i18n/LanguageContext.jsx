import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { strings } from './strings'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'site-lang'

// Sin detección de idioma del navegador a propósito: el sitio carga en
// inglés por defecto para todos, y el panel de accesibilidad permite
// cambiar a español; la elección se recuerda entre visitas.
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved === 'es' || saved === 'en' ? saved : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = strings[lang].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', strings[lang].meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage puede fallar en modo privado; el idioma sigue
      // funcionando para la sesión actual, solo no persiste.
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: strings[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
