import { motion } from 'framer-motion'
import { useCountdown } from '../../hooks/useCountdown.js'
import { couple } from '../../utils/weddingData.js'
import styles from './Countdown.module.css'

const UNITS_MAX = { days: 365, hours: 24, minutes: 60, seconds: 60 }

function CircleStat({ label, value, max }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(1, value / max)
  const offset = circumference * (1 - pct)

  return (
    <div className={styles.stat}>
      <svg viewBox="0 0 100 100" className={styles.ring}>
        <circle cx="50" cy="50" r={radius} className={styles.track} />
        <motion.circle
          cx="50" cy="50" r={radius}
          className={styles.progress}
          style={{ strokeDasharray: circumference }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </svg>
      <div className={styles.statInner}>
        <span className={styles.statValue}>{String(value).padStart(2, '0')}</span>
        <span className={styles.statLabel}>{label}</span>
      </div>
    </div>
  )
}

export default function Countdown({ compact = false }) {
  const { days, hours, minutes, seconds, total } = useCountdown(couple.weddingDateISO)

  if (total <= 0) {
    return (
      <div className={styles.arrived}>
        <span>The wedding day has arrived — with love, joy &amp; blessings! 🎉</span>
      </div>
    )
  }

  return (
    <div className={`${styles.grid} ${compact ? styles.compact : ''}`}>
      <CircleStat label="Days" value={days} max={UNITS_MAX.days} />
      <CircleStat label="Hours" value={hours} max={UNITS_MAX.hours} />
      <CircleStat label="Minutes" value={minutes} max={UNITS_MAX.minutes} />
      <CircleStat label="Seconds" value={seconds} max={UNITS_MAX.seconds} />
    </div>
  )
}
