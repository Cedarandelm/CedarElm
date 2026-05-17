import { useEffect } from 'react'
import './App.css'
import { BottomNav } from './components/BottomNav.jsx'
import {
  NAV_ARCH,
  buildNavArchPath,
  getNavArchMetrics,
} from './utils/navArchPath.js'

export default function App() {
  useEffect(() => {
    const lock = screen.orientation?.lock?.('portrait')
    if (lock) lock.catch(() => {})
  }, [])

  const archMetrics = getNavArchMetrics()
  const archPathD = buildNavArchPath(archMetrics)
  const archViewHeight = NAV_ARCH.height + NAV_ARCH.viewboxInsetTop

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
          <div className="app__nav-arch" aria-hidden="true">
            <svg
              viewBox={`0 ${-NAV_ARCH.viewboxInsetTop} ${archMetrics.width} ${archViewHeight}`}
              preserveAspectRatio="xMidYMax meet"
            >
              <path d={archPathD} fill="var(--midnight-forest)" />
            </svg>
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  )
}
