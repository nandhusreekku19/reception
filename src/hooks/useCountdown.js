import { useEffect, useState } from 'react'

function getTimeParts(targetDate) {
  const total = Math.max(0, targetDate - Date.now())
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)
  return { total, days, hours, minutes, seconds }
}

export function useCountdown(isoDate) {
  const target = new Date(isoDate).getTime()
  const [time, setTime] = useState(() => getTimeParts(target))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeParts(target))
    }, 1000)
    return () => clearInterval(interval)
  }, [target])

  return time
}
