import { motion } from 'framer-motion'
import styles from './TempleBell.module.css'

export default function TempleBell({ size = 46, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`${styles.bell} ${className}`}
      style={{ width: size }}
      initial={{ rotate: -8 }}
      animate={{ rotate: [-8, 8, -6, 6, -3, 0] }}
      transition={{ duration: 2.4, delay, repeat: Infinity, repeatDelay: 2.6, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`bellBrass-${size}-${delay}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6e6b4" />
            <stop offset="60%" stopColor="#c9a227" />
            <stop offset="100%" stopColor="#8a6a1a" />
          </linearGradient>
        </defs>
        <rect x="27" y="0" width="6" height="14" fill={`url(#bellBrass-${size}-${delay})`} />
        <path
          d="M30 12 C 12 12, 8 45, 14 58 L 46 58 C 52 45, 48 12, 30 12 Z"
          fill={`url(#bellBrass-${size}-${delay})`}
        />
        <ellipse cx="30" cy="58" rx="17" ry="5" fill="#8a6a1a" />
        <circle cx="30" cy="70" r="4" fill={`url(#bellBrass-${size}-${delay})`} />
        <line x1="30" y1="58" x2="30" y2="66" stroke="#8a6a1a" strokeWidth="2" />
      </svg>
    </motion.div>
  )
}
