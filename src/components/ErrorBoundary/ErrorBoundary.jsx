import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Wedding site error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          fontFamily: 'Playfair Display, serif',
          color: '#5c0f14',
          background: '#ffffff',
          textAlign: 'center',
          padding: '2rem',
        }}>
          <h1>Something went astray</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', maxWidth: 480 }}>
            Please refresh the page. If the problem continues, contact the family.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
