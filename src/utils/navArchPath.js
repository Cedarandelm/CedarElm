/** Shared nav arch geometry — keep in sync with :root tokens in index.css */
export const NAV_ARCH = {
  width: 390,
  height: 56,
  viewboxInsetTop: 28,
  sealRadius: 32,
  collarGap: 9,
  flatAboveLabels: 9,
  btnPaddingBottom: 2,
}

export function getNavArchMetrics({
  width = NAV_ARCH.width,
  height = NAV_ARCH.height,
  sealRadius = NAV_ARCH.sealRadius,
  collarGap = NAV_ARCH.collarGap,
  flatAboveLabels = NAV_ARCH.flatAboveLabels,
  btnPaddingBottom = NAV_ARCH.btnPaddingBottom,
} = {}) {
  const cx = width / 2
  const labelBaselineY = height
  const flatY = labelBaselineY - flatAboveLabels
  const sealBottomY = labelBaselineY - btnPaddingBottom
  const sealCenterY = sealBottomY - sealRadius
  const collarRadius = sealRadius + collarGap
  const dy = sealCenterY - flatY
  const dx = Math.sqrt(Math.max(0, collarRadius * collarRadius - dy * dy))
  return {
    width,
    height,
    cx,
    flatY,
    sealCenterY,
    collarRadius,
    x1: cx - dx,
    x2: cx + dx,
  }
}

export function buildNavArchPath(metrics) {
  const { width, height, flatY, cx, sealCenterY, collarRadius, x1, x2 } = metrics
  const angleLeft = Math.atan2(flatY - sealCenterY, x1 - cx)
  const angleRight = Math.atan2(flatY - sealCenterY, x2 - cx)
  const steps = 24
  let arcPoints = ''

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps
    const angle = angleLeft + (angleRight - angleLeft) * t
    const x = cx + collarRadius * Math.cos(angle)
    const y = sealCenterY + collarRadius * Math.sin(angle)
    arcPoints += ` L${x.toFixed(2)} ${y.toFixed(2)}`
  }

  return `M0 ${height} V${flatY} H${x1}${arcPoints} H${width} V${height} Z`
}

export function getNavArchSvgPathD() {
  return buildNavArchPath(getNavArchMetrics())
}
