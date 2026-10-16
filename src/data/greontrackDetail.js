// Datos de la página /proyectos que no viven en content.*.js.
// Van en el mismo orden que projects[0].components (Frontend, Backend, Agente,
// Sniffer). Las tecnologías salen de README y package.json / requirements.txt
// de cada repo; son nombres propios, así que no se traducen.
//
// `images` queda vacío a propósito: cuando haya capturas se agregan aquí como
// { src, alt } y la ficha las muestra sola; mientras no existan no se dibuja nada.

export const componentDetails = [
  {
    tech: ['React 18', 'TypeScript', 'Vite', 'React Router', 'Supabase (Auth + Postgres)', 'Recharts', 'jsPDF'],
    images: [],
  },
  {
    tech: ['Node.js', 'Express', 'Supabase'],
    images: [],
  },
  {
    tech: ['Node.js', 'axios'],
    images: [],
  },
  {
    tech: ['Python', 'Scapy', 'zeroconf', 'requests', 'mac-vendor-lookup'],
    images: [],
  },
]
