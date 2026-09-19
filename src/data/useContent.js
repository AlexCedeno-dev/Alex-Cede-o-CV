import { useLanguage } from '../i18n/LanguageContext'
import * as es from './content.es'
import * as en from './content.en'

export function useContent() {
  const { lang } = useLanguage()
  return lang === 'es' ? es : en
}
