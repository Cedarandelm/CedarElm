import { useEffect } from 'react'
import './App.css'
import { BottomNav } from './components/BottomNav.jsx'

export default function App() {
  useEffect(() => {
    const lock = screen.orientation?.lock?.('portrait')
    if (lock) lock.catch(() => {})
  }, [])

  return (
    <div className="app">
      <div className="app__gate" aria-live="polite">
        <p className="app__gate-title font-display">Cedar &amp; Elm</p>
      </div>

      <div className="app__stage">
        <main className="app__main">
          <div className="app__backdrop" aria-hidden="true" />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}
