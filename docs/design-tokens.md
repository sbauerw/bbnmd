# DESIGN TOKENS — Birgit Bauer Wöhlers Website

## PURPOSE

Defines the visual foundation of the system.

Agents must reuse these tokens instead of inventing new values.

---

## COLORS

:root {
  --bg-primary: #F9F7F4;
  --bg-secondary: #F2EFE9;
  --bg-dark: #1A1916;

  --text-primary: #1C1A18;
  --text-secondary: #6B6560;
  --text-on-dark: #F4F1EB;

  --accent-gold: #B8965A;
  --border-subtle: #E5E1DA;
}

RULES:

- Do not introduce new colors
- Gold is accent only (very rare use)
- Prefer neutral tones

---

## TYPOGRAPHY

### Fonts

- Serif: Cormorant Garamond
- Sans: Inter

---

### Scale

Hero Name:
clamp(3.5rem, 8vw, 7rem)

Section Headings:
clamp(1.8rem, 4vw, 3rem)

Body:
clamp(1rem, 1.5vw, 1.125rem)

Labels:
0.75rem uppercase with letter spacing

---

### Rules

- Maintain hierarchy
- Do not compress line height
- Do not introduce new font families
- Avoid overly bold weights

---

## SPACING

### Container

max-width: 1100px  
padding: 0 clamp(24px, 5vw, 80px)

### Narrow Text

max-width: 640px

---

### Section Spacing

Primary:
clamp(80px, 12vw, 140px)

Secondary:
~10% less than primary

---

### Rules

- Spacing = quality signal
- Do not reduce spacing arbitrarily
- Maintain vertical rhythm

---

## BUTTONS

Style:

- outlined
- uppercase
- letter spaced

Hover:

- simple inversion only

Avoid:

- gradients
- shadows
- animations

---

## BORDERS / DIVIDERS

- use subtle lines only
- avoid full-width heavy rules
- prefer short dividers (~40px)

---

## MOTION

Allowed:

- fade
- translateY

Duration:
~0.6s – 0.8s

Forbidden:

- bounce
- scale
- parallax

---

## SELECTION

Optional:
::selection {
  background: rgba(184, 150, 90, 0.2);
}
