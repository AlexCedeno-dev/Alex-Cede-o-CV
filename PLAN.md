# Plan de trabajo — CV / Portafolio

## Fase 1 — Deploy inicial ✅

- Archivos (`index.html`, `styles.css`, `script.js`) incorporados a la raíz de `main`.
- GitHub Pages configurado para servir desde `main` / `root`.
- README.md agregado.
- Menú hamburguesa mobile agregado (ver "Hallazgos de la revisión técnica" abajo).

### Hallazgos de la revisión técnica

- **Nav en mobile (resuelto):** en viewports < 640px, `.navlinks` se ocultaba con `display:none` sin ninguna alternativa para acceder a esos links. Se agregó un botón hamburguesa (`#navToggle`) que despliega un panel con los mismos estilos del sistema de diseño (panel oscuro, fuente mono, bordes sutiles). No se modificó paleta, tipografía ni layout existente — es una adición funcional.
- **Contraste de `--text-dimmer` (pendiente de decisión):** el color `#4C5A73` sobre el fondo `#0B0F17` da un contraste de ~2.75:1, por debajo del mínimo WCAG AA (4.5:1) para texto normal. Se usa en `.job-date`, `.foot-meta` y las etiquetas de `.skill-group h4`. **No se tocó** porque es parte del sistema de diseño aprobado — queda documentado aquí para que se decida si se ajusta más adelante.
- **Performance:** se agregó `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` (faltaba junto al preconnect de `fonts.googleapis.com`) para acelerar la carga de las fuentes. El resto de la carga de fuentes ya usa `display=swap` y un set de pesos acotado (10 archivos de fuente en total); no se detectaron otros problemas de render-blocking ni archivos pesados.
- **HTML semántico:** correcto — usa `<nav>`, `<header>`, `<section>` con `id`s, `<footer>`, jerarquía de encabezados `h1`→`h2`→`h3`/`h4` consistente.
- **Accesibilidad:** navegación por teclado funciona (focus-visible ya está definido globalmente); el nuevo botón hamburguesa incluye `aria-label`, `aria-expanded` y `aria-controls`, se cierra con `Escape` y devuelve el foco al botón. No hay imágenes todavía (el avatar es un placeholder de texto), así que no hay `alt` pendiente en esta fase — se revisará en la Fase 2 al insertar la foto real.
- **Mobile real:** se verificó el layout y el nuevo menú en un viewport de 375×812 (iPhone estándar) vía herramientas de preview; no se detectaron overflows ni elementos cortados. Nota: esta verificación fue en un emulador de viewport, no en un dispositivo físico — si detectas algo raro en tu celular real, avísame.

## Fase 2 — Foto real ✅

- Placeholder `#avatarSlot` reemplazado por `<img>` con `alt="Retrato de Edgar Alejandro Cedeño Suárez"`.
- Imagen optimizada: redimensionada de 906×1600 a 720px de ancho y comprimida (JPEG progresivo, calidad 75) — de 214KB a ~122KB.
- `.avatar` ajustado a `object-fit:cover` con recorte cuadrado centrado en el rostro (`object-position: center 20%`), manteniendo borde y radius del sistema de diseño.
- Nota técnica: se quitaron los atributos `width`/`height` del `<img>` porque, dentro del grid de `.about-grid`, entraban en conflicto con `aspect-ratio:1` del CSS y forzaban la altura natural de la imagen (no cuadrada). El `aspect-ratio` del CSS ya reserva el espacio y evita layout shift, así que no hacían falta.

## Fase 3 — Sección de proyectos (pendiente)

- Nueva sección entre "Educación" y "Skills" (o donde tenga más sentido narrativamente — a confirmar).
- Cards estilo terminal siguiendo el sistema de diseño existente, con: nombre, descripción corta, stack usado, link a repo/demo si existe.
- Badges de estado: "en producción" / "proyecto escolar" / "en desarrollo".
- **No se inventará contenido** — se espera que el usuario proporcione los proyectos reales antes de escribir el HTML.

## Fase 4 — SEO básico (pendiente)

- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- Favicon.
- `sitemap.xml` si aplica (para un sitio de una sola página puede no ser necesario — a evaluar).

## Fase 5 — Analítica opcional (pendiente)

- Evaluar una opción ligera y respetuosa de la privacidad (p. ej. Plausible) **solo con aprobación previa** — no se agregará ningún servicio de terceros sin confirmación explícita.
