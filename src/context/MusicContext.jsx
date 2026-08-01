import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'

const MusicContext = createContext(null)

// Background wedding track, played via YouTube's own IFrame Player (hidden,
// audio-only) — we embed their official player rather than hosting the file.
const VIDEO_ID = 'f6WQm8oAG0M'
const TARGET_VOLUME = 45 // YouTube volume is 0-100
const FADE_STEP_MS = 60
const YT_API_SRC = 'https://www.youtube.com/iframe_api'

function loadYouTubeApi() {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT)
      return
    }
    const existing = document.getElementById('youtube-iframe-api')
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'youtube-iframe-api'
      script.src = YT_API_SRC
      document.head.appendChild(script)
    }
    const previousCallback = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (previousCallback) previousCallback()
      resolve(window.YT)
    }
  })
}

export function MusicProvider({ children }) {
  const playerRef = useRef(null)
  const fadeIntervalRef = useRef(null)
  const pendingActionRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    let container = document.getElementById('yt-music-player')
    if (!container) {
      container = document.createElement('div')
      container.id = 'yt-music-player'
      container.style.position = 'fixed'
      container.style.left = '-9999px'
      container.style.top = '-9999px'
      container.style.width = '2px'
      container.style.height = '2px'
      document.body.appendChild(container)
    }

    loadYouTubeApi().then((YT) => {
      if (cancelled) return
      playerRef.current = new YT.Player('yt-music-player', {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          loop: 1,
          playlist: VIDEO_ID,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(0)
            setIsReady(true)
            if (pendingActionRef.current === 'play') {
              pendingActionRef.current = null
              event.target.playVideo()
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
      if (playerRef.current?.destroy) playerRef.current.destroy()
      playerRef.current = null
    }
  }, [])

  const fadeTo = useCallback((target, durationMs = 900, onDone) => {
    const player = playerRef.current
    if (!player || typeof player.getVolume !== 'function') return
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
    const steps = Math.max(1, Math.round(durationMs / FADE_STEP_MS))
    const start = player.getVolume()
    const delta = (target - start) / steps
    let count = 0
    fadeIntervalRef.current = setInterval(() => {
      count += 1
      const next = start + delta * count
      player.setVolume(Math.min(100, Math.max(0, Math.round(next))))
      if (count >= steps) {
        player.setVolume(target)
        clearInterval(fadeIntervalRef.current)
        fadeIntervalRef.current = null
        if (onDone) onDone()
      }
    }, FADE_STEP_MS)
  }, [])

  // Music never restarts on route/section navigation because the player
  // instance and its state live in this provider, above the router.
  const play = useCallback(() => {
    const player = playerRef.current
    if (!player || typeof player.playVideo !== 'function') {
      pendingActionRef.current = 'play'
      return
    }
    player.playVideo()
    setIsPlaying(true)
    fadeTo(isMuted ? 0 : TARGET_VOLUME, 1200)
  }, [fadeTo, isMuted])

  const pause = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    fadeTo(0, 700, () => {
      player.pauseVideo()
      setIsPlaying(false)
    })
  }, [fadeTo])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev
      if (playerRef.current && isPlaying) {
        fadeTo(next ? 0 : TARGET_VOLUME, 500)
      }
      return next
    })
  }, [fadeTo, isPlaying])

  const togglePlay = useCallback(() => {
    if (isPlaying) pause()
    else play()
  }, [isPlaying, pause, play])

  return (
    <MusicContext.Provider value={{ isPlaying, isMuted, isReady, play, pause, togglePlay, toggleMute }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
