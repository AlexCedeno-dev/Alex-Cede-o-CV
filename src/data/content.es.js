export const navLinks = [
  { href: '#about', label: 'sobre-mi' },
  { href: '#experience', label: 'experiencia' },
  { href: '#education', label: 'educación' },
  { href: '#skills', label: 'skills' },
  { href: '#hobbies', label: 'hobbies' },
  { href: '#contact', label: 'contacto' },
]

export const ledgerFields = [
  { k: 'nombre', v: 'Edgar Alejandro Cedeño Suárez' },
  { k: 'rol', v: 'Estudiante de Ing. en Sistemas Computacionales' },
  { k: 'ubicación', v: 'Aguascalientes, México' },
  { k: 'stack', v: 'React · Node.js · Angular · MySQL · PHP' },
  { k: 'estado', stamp: 'disponible' },
]

export const aboutParagraphs = [
  'Soy estudiante de <strong>Ingeniería en Sistemas Computacionales</strong> en la Universidad Autónoma de Aguascalientes, con experiencia práctica en desarrollo web, móvil y soluciones internas para mejora de procesos. He trabajado en frontend, backend, bases de datos, APIs REST, automatización y soporte a sistemas empresariales.',
  'Me interesa seguir creciendo en el área de software aplicando <strong>buenas prácticas de programación, pensamiento analítico y resolución de problemas</strong>, para construir soluciones funcionales y ordenadas, centradas en las necesidades reales del usuario y de la operación.',
  'Fuera del código tengo otras actividades que, sin que lo busque, terminan influyendo directamente en cómo trabajo  más detalle en la sección de hobbies.',
]

export const jobs = [
  {
    id: 'EXP-001',
    date: 'Marzo 2026 — Actualidad',
    role: 'Becario de Desarrollo de Sistemas',
    org: 'Foresight · Aguascalientes, México',
    descripcion:
      'Creación de interfaces web con React y aplicaciones móviles con React Native, además de agentes en Node.js para monitoreo y registro de información de equipos. Diseño y consumo de APIs REST para la comunicación entre cliente, servidor y bases de datos, con administración de datos en MySQL para gestión de usuarios, equipos y procesos internos. Participación en mejoras de inventario, trazabilidad y control operativo, apoyo en automatización, pruebas y despliegue, y soporte en Active Directory.',
    tecnologias: ['React', 'React Native', 'Node.js', 'APIs REST', 'MySQL', 'Active Directory'],
  },
  {
    id: 'EXP-002',
    date: 'Nov 2024 — Ago 2025',
    role: 'Becario de Sistemas Computacionales',
    org: 'Key Depot · Aguascalientes, México',
    descripcion:
      'Desarrollo y mantenimiento de páginas web con Angular v19 y WordPress, aplicando buenas prácticas, e implementación de funcionalidades backend en PHP conectando aplicaciones con MySQL vía phpMyAdmin. Integración de bots automatizados con N8N y Webhooks para optimizar procesos internos, verificación de pagos electrónicos con Openpay BBVA, y soporte técnico y mejora continua de sistemas existentes.',
    tecnologias: ['Angular v19', 'WordPress', 'PHP', 'MySQL', 'N8N', 'Webhooks', 'Openpay BBVA'],
  },
]

export const educationCards = [
  {
    id: 'FORM-001',
    title: 'Ingeniería en Sistemas Computacionales',
    org: 'Universidad Autónoma de Aguascalientes',
    period: 'Egreso estimado: dic. 2026',
    status: { type: 'active', label: 'en curso' },
    detalle: 'Aguascalientes, México.',
  },
  {
    id: 'FORM-002',
    title: 'AWS Academy Graduate',
    org: 'Cloud Foundations — Amazon Web Services',
    period: 'Mayo 2026',
    status: { type: 'verified', label: 'obtenida' },
    link: { href: 'https://www.credly.com/go/Zj2c779G', label: 'Ver credencial ↗' },
  },
]

export const skillGroups = [
  {
    title: 'Lenguajes',
    tags: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C++', 'Kotlin', 'SQL'],
  },
  {
    title: 'Frontend',
    tags: ['React', 'React Native', 'Angular v19', 'HTML', 'CSS', 'Bootstrap', 'Material UI', 'Materialize', 'Bulma'],
  },
  {
    title: 'Backend & datos',
    tags: ['Node.js', 'Express', 'APIs REST', 'MySQL', 'SQL Server'],
  },
  {
    title: 'Herramientas',
    tags: ['GitHub', 'Figma', 'N8N', 'Postman', 'VS Code'],
  },
  {
    title: 'Otros',
    tags: ['Webhooks', 'Openpay', 'SEO básico', 'Active Directory', 'Gestión de dominios'],
  },
  {
    title: 'Idiomas',
    tags: ['Español — nativo', 'Inglés — B1'],
  },
]

export const hobbies = [
  {
    code: 'TM',
    title: 'Teatro musical y baile',
    text: 'Actor y bailarín activo en una obra de teatro musical: ensayos coordinados, marcaciones exactas, y depender de que cada persona cumpla su parte.',
    skill: '→ trabajo en equipo · disciplina · coordinación bajo presión',
  },
  {
    code: 'VJ',
    title: 'Videojuegos',
    text: 'Juego con enfoque en estrategia y destreza, buscando activamente mejorar la toma de decisiones rápidas.',
    skill: '→ pensamiento analítico · resolución de problemas',
  },
  {
    code: 'DEP',
    title: 'Basquetbol, natación y voleibol',
    text: 'Deportes que practico de forma regular, individuales y de equipo, con horarios que compagino junto al trabajo y la escuela.',
    skill: '→ trabajo en equipo · organización del tiempo',
  },
  {
    code: 'MU',
    title: 'Música',
    text: 'Escuchar música es parte de cómo mantengo el enfoque durante sesiones largas de trabajo o estudio.',
    skill: '→ concentración',
  },
  {
    code: 'TEC',
    title: 'Tecnología nueva',
    text: 'Me gusta explorar herramientas, frameworks y servicios recién lanzados antes de que sean necesarios en un proyecto.',
    skill: '→ aprendizaje continuo · adaptabilidad',
  },
  {
    code: 'SUM',
    title: 'En conjunto',
    text: 'Estos hábitos comparten un patrón: entornos donde varias personas dependen entre sí, con tiempos definidos y un resultado que se nota si algo falla.',
    skill: '→ adaptación a distintos ambientes',
  },
]

export const contactFields = [
  { label: 'Correo', value: 'cedenoalejandro0612@gmail.com', href: 'mailto:cedenoalejandro0612@gmail.com' },
  { label: 'GitHub', value: 'github.com/AlexCedeno-dev', href: 'https://github.com/AlexCedeno-dev', external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/alejandro-cedeño', href: 'https://www.linkedin.com/in/alejandro-cede%C3%B1o-b55660331/', external: true },
  { label: 'Teléfono', value: '+52 449 168 4651', href: 'tel:+524491684651' },
]
