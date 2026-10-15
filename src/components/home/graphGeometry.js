// Punto donde el segmento centro->centro sale del rectángulo de una ficha.
function exitPoint(from, to, half) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const t = Math.min(dx ? half.w / Math.abs(dx) : Infinity, dy ? half.h / Math.abs(dy) : Infinity)
  return { x: from.x + dx * t, y: from.y + dy * t }
}

// Recta entre dos fichas, recortada a sus bordes (con un pequeño margen),
// más las puntas de flecha y el punto medio para la etiqueta.
export function edgeGeometry(a, b, half, gap = 10) {
  const start = exitPoint(a, b, { w: half.w + gap, h: half.h + gap })
  const end = exitPoint(b, a, { w: half.w + gap, h: half.h + gap })
  const angle = Math.atan2(end.y - start.y, end.x - start.x)
  return {
    d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
    endArrow: arrowHead(end, angle),
    startArrow: arrowHead(start, angle + Math.PI),
    label: labelPoint(start, end, angle),
  }
}

function arrowHead(tip, angle, size = 9) {
  const left = { x: tip.x - size * Math.cos(angle - 0.45), y: tip.y - size * Math.sin(angle - 0.45) }
  const right = { x: tip.x - size * Math.cos(angle + 0.45), y: tip.y - size * Math.sin(angle + 0.45) }
  return `M ${left.x} ${left.y} L ${tip.x} ${tip.y} L ${right.x} ${right.y}`
}

// Etiqueta desplazada en perpendicular a la línea (hacia arriba, o hacia la
// derecha si la línea es vertical), para que no quede encima del trazo.
function labelPoint(start, end, angle, offset = 22) {
  let nx = Math.sin(angle)
  let ny = -Math.cos(angle)
  if (ny > 0 || (Math.abs(ny) < 0.3 && nx < 0)) {
    nx = -nx
    ny = -ny
  }
  const vertical = Math.abs(nx) > 0.7
  return {
    x: (start.x + end.x) / 2 + nx * offset,
    y: (start.y + end.y) / 2 + ny * offset,
    anchor: vertical ? 'start' : 'middle',
  }
}
