import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      fontFamily: 'var(--font-display)',
      color: 'var(--c-maroon)',
      background: 'var(--c-ivory)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1>Page Not Found</h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem' }}>
        Looks like this page wandered off the wedding trail.
      </p>
      <Link to="/" className="btn-gold">Return to Invitation</Link>
    </div>
  )
}
