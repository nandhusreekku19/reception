import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard, Zoom } from 'swiper/modules'
import { FaTimes } from 'react-icons/fa'
import SectionReveal from '../SectionReveal/SectionReveal.jsx'
import { gallery } from '../../utils/weddingData.js'
import styles from './Gallery.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/zoom'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="gallery" className={`section ${styles.gallery}`} aria-label="Photo gallery">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A few glimpses from our engagement.</p>
        </SectionReveal>

        <div className={styles.masonry}>
          {gallery.map((img, i) => (
            <SectionReveal
              key={img.id}
              variant="scale"
              delay={(i % 4) * 0.08}
              className={styles.tile}
            >
              <button
                type="button"
                className={styles.tileBtn}
                onClick={() => setActiveIndex(i)}
                aria-label={`Open ${img.alt} in lightbox`}
              >
                {img.src ? (
                  <img src={img.src} alt={img.alt} loading="lazy" />
                ) : (
                  <div className={styles.placeholder}>
                    <span>{img.alt}</span>
                  </div>
                )}
                <div className={styles.tileOverlay} aria-hidden="true" />
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setActiveIndex(null)}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <div className={styles.swiperWrap} onClick={(e) => e.stopPropagation()}>
              <Swiper
                modules={[Navigation, Keyboard, Zoom]}
                navigation
                keyboard={{ enabled: true }}
                zoom
                initialSlide={activeIndex}
                className={styles.swiper}
              >
                {gallery.map((img) => (
                  <SwiperSlide key={img.id}>
                    <div className="swiper-zoom-container">
                      {img.src ? (
                        <img src={img.src} alt={img.alt} />
                      ) : (
                        <div className={styles.placeholderLarge}>
                          <span>{img.alt}</span>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
