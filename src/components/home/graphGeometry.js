// Punto donde el segmento centro->centro sale del rectángulo de una ficha.
function exitPoint(from, to, half) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const t = Math.min(dx ? half.w / Math.abs(dx) : Infinity, dy ? half.h / Math.abs(dy) : Infinity)
  return { x: from.x + dx * t, y: from.y + dy * t }
}

// Recta entre dos fichas, recortada a sus bordes (con un pequeño margen),
// más las puntas de flecha y la posición de la etiqueta. `labelBox` es el
// tamaño de la etiqueta (ancho y alto en unidades del viewBox) y `center` el
// centro del diagrama, hacia el que se desplazan las etiquetas de las rectas
// verticales para no salirse del lienzo.
export function edgeGeometry(a, b, half, labelBox, center, gap = 12) {
  const start = exitPoint(a, b, { w: half.w + gap, h: half.h + gap })
  const end = exitPoint(b, a, { w: half.w + gap, h: half.h + gap })
  const angle = Math.atan2(end.y - start.y, end.x - start.x)
  return {
    d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
    endArrow: arrowHead(end, angle),
    startArrow: arrowHead(start, angle + Math.PI),
    label: labelBox ? labelPoint(start, end, angle, labelBox, center) : null,
  }
}

function arrowHead(tip, angle, size = 10) {
  const left = { x: tip.x - size * Math.cos(angle - 0.45), y: tip.y - size * Math.sin(angle - 0.45) }
  const right = { x: tip.x - size * Math.cos(angle + 0.45), y: tip.y - size * Math.sin(angle + 0.45) }
  return `M ${left.x} ${left.y} L ${tip.x} ${tip.y} L ${right.x} ${right.y}`
}

// Etiqueta separada de la recta en perpendicular. La distancia sale del propio
// tamaño del recuadro (su semiancho y semialto proyectados sobre la normal)
// más un margen, así que el recuadro nunca toca la línea ni las puntas.
// Hacia arriba en rectas inclinadas; hacia el centro en las verticales.
function labelPoint(start, end, angle, box, center, pad = 10) {
  const mid = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 }
  let nx = Math.sin(angle)
  let ny = -Math.cos(angle)
  const vertical = Math.abs(ny) < 0.3
  const flip = vertical ? (center.x - mid.x) * nx + (center.y - mid.y) * ny < 0 : ny > 0
  if (flip) {
    nx = -nx
    ny = -ny
  }
  const offset = (box.w / 2) * Math.abs(nx) + (box.h / 2) * Math.abs(ny) + pad
  return { x: mid.x + nx * offset, y: mid.y + ny * offset, w: box.w, h: box.h }
}
