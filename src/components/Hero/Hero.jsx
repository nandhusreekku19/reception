import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { couple } from '../../utils/weddingData.js'
import FloatingFlowers from '../FloatingFlowers/FloatingFlowers.jsx'
import Particles from '../Particles/Particles.jsx'
import TempleBell from '../TempleBell/TempleBell.jsx'
import WeddingCalendar from '../WeddingCalendar/WeddingCalendar.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Wedding hero">
      <div className={styles.sanskritPattern} aria-hidden="true" />
      <Particles count={26} />
      <FloatingFlowers count={10} />

      <div className={styles.bellsRow} aria-hidden="true">
        <TempleBell size={26} delay={0} />
        <TempleBell size={34} delay={0.5} />
        <TempleBell size={26} delay={1} />
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className={styles.eyebrow}>{couple.tagline}</span>

        <h1 className={styles.title}>
          <span className={styles.name}>{couple.groomFull}</span>
          <span className={styles.heart}>❤</span>
          <span className={styles.name}>{couple.brideFull}</span>
        </h1>

        <WeddingCalendar />

        <motion.a
          href="#family"
          className={styles.scrollCue}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          aria-label="Scroll to family"
        >
          <FaChevronDown />
        </motion.a>
      </motion.div>
    </section>
  )
}
