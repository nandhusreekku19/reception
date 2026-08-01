import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { couple } from '../../utils/weddingData.js'
import styles from './Navbar.module.css'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'family', label: 'Family' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'guestbook', label: 'Wishes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={`${styles.inner} container`}>
        <button className={styles.brand} onClick={() => handleLinkClick('hero')} aria-label="Scroll to top">
          {couple.monogram}
        </button>

        <nav className={styles.desktopNav} aria-label="Primary">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => handleLinkClick(link.id)} className={styles.navLink}>
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <motion.nav
          className={styles.mobileNav}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          aria-label="Mobile"
        >
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => handleLinkClick(link.id)} className={styles.mobileLink}>
              {link.label}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}
