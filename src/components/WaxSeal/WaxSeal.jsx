import { motion } from 'framer-motion'
import styles from './WaxSeal.module.css'

// A gold wax-seal button embossed with a small heart —
// click to "break the seal" and open the invitation.
export default function WaxSeal({ onClick, size = 112 }) {
  return (
    <motion.button
      type="button"
      className={styles.seal}
      style={{ width: size, height: size }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.88 }}
      aria-label="Break the seal to open the invitation"
    >
      <svg viewBox="0 0 100 100" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="waxBase" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#f6e6b4" />
            <stop offset="55%" stopColor="#c9a227" />
            <stop offset="100%" stopColor="#7a5c12" />
          </radialGradient>
          <linearGradient id="monogramShade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a6a1a" />
            <stop offset="100%" stopColor="#5c4610" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="47" fill="url(#waxBase)" stroke="#5c4610" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="47" fill="none" stroke="#fff6d6" strokeOpacity="0.4" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#5c4610" strokeOpacity="0.3" strokeWidth="0.75" />

        {/* embossed small heart */}
        <g transform="translate(31,31) scale(1.2)">
          <path
            d="M16 27 C 4 19, 1 11, 6 6 C 10 2, 16 4, 16 9 C 16 4, 22 2, 26 6 C 31 11, 28 19, 16 27 Z"
            fill="url(#monogramShade)"
            stroke="#5c4610"
            strokeWidth="0.6"
          />
        </g>
      </svg>
    </motion.button>
  )
}
