# Edgar Alejandro Cedeño Suárez | CV / Portafolio

CV virtual y portafolio profesional multipágina, construido con **React + Vite** y navegación con **React Router** (`HashRouter`). Disponible en inglés (por defecto) y español, con un panel de accesibilidad. Pensado para desplegarse en GitHub Pages vía GitHub Actions.

**Sitio publicado:** https://alexcedeno-dev.github.io/Alex-Cede-o-CV/

## Páginas

El sitio ya no es de una sola página: cada área tiene su propia ruta. Se usa `HashRouter` (las URLs llevan `#/`, por ejemplo `.../Alex-Cede-o-CV/#/proyectos`) porque GitHub Pages sirve archivos estáticos sin reescritura de rutas; con hash, recargar o compartir un enlace directo siempre resuelve a `index.html`.

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | Home | Presentación (Hero con foto y ficha de datos) y accesos a las demás páginas, además de la descarga del CV en PDF (ES/EN). |
| `/cv` | CV | El CV completo: sobre mí, experiencia, formación, skills, hobbies y contacto (formulario con Formspree). |
| `/proyectos` | Proyectos | Ficha detallada de cada proyecto (actualmente GreonTrack): descripción, stack, rol, demo y repositorio de cada componente. Por ahora muestra el aviso "Trabajando en ello" mientras se preparan las capturas. |
| `/skills` | Skills | Habilidades agrupadas por categoría, con nivel de dominio, dónde se usaron e idiomas. |

Cualquier otra ruta redirige a `/`.

## Stack

- [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) (componentes JSX, sin TypeScript)
- [React Router 7](https://reactrouter.com/) (`react-router-dom`) con `HashRouter`
- [Framer Motion](https://motion.dev/) para las animaciones (scroll reveal, acordeón de experiencia, hover states), respeta `prefers-reduced-motion`
- CSS puro (variables CSS, grid, flexbox, sin preprocesadores ni Tailwind)
- Contenido bilingüe (ES/EN) y panel de accesibilidad, ambos con contexto de React
- Formulario de contacto conectado a [Formspree](https://formspree.io/)
- Tipografías: [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos), [Inter](https://fonts.google.com/specimen/Inter) (cuerpo) y [Fragment Mono](https://fonts.google.com/specimen/Fragment+Mono) (datos/referencias) vía Google Fonts

## Estructura

```
index.html              → entry point de Vite
public/
  cv/                    → CV en PDF (ES y EN) para descarga
  media/                 → imágenes (avatar, etc.)
src/
  main.jsx               → bootstrap de React (proveedores + HashRouter)
  App.jsx                → rutas y layout (Nav, páginas, panel de accesibilidad)
  index.css               → sistema de diseño (paleta, tipografía, layout)
  motion.js               → curvas de easing y variantes de Framer Motion compartidas
  pages/
    Home.jsx, Cv.jsx, Proyectos.jsx, SkillsDetail.jsx → una por ruta
  data/
    content.es.js, content.en.js → todo el contenido real por idioma (perfil, experiencia, skills, proyectos)
    shared.js, useContent.js     → datos comunes y hook que elige el idioma activo
  i18n/
    strings.js, LanguageContext.jsx → textos de la interfaz y cambio de idioma
  a11y/
    AccessibilityContext.jsx       → preferencias de accesibilidad
  components/
    Nav.jsx, Hero.jsx, Ledger.jsx, About.jsx, Experiencia.jsx,
    Formacion.jsx, Skills.jsx, Hobbies.jsx, Contacto.jsx (incluye el footer)
    AccessibilityPanel.jsx, PageHeader.jsx
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
