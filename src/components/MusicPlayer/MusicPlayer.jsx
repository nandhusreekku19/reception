import { motion } from 'framer-motion'
import { FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import { useMusic } from '../../context/MusicContext.jsx'
import { useInvite } from '../../context/InviteContext.jsx'
import styles from './MusicPlayer.module.css'

export default function MusicPlayer() {
  const { hasEntered } = useInvite()
  const { isPlaying, isMuted, togglePlay, toggleMute } = useMusic()

  if (!hasEntered) return null

  return (
    <motion.div
      className={styles.player}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <button
        type="button"
        className={`${styles.diskBtn} ${isPlaying ? styles.spinning : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
      >
        <FaMusic />
      </button>
      <button
        type="button"
        className={styles.muteBtn}
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        aria-pressed={isMuted}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </motion.div>
  )
}
