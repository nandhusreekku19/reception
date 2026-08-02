import { Suspense, lazy, useEffect } from 'react'
import { useInvite } from '../context/InviteContext.jsx'
import Intro from '../components/Intro/Intro.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Family from '../components/Family/Family.jsx'
import Events from '../components/Events/Events.jsx'
import GuestBook from '../components/GuestBook/GuestBook.jsx'
import CountdownSection from '../components/CountdownSection/CountdownSection.jsx'
import Footer from '../components/Footer/Footer.jsx'

// Code-split the heaviest below-the-fold section (Swiper lightbox).
const Gallery = lazy(() => import('../components/Gallery/Gallery.jsx'))

const SECTION_FALLBACK = <div style={{ minHeight: '40vh' }} aria-hidden="true" />

export default function InvitationPage() {
  const { hasEntered } = useInvite()

  useEffect(() => {
    document.body.classList.toggle('no-scroll', !hasEntered)
  }, [hasEntered])

  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Family />
        <Events />
        <Suspense fallback={SECTION_FALLBACK}>
          <Gallery />
        </Suspense>
        <GuestBook />
        <CountdownSection />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  )
}
