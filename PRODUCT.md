# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters and hiring managers evaluating Edgar Alejandro Cedeño Suárez for junior/entry-level full-stack developer roles, both Mexican employers (Aguascalientes region, on-site/hybrid) and international/remote employers, weighted equally — no single audience takes priority over the other. They are scanning quickly to decide whether to reach out, not reading deeply on a first pass.

## Product Purpose

A personal portfolio/CV site presenting Edgar as a hireable software engineering student. Success means a recruiter forms a credible impression fast and takes a contact action (email, LinkedIn, GitHub, call).

## Positioning

The confirmed differentiator: Edgar moves fast across many stacks and picks up new ones on demand (React, React Native, Angular v19, PHP, Node.js, Kotlin, MySQL/SQL Server, N8N/Webhooks, Active Directory) rather than being deep in one narrow toolchain. This breadth-and-speed-of-adoption is the mechanism the design should carry, not just state.

Secondary, supporting truths (already present in copy, not to be dropped): he already operates in real enterprise systems (Active Directory, inventory/traceability, internal ops tooling) rather than only tutorial projects, and his non-coding activities (musical theater, team sports) are framed as genuine sources of the same coordination/discipline skills he applies at work.

## Operating Context

- Bilingual-adjacent audience: site copy is in Spanish; user's English is B1, relevant for international readers who may skim via translation.
- Site is a single static page (`index.html`, `styles.css`, `script.js`), no build step, deployed as a personal site/CV.
- Content is organized as fixed sections in this order: hero → sobre mí → experiencia → educación → skills → hobbies → contacto. This structure is confirmed working and must be preserved by design work unless the user asks otherwise.

## Capabilities and Constraints

- Static HTML/CSS/JS only — no framework, no build pipeline. Any redesign must stay deployable the same way.
- Real content only: work history at Foresight and Key Depot, AWS Academy credential, real contact channels (email, LinkedIn, GitHub, phone). No fabricated projects, screenshots, or testimonials exist to show — the site is text/credential-based, not a visual project gallery.
- Accessibility work already in place (focus-visible states, `prefers-reduced-motion` handling, semantic nav with aria-expanded) is a constraint to preserve, not rebuild.

## Brand Commitments

None confirmed yet beyond the person's real name, role, and existing contact identities (GitHub `AlexCedeno-dev`, LinkedIn, email, phone). No pinned visual identity — the current terminal-hacker/cyan-on-navy look is incumbent implementation, not a brand commitment, and is explicitly open to replacement.

## Evidence on Hand

- Real work history bullets for two roles (Foresight, Key Depot), one earned credential (AWS Academy Graduate, verifiable via Credly), real skill list, real hobbies with stated work-relevance.
- No project screenshots, demos, or case studies exist to show; absence is intentional (internal/proprietary work), not a gap to fabricate.

## Product Principles

1. Speed-of-adoption across stacks is the story the surface must make legible at a glance, not just list.
2. Copy, section order, and accessibility behavior already work — visual replacement changes the surface's world, not its truths or structure.
3. Design must read equally credibly to a Mexican on-site recruiter and an international remote-hiring skim-reader — no locale-specific in-joke that only one audience gets.
4. No invented projects, metrics, or claims; the honest absence of a project gallery is real and stays real.

## Accessibility & Inclusion

Existing keyboard focus, reduced-motion, and semantic-nav behavior (see `styles.css`, `script.js`) is a confirmed requirement to preserve through any visual change, not merely nice-to-have.
