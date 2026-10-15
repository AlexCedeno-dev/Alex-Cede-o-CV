import { useEffect, useMemo, useState } from 'react'

// Hora local en vivo de una zona horaria. Se calcula desde el primer render
// (sin placeholder que cambie de ancho) y se re-agenda alineada al cambio de
// segundo, para no saltarse segundos por deriva del intervalo.
export function useLocalTime(timeZone, locale) {
  const formatters = useMemo(
    () => ({
      time: new Intl.DateTimeFormat(locale, {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23',
      }),
      offset: new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'shortOffset' }),
    }),
    [timeZone, locale],
  )

  const read = () => {
    const now = new Date()
    const offset = formatters.offset.formatToParts(now).find((p) => p.type === 'timeZoneName')?.value ?? ''
    return { time: formatters.time.format(now), offset, iso: now.toISOString() }
  }

  const [value, setValue] = useState(read)

  useEffect(() => {
    let timeoutId
    const tick = () => {
      setValue(read())
      timeoutId = setTimeout(tick, 1000 - (Date.now() % 1000))
    }
    tick()
    return () => clearTimeout(timeoutId)
  }, [formatters]) // read depende solo de formatters

  return value
}
