# AGENT SYSTEM — Birgit Bauer Wöhlers Website

## PURPOSE

This file is the primary instruction layer for any coding agent working in this repository.

Applies to:

- Claude Code
- Gemini-based coding agents
- Codex
- any other implementation agent

Before making changes, read these files:

1. `/docs/context.md`
2. `/docs/design-tokens.md`
3. `/docs/component-rules.md`
4. `/docs/memory.md`

If any of those files conflict, priority order is:

1. `agent.md`
2. `context.md`
3. `component-rules.md`
4. `design-tokens.md`
5. `memory.md`

---

## OPERATING RULES

- Do not change approved copy unless explicitly requested
- Do not introduce new UX patterns unless explicitly requested
- Do not break the single CTA system
- Do not create parallel implementations
- Do not leave outdated docs after implementation

---

## REQUIRED POST-PR DOCUMENTATION STEP

After every successful PR or meaningful implementation, review whether any files in `/docs` must be updated.

You MUST update:

- `/docs/memory.md` for any implementation that changes architecture, components, UX behavior, assets, dependencies, or workflow
- any other affected docs if the implementation changes the system they describe

Examples:

- If CTA behavior changes, update `component-rules.md`
- If colors, spacing, or typography change, update `design-tokens.md`
- If brand, structure, or UX intent changes, update `context.md`
- If operating instructions need refinement, update `agent.md`

If no documentation update is needed, explicitly verify that the docs remain accurate.

---

## MEMORY RULE

`/docs/memory.md` is the rolling implementation memory for the repo.

It should capture:

- what changed
- why it changed
- what is now considered the current source of truth
- any constraints future agents must preserve
- open issues or follow-up items, if relevant

Keep memory concise, factual, and current.
Do not turn it into a changelog of every tiny edit.
Only record meaningful decisions and implemented outcomes.

---

## GOLDEN RULE

Implementation is not complete until the code and the `/docs` files are aligned.
