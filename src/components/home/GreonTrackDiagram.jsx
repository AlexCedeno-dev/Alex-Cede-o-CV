import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useTransform } from 'framer-motion'
import { graphEdges, graphLayouts, graphNodes } from '../../data/greontrackGraph'
import { useDiagramProgress } from '../../hooks/useDiagramProgress'
import { edgeGeometry } from './graphGeometry'

// Ventana de progreso de cada arista: se trazan una tras otra.
const EDGE_START = 0.06
const EDGE_STEP = 0.21
const EDGE_SPAN = 0.18
const windowFor = (i) => [EDGE_START + i * EDGE_STEP, EDGE_START + i * EDGE_STEP + EDGE_SPAN]

const LABEL_FONT = 14
const MONO_ADVANCE = 0.62

const repoName =(href) => href.split('/').pop()

function Edge({ edge, geometry, label, progress, range, fontSize }) {
  const [from, to] = range
  const pathLength = useTransform(progress, [from, to], [0, 1])
  const arrowOpacity = useTransform(progress, [to - 0.02, to], [0, 1])
  const labelOpacity = useTransform(progress, [from + (to - from) * 0.4, to], [0, 1])

  return (
    <g className="gt-edge">
      <path className="gt-edge-track" d={geometry.d} />
      <motion.path className="gt-edge-line" d={geometry.d} style={{ pathLength }} />
      <motion.path className="gt-edge-arrow" d={geometry.endArrow} style={{ opacity: arrowOpacity }} />
      {edge.both && <motion.path className="gt-edge-arrow" d={geometry.startArrow} style={{ opacity: arrowOpacity }} />}
      {geometry.label && (
        <motion.g style={{ opacity: labelOpacity }}>
          <rect
            className="gt-edge-label-bg"
            x={geometry.label.x - geometry.label.w / 2}
            y={geometry.label.y - geometry.label.h / 2}
            width={geometry.label.w}
            height={geometry.label.h}
            rx="3"
          />
          <text
            className="gt-edge-label"
            x={geometry.label.x}
            y={geometry.label.y}
            dy="0.35em"
            fontSize={fontSize}
            textAnchor="middle"
          >
            {label}
          </text>
        </motion.g>
      )}
    </g>
  )
}

// Diagrama de GreonTrack. El SVG (líneas, flechas, etiquetas) es decorativo;
// las fichas son una lista real de enlaces y debajo va la descripción textual
// de cada conexión, así que nada depende de ver el dibujo.
export default function GreonTrackDiagram({ layoutKey, pinned, sectionRef, components, labels }) {
  const diagramRef = useRef(null)
  const progress = useDiagramProgress(pinned ? sectionRef : diagramRef, pinned)
  const layout = graphLayouts[layoutKey]
  // En el layout vertical (móvil) las etiquetas de las aristas se cruzarían;
  // ahí se omiten porque la lista de conexiones de abajo ya las da en texto.
  const fontSize = layoutKey === 'wide' ? LABEL_FONT : null
  const center = { x: layout.width / 2, y: layout.height / 2 }
  // Recuadro de la etiqueta: la fuente es monoespaciada, así que el ancho sale
  // del número de caracteres (con un poco de aire a los lados).
  const labelBox = (text) => (fontSize ? { w: text.length * fontSize * MONO_ADVANCE + 18, h: fontSize + 12 } : null)

  // Nodos encendidos: Supabase con la primera arista; cada componente con la suya.
  const litFor = (value) => {
    const lit = new Set()
    graphEdges.forEach((edge, i) => {
      if (value >= windowFor(i)[1]) {
        lit.add(edge.lights)
        if (i === 0) lit.add(edge.to)
      }
    })
    return lit
  }
  const [lit, setLit] = useState(() => litFor(progress.get()))
  useMotionValueEvent(progress, 'change', (value) => {
    const next = litFor(value)
    if (next.size !== lit.size) setLit(next)
  })

  const nameOf = (id) => {
    const node = graphNodes.find((n) => n.id === id)
    return node.external ? 'Supabase' : components[node.componentIndex].name
  }

  return (
    <div className="gt">
      <div
        className={`gt-diagram gt-${layoutKey}`}
        ref={diagramRef}
        style={{ aspectRatio: `${layout.width} / ${layout.height}` }}
      >
        <svg
          className="gt-svg"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          aria-hidden="true"
          focusable="false"
        >
          {graphEdges.map((edge, i) => (
            <Edge
              key={edge.id}
              edge={edge}
              geometry={edgeGeometry(
                layout.positions[edge.from],
                layout.positions[edge.to],
                layout.node,
                labelBox(labels.edges[edge.id]),
                center,
              )}
              label={labels.edges[edge.id]}
              progress={progress}
              range={windowFor(i)}
              fontSize={fontSize}
            />
          ))}
        </svg>

        <ul className="gt-nodes">
          {graphNodes.map((node) => {
            const pos = layout.positions[node.id]
            const style = { left: `${(pos.x / layout.width) * 100}%`, top: `${(pos.y / layout.height) * 100}%` }
            const isLit = lit.has(node.id)
            if (node.external) {
              return (
                <li key={node.id} className="gt-node gt-node-external" data-lit={isLit} style={style}>
                  <span className="gt-node-name">Supabase</span>
                  <span className="gt-node-meta">{labels.external}</span>
                </li>
              )
            }
            const component = components[node.componentIndex]
            return (
              <li key={node.id} className="gt-node" data-lit={isLit} style={style}>
                <a href={component.repo} target="_blank" rel="noopener">
                  <span className="gt-node-name">{component.name}</span>
                  <span className="gt-node-meta">
                    <span className="sr-only">{labels.repo}: </span>
                    {repoName(component.repo)}
                    <span aria-hidden="true"> ↗</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="gt-connections">
        <p className="folio">{labels.connectionsHeading}</p>
        <ul>
          {graphEdges.map((edge) => (
            <li key={edge.id}>
              <span className="gt-conn-from">{nameOf(edge.from)}</span>{' '}
              <span className="gt-conn-verb">{edge.both ? labels.reads : labels.sends}</span>{' '}
              <span className="gt-conn-to">{nameOf(edge.to)}</span>{' '}
              <code className="gt-conn-label">{labels.edges[edge.id]}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
