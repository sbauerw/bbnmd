# MEMORY — Birgit Bauer Wöhlers Website

## PURPOSE

This file stores the current implementation memory for the repository.

It is not a full changelog.
It is a concise record of decisions, active architecture, and important constraints that future agents must preserve.

---

## CURRENT STATE

- The live site is the current source of truth
- The project uses the approved copy currently in production
- The site follows a private advisory positioning
- The CTA system is centered around a single action: Request Access
- Inquiry flow is handled through a modal, not an inline page form
- Form submissions use Formspree (endpoint: `https://formspree.io/f/maqlogbb`)
- Form success is shown only on a confirmed OK response; network errors and non-OK responses show an inline error message
- Double submission is blocked while loading
- Docs in `/docs` must be kept aligned with implementation
- Root-level `index.html` and `assets/` folder have been removed; `public/assets/images/` is the single canonical asset path

---

## CURRENT UX RULES

- All Request Access triggers should behave consistently
- The modal is the only inquiry entry point
- The site should feel editorial, minimal, calm, and premium
- Typography and spacing drive the visual hierarchy
- New UI patterns should not be introduced casually

---

## CURRENT ARCHITECTURE NOTES

- Keep one clear production architecture
- Avoid duplicate assets and legacy files
- Use a single canonical static asset path where possible
- Reuse existing patterns before creating new ones

---

## DOCUMENTATION MAINTENANCE RULE

After each meaningful PR, update this file if the implementation changed:

- architecture
- UX behavior
- component behavior
- form flow
- assets
- design system
- important constraints

If none changed, leave this file unchanged.
