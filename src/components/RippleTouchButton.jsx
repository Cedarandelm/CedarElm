import './RippleTouchButton.css'

export function RippleTouchButton({ className = '', children, ...rest }) {
  function press(e) {
    const node = e.currentTarget
    const r = node.getBoundingClientRect()
    node.style.setProperty('--ripple-x', `${e.clientX - r.left}px`)
    node.style.setProperty('--ripple-y', `${e.clientY - r.top}px`)
    node.dataset.pressed = 'true'
  }

  function release(e) {
    const target = e.currentTarget
    window.requestAnimationFrame(() => {
      target.dataset.pressed = 'false'
    })
  }

  return (
    <button
      type="button"
      className={`ripple-touch ${className}`.trim()}
      onPointerDown={press}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
      {...rest}
    >
      {children}
    </button>
  )
}
