import { FaMapMarkerAlt } from 'react-icons/fa'
import SectionReveal from '../SectionReveal/SectionReveal.jsx'
import { brideFamily, groomFamily } from '../../utils/weddingData.js'
import styles from './Family.module.css'

function FamilyCard({ data, variant, delay, role }) {
  return (
    <SectionReveal
      variant={variant === 'left' ? 'slideLeft' : 'slideRight'}
      delay={delay}
      className={`${styles.card} glass-card`}
    >
      <span className={styles.role}>{role}</span>
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <p className={styles.parents}>{data.parents}</p>
      {data.father?.note && <p className={styles.note}>({data.father.note})</p>}
      {data.sibling && (
        <p className={styles.sibling}>{data.sibling}</p>
      )}
      <p className={styles.address}>
        <FaMapMarkerAlt aria-hidden="true" /> {data.address}
        <a className={styles.phoneNumber} href={`tel:${data.phone}`}>{data.phone}</a>
      </p>
    </SectionReveal>
  )
}

export default function Family() {
  return (
    <section id="family" className={`section ${styles.family}`} aria-label="Families">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">With Blessings From Our Family Members</h2>
        </SectionReveal>

        <div className={styles.grid}>
          <FamilyCard data={brideFamily} variant="left" delay={0} role="The Bride" />
          <FamilyCard data={groomFamily} variant="right" delay={0.15} role="The Groom" />
        </div>
      </div>
    </section>
  )
}
