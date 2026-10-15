// Topología de GreonTrack para el diagrama del Home (§ II).
// Las conexiones salen de los repos de cada componente, no de suposiciones:
// - Frontend  <-> Supabase  (VITE_SUPABASE_URL: Auth + Postgres, lee y escribe)
// - Backend    -> Supabase  (SUPABASE_SERVICE_ROLE_KEY)
// - Agente     -> Backend   (SERVER_URL, POST /agent/uso)
// - Sniffer    -> Supabase  (SUPABASE_URL, directo)
// No existe conexión Frontend -> Backend: no se dibuja.
//
// `component` apunta al nombre en projects[0].components (content.*.js) para
// tomar de ahí el repo; Supabase es un servicio externo, sin repo propio.
// Los textos de cada arista viven en content.*.js (homeChapters.build.edges).

export const graphNodes = [
  { id: 'frontend', componentIndex: 0 },
  { id: 'backend', componentIndex: 1 },
  { id: 'agent', componentIndex: 2 },
  { id: 'sniffer', componentIndex: 3 },
  { id: 'supabase', external: true },
]

// Orden de dibujo = orden de los componentes en los datos del proyecto.
// `lights` es el nodo que se enciende cuando su arista termina de trazarse.
export const graphEdges = [
  { id: 'frontendSupabase', from: 'frontend', to: 'supabase', both: true, lights: 'frontend' },
  { id: 'backendSupabase', from: 'backend', to: 'supabase', lights: 'backend' },
  { id: 'agentBackend', from: 'agent', to: 'backend', lights: 'agent' },
  { id: 'snifferSupabase', from: 'sniffer', to: 'supabase', lights: 'sniffer' },
]

// Coordenadas en unidades del viewBox. `node` es el medio tamaño aproximado
// de cada ficha, para que las líneas terminen en el borde y no en el centro.
export const graphLayouts = {
  wide: {
    width: 1000,
    height: 500,
    node: { w: 98, h: 42 },
    positions: {
      frontend: { x: 160, y: 110 },
      sniffer: { x: 160, y: 390 },
      supabase: { x: 500, y: 250 },
      backend: { x: 840, y: 110 },
      agent: { x: 840, y: 390 },
    },
  },
  tall: {
    width: 360,
    height: 640,
    node: { w: 78, h: 36 },
    positions: {
      frontend: { x: 92, y: 60 },
      sniffer: { x: 268, y: 60 },
      supabase: { x: 180, y: 240 },
      backend: { x: 180, y: 420 },
      agent: { x: 180, y: 590 },
    },
  },
}
