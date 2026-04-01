# CONTEXT — Birgit Bauer Wöhlers Landing Page

## PURPOSE

This document defines the non-negotiable rules, design principles, and architectural decisions for this project.

Any implementation, refactor, or PR must respect this context to avoid breaking positioning, UX quality, or system integrity.

This is a premium private advisory website — not a generic landing page.

---

## 1. BRAND POSITIONING (DO NOT BREAK)

Birgit Bauer Wöhlers is positioned as:

**A strategic architect of wellness, longevity, and human development systems.**

This is NOT:

- a wellness influencer brand
- a coaching business
- a clinic website
- a biohacking product page
- a SaaS-style landing page

This IS:

- a private advisory
- a high-level strategic consultancy
- a curated, selective access experience

---

## 2. CORE EXPERIENCE PRINCIPLE

The site must feel like:

> **private access to a high-level advisory**

NOT:

- a public funnel
- a “book a call” flow
- a lead generation form

---

## 3. COPY RULES (CRITICAL)

- The current copy is APPROVED and must NOT be changed unless explicitly requested
- Do not rewrite, optimize, or “improve” wording
- Do not introduce marketing language or fluff
- Do not add explanations or extra sections

If unsure → preserve existing copy

---

## 4. CTA SYSTEM (STRICT)

Single CTA concept across the entire site:

**“Request Access”**

Rules:

- All CTA buttons must trigger the SAME behavior
- No alternative CTAs like “Submit”, “Book”, “Get Started”
- No scroll-to-form behavior
- No inline form in the page

---

## 5. MODAL ACCESS MODEL (CORE UX)

The inquiry flow MUST follow:

1. User clicks “Request Access”
2. Modal overlay opens
3. Form is inside modal
4. Submission handled inline
5. Success state shown inside modal

Never:

- redirect to another page
- reveal a form section on scroll
- expose form as part of main layout

---

## 6. FORM SYSTEM

Backend:

- Uses Formspree (HTML form POST)

Rules:

- Do not replace with custom backend unless explicitly requested
- Do not break existing endpoint without replacing it properly
- All fields must have `name` attributes
- Submission must be reliable and tested

UX:

- clean, minimal, premium
- no default browser ugliness
- include success + error states

---

## 7. DESIGN PRINCIPLES

### 7.1 General

- Minimal
- Editorial
- Calm
- Refined
- High-trust

The design must rely on:

- typography
- spacing
- composition

NOT:

- decoration
- effects
- visual noise

---

### 7.2 Things to AVOID

- SaaS UI patterns (cards, dashboards, feature grids)
- heavy shadows
- gradients that feel “startup”
- excessive borders
- icon clutter
- stock wellness imagery
- “luxury clichés”

---

### 7.3 Typography First

- Typography is the primary design tool
- Maintain strong hierarchy
- Preserve readability and spacing
- Do not compress line height or spacing to “fit more”

---

### 7.4 Spacing = Quality

- Generous vertical spacing is intentional
- Do not reduce spacing to make things “tighter”
- Each section must breathe

---

## 8. VISUAL SYSTEM

Images:

- Must feel editorial, minimal, and intentional
- Must NOT feel like stock content
- Must NOT dominate layout

Rules:

- Maximum one visual moment per section
- No galleries
- No sliders
- No carousels
- No lightboxes

If unsure → remove image instead of adding one

---

## 9. SECTION STRUCTURE (DO NOT ALTER)

Order:

1. Hero  
2. What I Do  
3. Who I Work With  
4. How I Work  
5. About  
6. Access  

Rules:

- Do not add new sections without approval
- Do not reorder sections
- Do not insert marketing blocks (testimonials, stats, etc.)

---

## 10. NAVIGATION

- Minimal, stable, always visible
- No complex interactions
- No disappearing nav patterns
- Subtle behavior only

---

## 11. MOTION

Allowed:

- fade
- subtle translate

Not allowed:

- bounce
- scale effects
- parallax
- flashy transitions

Motion must feel:

- calm
- invisible
- supportive

---

## 12. CODE / ARCHITECTURE

- Keep code clean and intentional
- Avoid duplication
- Avoid parallel systems (no multiple versions of same logic)
- Remove dead code
- Maintain clear structure

Assets:

- Single source of truth
- No duplicated image folders

---

## 13. CONSISTENCY RULE

Before merging any PR:

Check:

- Does this match the rest of the system?
- Does this introduce a new pattern?
- Does this break visual or UX consistency?

If yes → revise

---

## 14. FINAL QUALITY CHECK

Before any PR is accepted, ask:

Does this feel like:

- a private advisory
- a curated experience
- a high-trust environment

Or does it feel like:

- a landing page
- a product site
- a startup

If it leans toward the second → it must be refined

---

## 15. GOLDEN RULE

When in doubt:

> **Remove instead of adding.  
Simplify instead of decorating.  
Refine instead of expanding.**
