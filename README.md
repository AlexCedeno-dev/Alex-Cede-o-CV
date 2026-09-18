# Edgar Alejandro Cedeño Suárez — CV / Portafolio

CV virtual y portafolio profesional de una sola página (single-page), construido con **React + Vite**. Pensado para desplegarse en GitHub Pages vía GitHub Actions.

**Sitio publicado:** https://alexcedeno-dev.github.io/Alex-Cede-o-CV/

## Stack

- [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) (componentes JSX, sin TypeScript)
- [Framer Motion](https://motion.dev/) para las animaciones (scroll reveal, acordeón de experiencia, hover states) — respeta `prefers-reduced-motion`
- CSS puro (variables CSS, grid, flexbox, sin preprocesadores ni Tailwind)
- Formulario de contacto conectado a [Formspree](https://formspree.io/)
- Tipografías: [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos), [Inter](https://fonts.google.com/specimen/Inter) (cuerpo) y [Fragment Mono](https://fonts.google.com/specimen/Fragment+Mono) (datos/referencias) vía Google Fonts

## Estructura

```
index.html              → entry point de Vite
src/
  main.jsx               → bootstrap de React
  App.jsx                → ensambla las secciones de la página
  index.css               → sistema de diseño (paleta, tipografía, layout)
  motion.js               → curvas de easing y variantes de Framer Motion compartidas
  data/content.js          → todo el contenido real (perfil, experiencia, skills, etc.)
  components/
    Nav.jsx, Hero.jsx, Ledger.jsx, About.jsx, Experiencia.jsx,
    Formacion.jsx, Skills.jsx, Hobbies.jsx, Contacto.jsx (incluye el footer)
    SectionHeading.jsx, Button.jsx, Reveal.jsx → piezas de UI reutilizables
```

## Cómo correrlo localmente

Requiere Node.js 20+.

```bash
npm install
npm run dev       # servidor de desarrollo con recarga en caliente
npm run build     # build de producción a dist/
npm run preview   # sirve el build de dist/ localmente
```

## Despliegue

El despliegue es automático vía GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): cada push a `main` instala dependencias, corre `npm run build` y publica el contenido de `dist/` en la rama `gh-pages`, que es la que sirve GitHub Pages. El sitio se sirve bajo `/Alex-Cede-o-CV/` (configurado en `vite.config.js`), no en la raíz del dominio.

Ver [PLAN.md](PLAN.md) para el plan de trabajo por fases.
