import './BottomNav.css'
import accountLogoSrc from '../assets/account-logo.png'
import cedarSealSrc from '../assets/cedar-seal.png'
import formularyLogoSrc from '../assets/formulary-logo.png'
import boutiqueLogoSrc from '../assets/myboutique-logo.png'
import scannerLogoSrc from '../assets/scanner-logo.png'
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
      viewBox="0 0 390 56"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 56 V40 Q195 -2 390 40 V56 Z"
        fill="currentColor"
      />
    </svg>
  )
}

const noop = () => {}

export function BottomNav() {
  return (
    <footer className="bottom-nav-shell">
      <div className="bottom-nav-panel">
        <div className="bottom-nav-arch-zone">
          <BottomNavArch />
        </div>

        <div className="bottom-nav-body">
          <nav className="bottom-nav" aria-label="Primary">
            <RippleTouchButton className="bottom-nav__btn" aria-label="My Boutique" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img"
                  src={boutiqueLogoSrc}
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
                  src={scannerLogoSrc}
                  alt=""
                  width={28}
                  height={28}
                  decoding="async"
                />
              </span>
              <span className="bottom-nav__label">Scanner</span>
            </RippleTouchButton>

            <div className="bottom-nav__centre-slot">
              <RippleTouchButton
                className="bottom-nav__seal-btn ripple-touch"
                aria-label="Cedar"
                onClick={noop}
              >
                <span className="bottom-nav__seal">
                  <img
                    className="bottom-nav__seal-img"
                    src={cedarSealSrc}
                    alt=""
                    width={64}
                    height={64}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </span>
              </RippleTouchButton>
            </div>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Formulary" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img"
                  src={formularyLogoSrc}
                  alt=""
                  width={28}
                  height={28}
                  decoding="async"
                />
              </span>
              <span className="bottom-nav__label">Formulary</span>
            </RippleTouchButton>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Account" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img bottom-nav__icon-img--account"
                  src={accountLogoSrc}
                  alt=""
                  width={28}
                  height={28}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
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
      </div>
    </footer>
  )
}
