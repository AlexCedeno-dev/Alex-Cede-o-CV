import { useLanguage } from '../../i18n/LanguageContext'
import { useLocalTime } from '../../hooks/useLocalTime'

// Aguascalientes usa la zona horaria del centro de México.
const TIME_ZONE = 'America/Mexico_City'

export default function LocalTime() {
  const { lang } = useLanguage()
  const { time, offset, iso } = useLocalTime(TIME_ZONE, lang === 'es' ? 'es-MX' : 'en-US')

  return (
    <span className="value local-time">
      <time dateTime={iso}>{time}</time>
      {offset && <span className="local-time-offset"> {offset}</span>}
    </span>
  )
}
