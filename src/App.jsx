import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MusicProvider } from './context/MusicContext.jsx'
import { InviteProvider } from './context/InviteContext.jsx'
import InvitationPage from './pages/InvitationPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <MusicProvider>
      <InviteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InvitationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </InviteProvider>
    </MusicProvider>
  )
}
