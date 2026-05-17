import './BottomNav.css'
import { RippleTouchButton } from './RippleTouchButton.jsx'

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

function BottomNavArch() {
  return (
    <svg
      className="bottom-nav-arch"
      viewBox="0 0 390 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 48 V34 C72 34 138 12 195 2 C252 12 318 34 390 34 V48 Z"
        fill="currentColor"
      />
    </svg>
  )
}

const noop = () => {}

export function BottomNav() {
  return (
    <footer className="bottom-nav-shell">
      <RippleTouchButton
        className="bottom-nav__seal-btn ripple-touch"
        aria-label="Cedar"
        onClick={noop}
      >
        <span className="bottom-nav__seal">
          <img
            className="bottom-nav__seal-img"
            src="/cedar-seal.png"
            alt=""
            width={64}
            height={64}
            decoding="async"
          />
        </span>
      </RippleTouchButton>

      <div className="bottom-nav-panel">
        <BottomNavArch />

        <nav className="bottom-nav" aria-label="Primary">
          <RippleTouchButton className="bottom-nav__btn" aria-label="My Boutique" onClick={noop}>
            <span className="bottom-nav__icon-slot">
              <img
                className="bottom-nav__icon-img"
                src="/myboutique-logo.png"
                alt=""
                width={28}
                height={28}
                decoding="async"
              />
            </span>
            <span className="bottom-nav__label">My Boutique</span>
          </RippleTouchButton>

          <RippleTouchButton className="bottom-nav__btn" aria-label="Scanner" onClick={noop}>
            <span className="bottom-nav__icon-slot">
              <img
                className="bottom-nav__icon-img"
                src="/scanner-logo.png"
                alt=""
                width={28}
                height={28}
                decoding="async"
              />
            </span>
            <span className="bottom-nav__label">Scanner</span>
          </RippleTouchButton>

          <span className="bottom-nav__centre-slot" aria-hidden="true" />

          <RippleTouchButton className="bottom-nav__btn" aria-label="The Formulary" onClick={noop}>
            <span className="bottom-nav__icon-slot">
              <img
                className="bottom-nav__icon-img bottom-nav__icon-img--formulary"
                src="/formulary-logo.png?v=2"
                alt=""
                height={28}
                decoding="async"
              />
            </span>
            <span className="bottom-nav__label">The Formulary</span>
          </RippleTouchButton>

          <RippleTouchButton className="bottom-nav__btn" aria-label="Account" onClick={noop}>
            <span className="bottom-nav__icon-slot">
              <img
                className="bottom-nav__icon-img bottom-nav__icon-img--account"
                src="/account-logo.png"
                alt=""
                height={28}
                decoding="async"
              />
            </span>
            <span className="bottom-nav__label">Account</span>
          </RippleTouchButton>
        </nav>

        <div className="ask-cedar">
          <p className="ask-cedar__label">Ask Cedar anything...</p>
          <button type="button" className="ask-cedar__send" aria-label="Send" onClick={noop}>
            <IconSendArrow />
          </button>
        </div>
      </div>
    </footer>
  )
}
