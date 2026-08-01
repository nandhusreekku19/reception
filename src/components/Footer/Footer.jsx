import { FaFacebook, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa'
import { couple, socialLinks } from '../../utils/weddingData.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.monogram}>{couple.monogram}</div>
        <p className={styles.thanks}>Thank you for being a part of our story.</p>
        <p className={styles.date}>{couple.weddingDay}, {couple.weddingDateDisplay}</p>

        <div className={styles.social}>
          <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href={socialLinks.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        <p className={styles.madeWith}>
          Made with <FaHeart aria-hidden="true" className={styles.heartIcon} /> for Sreekanth &amp; Nayana
        </p>
      </div>
    </footer>
  )
}
