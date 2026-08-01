import { useMemo } from 'react'
import { motion } from 'framer-motion'
import styles from './FloatingFlowers.module.css'

const PETALS = ['🌸', '🌺', '🪷', '🌼']

// Falling jasmine/lotus petals — decorative ambience layered behind content.
export default function FloatingFlowers({ count = 14, className = '' }) {
  const petals = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 18,
      duration: 10 + Math.random() * 12,
      delay: Math.random() * 10,
      rotate: Math.random() * 360,
      emoji: PETALS[i % PETALS.length],
    }))
  ), [count])

  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className={styles.petal}
          style={{ left: `${p.left}%`, fontSize: p.size }}
          initial={{ y: '-10%', opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 1, 1, 0],
            rotate: p.rotate,
            x: [0, 30, -20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  )
}
