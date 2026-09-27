export const navLinks = [
  { to: '/', label: 'home' },
  { to: '/cv', label: 'cv' },
  { to: '/proyectos', label: 'projects' },
  { to: '/skills', label: 'skills' },
]

export const ledgerFields = [
  { k: 'name', v: 'Edgar Alejandro Cedeño Suárez' },
  { k: 'role', v: 'Computer Systems Engineering student' },
  { k: 'location', v: 'Aguascalientes, Mexico' },
  { k: 'stack', v: 'React · Node.js · Angular · MySQL · PHP' },
  { k: 'status', stamp: 'available' },
]

export const aboutParagraphs = [
  'I\'m a <strong>Computer Systems Engineering</strong> student at the Universidad Autónoma de Aguascalientes, with hands-on experience in web, mobile, and internal process-improvement software. I\'ve worked across frontend, backend, databases, REST APIs, automation, and support for business systems.',
  'I\'m interested in keep growing in software by applying <strong>solid coding practices, analytical thinking, and problem-solving</strong>, to build functional, well-organized solutions centered on the real needs of the user and the operation.',
  'Outside of code I have other activities that, without meaning to, end up shaping directly how I work — more on that in the hobbies section.',
]

export const jobs = [
  {
    id: 'EXP-001',
    date: 'March 2026 — Present',
    role: 'Systems Development Intern',
    org: 'Foresight · Aguascalientes, Mexico',
    descripcion:
      'Built web interfaces with React and mobile apps with React Native, plus Node.js agents for monitoring and logging equipment data. Designed and consumed REST APIs for client-server-database communication, with MySQL data administration for user, equipment, and internal process management. Contributed to inventory, traceability, and operational-control improvements, supported automation, testing and deployment, and provided Active Directory support.',
    tecnologias: ['React', 'React Native', 'Node.js', 'REST APIs', 'MySQL', 'Active Directory'],
  },
  {
    id: 'EXP-002',
    date: 'Nov 2024 — Aug 2025',
    role: 'Computer Systems Intern',
    org: 'Key Depot · Aguascalientes, Mexico',
    descripcion:
      'Developed and maintained websites with Angular v19 and WordPress, following best practices, and implemented PHP backend features connecting applications to MySQL via phpMyAdmin. Integrated automated bots with N8N and Webhooks to optimize internal processes, verified electronic payments with Openpay BBVA, and provided technical support and continuous improvement for existing systems.',
    tecnologias: ['Angular v19', 'WordPress', 'PHP', 'MySQL', 'N8N', 'Webhooks', 'Openpay BBVA'],
  },
]

export const educationCards = [
  {
    id: 'FORM-001',
    title: 'Computer Systems Engineering',
    org: 'Universidad Autónoma de Aguascalientes',
    period: 'Expected graduation: Dec. 2026',
    status: { type: 'active', label: 'in progress' },
    detalle: 'Aguascalientes, Mexico.',
  },
  {
    id: 'FORM-002',
    title: 'AWS Academy Graduate',
    org: 'Cloud Foundations — Amazon Web Services',
    period: 'May 2026',
    status: { type: 'verified', label: 'earned' },
    link: { href: 'https://www.credly.com/go/Zj2c779G', label: 'View credential ↗' },
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    tags: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C++', 'Kotlin', 'SQL'],
  },
  {
    title: 'Frontend',
    tags: ['React', 'React Native', 'Angular v19', 'HTML', 'CSS', 'Bootstrap', 'Material UI', 'Materialize', 'Bulma'],
  },
  {
    title: 'Backend & data',
    tags: ['Node.js', 'Express', 'REST APIs', 'MySQL', 'SQL Server'],
  },
  {
    title: 'Tools',
    tags: ['GitHub', 'Figma', 'N8N', 'Postman', 'VS Code'],
  },
  {
    title: 'Other',
    tags: ['Webhooks', 'Openpay', 'Basic SEO', 'Active Directory', 'Domain management'],
  },
  {
    title: 'Spoken languages',
    tags: ['Spanish — native', 'English — B1'],
  },
]

