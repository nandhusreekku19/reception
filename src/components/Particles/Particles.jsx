import { useMemo } from 'react'
import { motion } from 'framer-motion'
import styles from './Particles.module.css'

// Ambient golden dust drifting upward — purely decorative, aria-hidden.
export default function Particles({ count = 24, className = '' }) {
  const dots = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 80,
    }))
  ), [count])

  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className={styles.dot}
          style={{ left: `${dot.left}%`, width: dot.size, height: dot.size }}
          initial={{ y: '100%', opacity: 0, x: 0 }}
          animate={{
            y: '-20%',
            opacity: [0, 1, 1, 0],
            x: dot.drift,
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
