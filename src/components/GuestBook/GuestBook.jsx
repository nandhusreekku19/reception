import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionReveal from '../SectionReveal/SectionReveal.jsx'
import styles from './GuestBook.module.css'

const EMOJIS = ['😍', '🎉', '💐', '🙏', '❤️', '✨', '💍', '🌸']

// Wishes are sent directly to the couple over WhatsApp rather than stored —
// no backend, and every guest's message actually reaches someone.
const WHATSAPP_NUMBER = '917306632553'

export default function GuestBook() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState(EMOJIS[0])
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('Please share your name and a short message.')
      return
    }
    setError('')
    const text = `With Lots of Love From : ${name.trim()}\nMessage: ${emoji} ${message.trim()}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="guestbook" className={`section ${styles.guestbook}`} aria-label="Guest wishes">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">Guest Wishes</h2>
          <p className="section-subtitle">Send a blessing to Sreekanth &amp; Nayana over WhatsApp.</p>
        </SectionReveal>

        <SectionReveal variant="scale" delay={0.1} className={`${styles.formCard} glass-card`}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Your name"
              />
              <div className={styles.emojiPicker}>
                {EMOJIS.map((em) => (
                  <button
                    type="button"
                    key={em}
                    className={`${styles.emojiBtn} ${emoji === em ? styles.emojiActive : ''}`}
                    onClick={() => setEmoji(em)}
                    aria-label={`Choose emoji ${em}`}
                    aria-pressed={emoji === em}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              rows="3"
              placeholder="Write your wishes for the couple..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Your message"
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className="btn-gold flat ripple">
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  )
}
