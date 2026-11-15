# Design

<!-- impeccable:design-schema 1 -->

## World

"Bitácora de turno", a technician's shift log / operations ledger, not a developer terminal. Alejandro is read as someone who shows up, diagnoses whatever system is in front of him, and leaves a signed record, the visual carrier for "moves fast across many stacks."

Replaces the previous terminal-hacker / cyan-on-navy / Space Grotesk + JetBrains Mono identity in full (see git history prior to this change for the old system). No part of the old world was kept as a brand commitment.

## Palette

Warm aged-paper ledger, light by default (the previous site was dark by category habit, not by scene, a ledger reads on paper).

| Token | Value | Role |
|---|---|---|
| `--paper` | `#F1EAD9` | page ground |
| `--paper-alt` | `#E7DDC5` | elevated panels: cards, ledger, hobby cards |
| `--paper-deep` | `#DCCFA9` | strongest surface: ledger header bar |
| `--border` | `#C3B48C` | hairlines, ruled edges |
| `--ink` | `#211D16` | primary text |
| `--ink-dim` | `#5C5340` | secondary text/labels (6.3:1 on paper) |
| `--ink-dimmer` | `#8A7E64` | decorative-only (non-text), e.g. the job bullet mark, never used for text |
| `--stamp` | `#943E17` | primary action + "active" stamp ink (5.9:1 on paper) |
| `--verified` | `#3F5F42` | "verified/obtained" stamp ink (6:1 on paper) |

All text-color/background pairs were checked against WCAG AA (4.5:1 body, 3:1 large text/non-text UI) at implementation time; recheck if either surface color changes.

## Type

- Single typeface: **Source Serif 4** for everything (headings, body, nav, buttons, dates, ledger values, tags). Hierarchy comes from weight and size, not from a second or third family.

## Motion

- One motion language, taken from the Hero buttons: on hover or keyboard focus the element rises (`-1px, -2px`) and casts a hard offset shadow (`3px 4px`) with `cubic-bezier(0.23, 1, 0.32, 1)` (220ms in, 140ms out); on press it sinks to `scale(0.97)` (100ms).
- Cards (`.card-fx`) use the same curve and timings at half intensity (`--fx-card-k: 0.5`), plus an accent top rule drawn with `scaleX` and a 1.5° turn of the seal. Text links (`.fx-link`) rise at half intensity without shadow; segmented controls (`.fx-flat`) only change color and press.
- Source of truth: `fx` in `src/motion.js` (used by `Button.jsx`, published as `--fx-*` CSS variables). Only `transform`/`opacity` are animated.
- Hover applies only with a fine pointer; keyboard focus (`:focus-visible` / `:focus-within`) gets the same treatment. With `prefers-reduced-motion` there is no movement or scale, only an instant border/background color change.

## Motifs

- **Stamp** (`.stamp`): rectangular, bordered, `currentColor` text, slight `-1.2deg` rotation. Used for status/credential marks (`en curso`, `obtenida`, `disponible`). Lands with a `stampIn` scale+rotate keyframe (respects `prefers-reduced-motion`).
- **Ledger panel** (`.ledger`, replaces the old `.terminal`): a document header (reference + year) over a body that fills in field/value rows one at a time, ending with the status stamp landing: same reveal timing as the old terminal boot sequence, new vocabulary.
- No kickers/eyebrows above headings (removed per craft-floor ban), section headings carry their own weight.
- No emoji or Unicode glyphs standing in for icons: hobby entries use short mono classification codes (`TM`, `VJ`, `DEP`, `MU`, `TEC`, `SUM`) instead of emoji; list bullets are a small drawn square, not a Unicode arrow.
- Background texture is a very faint ruled-paper line pattern (`repeating-linear-gradient`, 35px rhythm), justified by the ledger-paper world, not decoration for its own sake.

## Preserved from the previous system

Section order and content, accessibility behavior (`:focus-visible`, `prefers-reduced-motion` handling, semantic nav with `aria-expanded`), scroll-reveal mechanism, and the static HTML/CSS/JS-only stack.

## Open/undecided

- No image-generation-based comp was produced for this round (environment had no confirmed image tool); the direction was committed and built code-led, verified by manual WCAG contrast checks and a source read-through rather than a rendered comp diff.
- No live browser screenshot pass was run in this session, verify at the next real edit or ask for one explicitly if a visual regression is suspected.
