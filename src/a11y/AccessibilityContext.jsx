import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AccessibilityContext = createContext(null)
const STORAGE_KEY = 'site-a11y'
const FONT_SIZES = ['normal', 'lg', 'xl']
const THEMES = ['light', 'dark', 'system']

function loadInitial() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && typeof saved === 'object') {
      return {
        fontSize: FONT_SIZES.includes(saved.fontSize) ? saved.fontSize : 'normal',
        contrast: !!saved.contrast,
        underline: !!saved.underline,
        theme: THEMES.includes(saved.theme) ? saved.theme : 'system',
      }
    }
  } catch {
    // localStorage inaccesible o valor corrupto: seguimos con los valores por defecto.
  }
  return { fontSize: 'normal', contrast: false, underline: false, theme: 'system' }
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(loadInitial)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-font-size', settings.fontSize)
    root.setAttribute('data-contrast', settings.contrast ? 'high' : 'normal')
    root.setAttribute('data-underline-links', String(settings.underline))
    root.setAttribute('data-theme', settings.theme)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      // ver nota en loadInitial: sin persistencia, la sesión actual sigue funcionando.
    }
  }, [settings])

  const api = useMemo(
    () => ({
      ...settings,
      cycleFontSize: (dir) =>
        setSettings((s) => {
          const idx = FONT_SIZES.indexOf(s.fontSize)
          const next = FONT_SIZES[Math.min(FONT_SIZES.length - 1, Math.max(0, idx + dir))]
          return { ...s, fontSize: next }
        }),
      resetFontSize: () => setSettings((s) => ({ ...s, fontSize: 'normal' })),
      toggleContrast: () => setSettings((s) => ({ ...s, contrast: !s.contrast })),
      toggleUnderline: () => setSettings((s) => ({ ...s, underline: !s.underline })),
      setTheme: (theme) => setSettings((s) => ({ ...s, theme })),
    }),
    [settings],
  )

  return <AccessibilityContext.Provider value={api}>{children}</AccessibilityContext.Provider>
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility debe usarse dentro de AccessibilityProvider')
  return ctx
}
