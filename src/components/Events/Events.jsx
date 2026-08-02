import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaDirections, FaPhoneAlt } from 'react-icons/fa'
import SectionReveal from '../SectionReveal/SectionReveal.jsx'
import { events } from '../../utils/weddingData.js'
// import { events, contactNumbers } from '../../utils/weddingData.js'
import styles from './Events.module.css'

export default function Events() {
  return (
    <section id="events" className={`section ${styles.events}`} aria-label="Wedding events">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">Wedding Events</h2>
          <p className="section-subtitle">Join us as we celebrate the union of two hearts</p>
        </SectionReveal>

        <div className={styles.cards}>
          {events.map((ev, i) => (
            <SectionReveal key={ev.id} variant="scale" delay={i * 0.12} className={`${styles.card} glass-card`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{ev.title}</h3>
                <span className={styles.cardSubtitle}>{ev.subtitle}</span>
              </div>

              <ul className={styles.detailList}>
                <li>
                  <FaCalendarAlt aria-hidden="true" />
                  <span>{ev.date}<br /><em>({ev.malayalamDate})</em></span>
                </li>
                <li>
                  <FaClock aria-hidden="true" />
                  <span>{ev.time}</span>
                </li>
                <li>
                  <FaMapMarkerAlt aria-hidden="true" />
                  <span>{ev.venueName}, {ev.venueAddress}</span>
                </li>
              </ul>

              <div className={styles.mapFrame}>
                <iframe
                  title={`Map to ${ev.venueName}`}
                  src={`https://www.google.com/maps?q=${ev.lat},${ev.lng}&hl=en&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className={styles.actions}>
                <a
                  className="btn-gold flat ripple"
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDirections /> Navigate
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* <div className={styles.extras}>
          <SectionReveal variant="fade" delay={0.1} className={`${styles.extraCard} glass-card`}>
            <FaPhoneAlt className={styles.extraIcon} aria-hidden="true" />
            <h4>Contact</h4>
            <ul>
              {contactNumbers.map((c) => (
                <li key={c.phone}>
                  <strong>{c.name}:</strong>{' '}
                  <a className={styles.phoneNumber} href={`tel:${c.phone}`}>{c.phone}</a>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div> */}
      </div>
    </section>
  )
}
