import { motion, AnimatePresence } from 'framer-motion'
import { useMusic } from '../../context/MusicContext.jsx'
import { useInvite } from '../../context/InviteContext.jsx'
import { couple } from '../../utils/weddingData.js'
import Particles from '../Particles/Particles.jsx'
import WaxSeal from '../WaxSeal/WaxSeal.jsx'
import ganeshaIcon from '../../assets/images/ganesha-icon.png'
import styles from './Intro.module.css'

export default function Intro() {
  const { hasEntered, setHasEntered } = useInvite()
  const { play } = useMusic()

  const handleOpen = () => {
    play()
    setHasEntered(true)
  }

  return (
    <AnimatePresence>
      {!hasEntered && (
        <motion.div
          className={styles.intro}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          <Particles count={20} />

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img src={ganeshaIcon} alt="" className={styles.ganesha} aria-hidden="true" />

            <span className={styles.invocation}>ഓം ഗം ഗണപതയേ നമഃ</span>

            <span className={styles.eyebrow}>{couple.tagline}</span>

            <h1 className={styles.names}>
              {couple.brideFull} <span className={styles.amp}>&amp;</span> {couple.groomFull}
            </h1>

            <WaxSeal onClick={handleOpen} />

            <span className={styles.hint}>Tap the seal to open</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