// Level 1-3 and "usedIn" are a draft derived from how many real jobs or
// projects reference each technology (see jobs[].tecnologias and
// projects[].stack) — not a self-assessment. Edgar should review and
// adjust these before treating them as final.
export const skillsDetailed = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', level: 3, usedIn: ['GreonTrack', 'Foresight', 'Key Depot'] },
      { name: 'SQL', level: 3, usedIn: ['Foresight', 'Key Depot', 'GreonTrack'] },
      { name: 'TypeScript', level: 2, usedIn: ['GreonTrack'] },
      { name: 'PHP', level: 2, usedIn: ['Key Depot'] },
      { name: 'Java', level: 1, usedIn: [] },
      { name: 'C++', level: 1, usedIn: [] },
      { name: 'Kotlin', level: 1, usedIn: [] },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 3, usedIn: ['Foresight', 'GreonTrack'] },
      { name: 'HTML', level: 3, usedIn: ['Foresight', 'Key Depot', 'GreonTrack'] },
      { name: 'CSS', level: 3, usedIn: ['Foresight', 'Key Depot', 'GreonTrack'] },
      { name: 'React Native', level: 2, usedIn: ['Foresight'] },
      { name: 'Angular v19', level: 2, usedIn: ['Key Depot'] },
      { name: 'Bootstrap', level: 1, usedIn: [] },
      { name: 'Material UI', level: 1, usedIn: [] },
      { name: 'Materialize', level: 1, usedIn: [] },
      { name: 'Bulma', level: 1, usedIn: [] },
    ],
  },
  {
    title: 'Backend & data',
    items: [
      { name: 'Node.js', level: 3, usedIn: ['Foresight', 'GreonTrack'] },
      { name: 'REST APIs', level: 3, usedIn: ['Foresight', 'GreonTrack'] },
      { name: 'MySQL', level: 3, usedIn: ['Foresight', 'Key Depot'] },
      { name: 'Express', level: 2, usedIn: ['GreonTrack'] },
      { name: 'SQL Server', level: 1, usedIn: [] },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'GitHub', level: 3, usedIn: [] },
      { name: 'Figma', level: 2, usedIn: [] },
      { name: 'N8N', level: 2, usedIn: ['Key Depot'] },
      { name: 'Postman', level: 1, usedIn: [] },
      { name: 'VS Code', level: 1, usedIn: [] },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'Active Directory', level: 2, usedIn: ['Foresight'] },
      { name: 'Webhooks', level: 2, usedIn: ['Key Depot'] },
      { name: 'Openpay', level: 2, usedIn: ['Key Depot'] },
      { name: 'Basic SEO', level: 1, usedIn: [] },
      { name: 'Domain management', level: 1, usedIn: [] },
    ],
  },
]

export const hobbies = [
  {
    code: 'TM',
    title: 'Musical theater and dance',
    text: 'Active actor and dancer in a musical theater production: coordinated rehearsals, precise blocking, and relying on everyone doing their part.',
    skill: '→ teamwork · discipline · working under pressure',
  },
  {
    code: 'VJ',
    title: 'Video games',
    text: 'I play with a focus on strategy and skill, actively working on making faster, sharper decisions.',
    skill: '→ analytical thinking · problem-solving',
  },
  {
    code: 'DEP',
    title: 'Basketball, swimming and volleyball',
    text: 'Sports I practice regularly, both individual and team-based, fit around work and school on a set schedule.',
    skill: '→ teamwork · time management',
  },
  {
    code: 'MU',
    title: 'Music',
    text: 'Listening to music is part of how I stay focused during long work or study sessions.',
    skill: '→ focus',
  },
  {
    code: 'TEC',
    title: 'New technology',
    text: 'I like exploring newly released tools, frameworks, and services before they\'re needed on a project.',
    skill: '→ continuous learning · adaptability',
  },
  {
    code: 'SUM',
    title: 'Put together',
    text: 'These habits share a pattern: environments where several people depend on each other, with set timing and a result that shows if something fails.',
    skill: '→ adapting to different environments',
  },
]

export const projects = [
  {
    id: 'PROJ-001',
    title: 'GreonTrack',
    period: '2026',
    tagline: 'Intelligent energy consumption analysis system',
    description:
      'Capstone project made of four connected parts: a web app where the user registers their devices and sees estimated kWh consumption, electrical cost, and carbon footprint; a backend that calculates and serves that data; an agent that runs in the background on the user\'s laptop and automatically reports usage hours; and a network sniffer that scans the local network (ARP, mDNS, SSDP) to automatically suggest connected devices instead of adding them one by one by hand.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Supabase', 'Python'],
    role: 'Full-stack development of all four parts of the system (frontend, backend, agent, and sniffer) and database schema design in Supabase.',
    demoHref: 'https://alexcedeno-dev.github.io/GreonTrack-Frontend/',
    images: [],
    components: [
      {
        name: 'Frontend',
        description:
          'React + TypeScript + Vite web app where the user signs up, logs in, registers their devices, and sees their estimated consumption, electrical cost, and carbon footprint, with savings recommendations. Talks directly to Supabase (Auth + Postgres), with no separate backend for that part.',
        repo: 'https://github.com/AlexCedeno-dev/GreonTrack-Frontend',
      },
      {
        name: 'Backend',
        description:
          'Node.js + Express API that receives, calculates, and serves the energy-consumption data for registered devices, including usage hours logged manually or reported automatically by the Agent.',
        repo: 'https://github.com/AlexCedeno-dev/GreonTrack-Backend',
      },
      {
        name: 'Agent',
        description:
          'Node.js service that runs in the background on the user\'s laptop and periodically reports how long the machine has been on, automating the capture of usage hours instead of requiring the user to log them by hand.',
        repo: 'https://github.com/AlexCedeno-dev/GreonTrack-Agente',
      },
      {
        name: 'Sniffer',
        description:
          'Python script that scans the local network (ARP, mDNS, SSDP) to identify connected devices (phone, laptop, TV, IoT) and uploads suggestions to the user\'s account, instead of adding them one by one by hand.',
        repo: 'https://github.com/AlexCedeno-dev/GreonTrack-Sniffer',
      },
    ],
  },
]

export const contactFields = [
  { label: 'Email', value: 'cedenoalejandro0612@gmail.com', href: 'mailto:cedenoalejandro0612@gmail.com' },
  { label: 'GitHub', value: 'github.com/AlexCedeno-dev', href: 'https://github.com/AlexCedeno-dev', external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/alejandro-cedeño', href: 'https://www.linkedin.com/in/alejandro-cede%C3%B1o-b55660331/', external: true },
  { label: 'Phone', value: '+52 449 168 4651', href: 'tel:+524491684651' },
]
