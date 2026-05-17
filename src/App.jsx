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
      <header className="app__topbar">
        <h1 className="app__topbar__title font-display">Cedar &amp; Elm</h1>
      </header>

      <div className="app__gate" aria-live="polite">
        <p className="app__gate-title font-display">Cedar &amp; Elm</p>
      </div>

      <div className="app__stage">
        <main className="app__main">
          <div className="app__content-stage">
            <div className="app__media-frame" aria-hidden="true" />
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  )
}
