import './BottomNav.css'
import accountLogoSrc from '../assets/account-logo.png'
import cedarSealSrc from '../assets/cedar-seal.png'
import formularyLogoSrc from '../assets/formulary-logo.png'
import boutiqueLogoSrc from '../assets/myboutique-logo.png'
import scannerLogoSrc from '../assets/scanner-logo.png'
import { RippleTouchButton } from './RippleTouchButton.jsx'

/** Bump when replacing nav icon PNGs in src/assets (same filename). */
const NAV_ICON_CACHE_REV = 2

function navIconSrc(url) {
  return `${url}?v=${NAV_ICON_CACHE_REV}`
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
      <div className="bottom-nav-panel">
        <div className="bottom-nav-body">
          <nav className="bottom-nav" aria-label="Primary">
            <RippleTouchButton className="bottom-nav__btn" aria-label="My Boutique" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img"
                  src={navIconSrc(boutiqueLogoSrc)}
                  alt=""
                  width={63}
                  height={63}
                  decoding="async"
                />
              </span>
              <span className="bottom-nav__label">My Boutique</span>
            </RippleTouchButton>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Scanner" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img"
                  src={navIconSrc(scannerLogoSrc)}
                  alt=""
                  width={63}
                  height={63}
                  decoding="async"
                />
              </span>
              <span className="bottom-nav__label">Scanner</span>
            </RippleTouchButton>

            <div className="bottom-nav__centre-slot">
              <div className="bottom-nav__btn bottom-nav__btn--centre">
                <div className="bottom-nav__seal-slot">
                  <RippleTouchButton
                    className="bottom-nav__seal-btn ripple-touch"
                    aria-label="Cedar"
                    onClick={noop}
                  >
                    <span className="bottom-nav__seal-stack">
                      <span className="bottom-nav__seal-disc" aria-hidden="true" />
                      <span className="bottom-nav__seal">
                        <img
                          className="bottom-nav__seal-img"
                          src={cedarSealSrc}
                          alt=""
                          width={77}
                          height={77}
                          loading="eager"
                          fetchPriority="high"
                          decoding="sync"
                        />
                      </span>
                    </span>
                  </RippleTouchButton>
                </div>
                <span className="bottom-nav__label bottom-nav__label--seal-rail" aria-hidden="true">
                  Cedar
                </span>
              </div>
            </div>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Formulary" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img"
                  src={navIconSrc(formularyLogoSrc)}
                  alt=""
                  width={63}
                  height={63}
                  decoding="async"
                />
              </span>
              <span className="bottom-nav__label">Formulary</span>
            </RippleTouchButton>

            <RippleTouchButton className="bottom-nav__btn" aria-label="Account" onClick={noop}>
              <span className="bottom-nav__icon-slot">
                <img
                  className="bottom-nav__icon-img bottom-nav__icon-img--account"
                  src={navIconSrc(accountLogoSrc)}
                  alt=""
                  width={63}
                  height={63}
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
