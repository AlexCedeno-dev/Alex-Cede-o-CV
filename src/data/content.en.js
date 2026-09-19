export const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#education', label: 'education' },
  { href: '#skills', label: 'skills' },
  { href: '#hobbies', label: 'hobbies' },
  { href: '#contact', label: 'contact' },
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

export const contactFields = [
  { label: 'Email', value: 'cedenoalejandro0612@gmail.com', href: 'mailto:cedenoalejandro0612@gmail.com' },
  { label: 'GitHub', value: 'github.com/AlexCedeno-dev', href: 'https://github.com/AlexCedeno-dev', external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/alejandro-cedeño', href: 'https://www.linkedin.com/in/alejandro-cede%C3%B1o-b55660331/', external: true },
  { label: 'Phone', value: '+52 449 168 4651', href: 'tel:+524491684651' },
]
