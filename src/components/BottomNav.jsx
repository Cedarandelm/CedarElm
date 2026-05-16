import './BottomNav.css'
import { RippleTouchButton } from './RippleTouchButton.jsx'

function IconPerfume() {
  return (
    <svg className="bottom-nav__icon" viewBox="0 0 28 28" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 6h6v3l-.9 1.4v13.8a2 2 0 01-2 2h-.2a2 2 0 01-2-2V10.4L11 9V6z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        d="M11.8 6V4.8h4.4V6"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.15" d="M12 13h4" opacity="0.55" />
    </svg>
  )
}

function IconVintageCamera() {
  return (
    <svg className="bottom-nav__icon" viewBox="0 0 28 28" aria-hidden="true">
      <rect x="6" y="9" width="16" height="13" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="14" cy="15.5" r="3.35" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14" cy="11.35" r="1.85" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        d="M17 9.5h3.3l1 1.6"
      />
      <rect x="8.6" y="11.8" width="2.9" height="1.9" rx="0.35" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

function IconCedarSeal() {
  return (
    <svg className="bottom-nav__icon bottom-nav__icon--cedar" viewBox="0 0 28 28" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 4.8v16.2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 8.2c-2.8 1.6-4.8 3.8-5.6 6.2M14 8.2c2.8 1.6 4.8 3.8 5.6 6.2M14 11.4c-3.4 1.8-5.6 4.4-6.4 7M14 11.4c3.4 1.8 5.6 4.4 6.4 7M14 14.8c-2.6 1.4-4.2 3.2-4.8 5.2M14 14.8c2.6 1.4 4.2 3.2 4.8 5.2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        d="M10.2 21h7.6"
      />
    </svg>
  )
}

function IconStill() {
  return (
    <svg className="bottom-nav__icon" viewBox="0 0 28 28" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 21h10"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        d="M11 21V14c0-2.8 2.3-5 5.2-5h.6c2.9 0 5.2 2.2 5.2 5v7"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" d="M14 9V6.5" />
      <path fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" d="M14 6.5h6.5v4" />
      <circle cx="18.8" cy="8.8" r="1.15" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function IconBowler() {
  return (
    <svg className="bottom-nav__icon" viewBox="0 0 28 28" aria-hidden="true">
      <ellipse cx="14" cy="17.8" rx="9.5" ry="2.35" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        d="M14 17.5c3.8 0 6.9-3 7.4-7"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        d="M10 17.5c-.9-4 2.5-8 8.5-8"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.15" d="M14 11v5.8" opacity="0.35" />
    </svg>
  )
}

function IconSendArrow() {
  return (
    <svg className="ask-cedar__send-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10h9.5M11.5 6.5L15 10l-3.5 3.5"
      />
    </svg>
  )
}

const noop = () => {}

export function BottomNav() {
  return (
    <footer className="bottom-nav-shell">
      <div className="bottom-nav-shell__stack">
        <div className="ask-cedar">
          <p className="ask-cedar__label">Ask Cedar anything...</p>
          <button type="button" className="ask-cedar__send" aria-label="Send" onClick={noop}>
            <IconSendArrow />
          </button>
        </div>

        <h1 className="bottom-nav-shell__brand font-display">Cedar &amp; Elm</h1>

        <div className="bottom-nav-rise">
          <nav className="bottom-nav" aria-label="Primary">
            <RippleTouchButton className="bottom-nav__btn" aria-label="My Boutique" onClick={noop}>
              <IconPerfume />
              <span className="bottom-nav__label">My Boutique</span>
            </RippleTouchButton>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Scanner" onClick={noop}>
              <IconVintageCamera />
              <span className="bottom-nav__label">Scanner</span>
            </RippleTouchButton>

            <RippleTouchButton
              className="bottom-nav__btn bottom-nav__btn--centre"
              aria-label="Cedar"
              onClick={noop}
            >
              <span className="bottom-nav__seal">
                <IconCedarSeal />
              </span>
              <span className="bottom-nav__label bottom-nav__label--centre">Cedar</span>
            </RippleTouchButton>

            <RippleTouchButton className="bottom-nav__btn" aria-label="The Formulary" onClick={noop}>
              <IconStill />
              <span className="bottom-nav__label">The Formulary</span>
            </RippleTouchButton>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Account" onClick={noop}>
              <IconBowler />
              <span className="bottom-nav__label">Account</span>
            </RippleTouchButton>
          </nav>
        </div>
      </div>
    </footer>
  )
}
