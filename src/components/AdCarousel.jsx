import { useCallback, useEffect, useRef, useState } from 'react'
import './AdCarousel.css'

const AD_IMAGES = [
  'boutique-ad.png',
  'scanner-ad.png',
  'formulary-ad.png',
]

const INTERVAL_MS = 10000
const SWIPE_THRESHOLD_PX = 48
const DOTS_HIDE_DELAY_MS = 1400

const adSrcByFilename = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/*.png', { eager: true, import: 'default' })).map(
    ([path, url]) => [path.replace(/\\/g, '/').split('/').pop(), url],
  ),
)

function resolveAdSrc(filename) {
  return adSrcByFilename[filename] ?? ''
}

export function AdCarousel() {
  const count = AD_IMAGES.length
  const [index, setIndex] = useState(0)
  const [dotsVisible, setDotsVisible] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)

  const indexRef = useRef(0)
  const pausedRef = useRef(false)
  const pointerStartX = useRef(0)
  const pointerActive = useRef(false)
  const dotsTimerRef = useRef(null)
  const intervalRef = useRef(null)

  const goTo = useCallback(
    (nextIndex) => {
      if (count === 0) return
      const wrapped = ((nextIndex % count) + count) % count
      indexRef.current = wrapped
      setIndex(wrapped)
    },
    [count],
  )

  const goNext = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const goPrev = useCallback(() => goTo(indexRef.current - 1), [goTo])

  const clearDotsTimer = useCallback(() => {
    if (dotsTimerRef.current) {
      window.clearTimeout(dotsTimerRef.current)
      dotsTimerRef.current = null
    }
  }, [])

  const showDots = useCallback(() => {
    clearDotsTimer()
    setDotsVisible(true)
  }, [clearDotsTimer])

  const scheduleHideDots = useCallback(() => {
    clearDotsTimer()
    dotsTimerRef.current = window.setTimeout(() => {
      setDotsVisible(false)
      dotsTimerRef.current = null
    }, DOTS_HIDE_DELAY_MS)
  }, [clearDotsTimer])

  const startAuto = useCallback(() => {
    if (count <= 1) return
    window.clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      if (!pausedRef.current) goNext()
    }, INTERVAL_MS)
  }, [count, goNext])

  const pauseAuto = useCallback(() => {
    pausedRef.current = true
  }, [])

  const resumeAuto = useCallback(() => {
    pausedRef.current = false
  }, [])

  useEffect(() => {
    startAuto()
    return () => window.clearInterval(intervalRef.current)
  }, [startAuto])

  useEffect(() => () => clearDotsTimer(), [clearDotsTimer])

  function onPointerDown(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerActive.current = true
    pointerStartX.current = e.clientX
    setIsInteracting(true)
    showDots()
    pauseAuto()
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerUp(e) {
    if (!pointerActive.current) return
    pointerActive.current = false
    setIsInteracting(false)
    e.currentTarget.releasePointerCapture(e.pointerId)

    const delta = e.clientX - pointerStartX.current
    if (delta <= -SWIPE_THRESHOLD_PX) goNext()
    else if (delta >= SWIPE_THRESHOLD_PX) goPrev()

    scheduleHideDots()
    resumeAuto()
    startAuto()
  }

  function onPointerCancel(e) {
    if (!pointerActive.current) return
    pointerActive.current = false
    setIsInteracting(false)
    e.currentTarget.releasePointerCapture(e.pointerId)
    scheduleHideDots()
    resumeAuto()
    startAuto()
  }

  if (count === 0) return null

  return (
    <section
      className={`ad-carousel${isInteracting ? ' ad-carousel--interacting' : ''}`}
      aria-roledescription="carousel"
      aria-label="Featured"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div className="ad-carousel__viewport">
        {AD_IMAGES.map((filename, i) => (
          <figure
            key={filename}
            className={`ad-carousel__slide${i === index ? ' ad-carousel__slide--active' : ''}`}
            aria-hidden={i !== index}
          >
            <img
              className="ad-carousel__image"
              src={resolveAdSrc(filename)}
              alt=""
              draggable={false}
              decoding="async"
            />
          </figure>
        ))}
      </div>

      <div
        className={`ad-carousel__dots${dotsVisible ? ' ad-carousel__dots--visible' : ''}`}
        role="tablist"
        aria-label="Slide indicators"
      >
        {AD_IMAGES.map((filename, i) => (
          <span
            key={filename}
            role="tab"
            className={`ad-carousel__dot${i === index ? ' ad-carousel__dot--active' : ''}`}
            aria-selected={i === index}
            aria-label={`Slide ${i + 1} of ${count}`}
          />
        ))}
      </div>
    </section>
  )
}
