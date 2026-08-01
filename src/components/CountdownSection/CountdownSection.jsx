import SectionReveal from '../SectionReveal/SectionReveal.jsx'
import Countdown from '../Countdown/Countdown.jsx'
import styles from './CountdownSection.module.css'

export default function CountdownSection() {
  return (
    <section id="countdown" className={`section ${styles.countdown}`} aria-label="Countdown to the wedding">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">Counting Down To Our Big Day</h2>
        </SectionReveal>
        <SectionReveal variant="scale" delay={0.1} className={styles.wrap}>
          <Countdown />
        </SectionReveal>
      </div>
    </section>
  )
}
