# Edgar Alejandro Cedeño Suárez — CV / Portafolio

CV virtual y portafolio profesional de una sola página (single-page), construido en HTML, CSS y JavaScript puro, sin frameworks ni herramientas de build. Pensado para desplegarse directamente en GitHub Pages.

**Sitio publicado:** https://alexcedeno-dev.github.io/Alex-Cede-o-CV/

## Stack

- HTML5 semántico
- CSS puro (variables CSS, grid, flexbox, sin preprocesadores)
- JavaScript vanilla (sin dependencias ni build step)
- Tipografías: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter) y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) vía Google Fonts

## Estructura

```
index.html    → estructura y contenido
styles.css    → sistema de diseño (paleta, tipografía, layout)
script.js     → secuencia de terminal en el hero + scroll reveal + menú mobile
```

## Cómo correrlo localmente

No requiere instalación de dependencias. Opciones:

1. **Abrir directo:** doble clic en `index.html` (funciona sin servidor, aunque algunos navegadores restringen ciertas funciones al abrir vía `file://`).
2. **Servidor estático simple:**
   ```bash
   npx serve .
   ```
   o con Python:
   ```bash
   python -m http.server 5173
   ```
   y abrir `http://localhost:5173`.

## Despliegue

El sitio se publica automáticamente desde la rama `main` (raíz del repo) vía GitHub Pages. Cualquier cambio en `main` se refleja en producción en unos minutos tras el push.

Ver [PLAN.md](PLAN.md) para el plan de trabajo por fases.
