---
name: uinvolvex-tech-ui
description: Design and refine UinvolveX websites and product interfaces with a bold experimental technology aesthetic grounded in the company’s blue/navy identity. Use for React pages, landing pages, portfolio sections, responsive UI, visual refreshes, design-system work, or reviews where the result must feel futuristic and distinctive without becoming an inaccessible AI-generated template.
---

# UinvolveX Tech UI

Create high-energy technology interfaces with disciplined hierarchy, spacing, contrast, and interaction design. Make the work feel authored: choose one strong visual concept and carry it consistently instead of stacking fashionable effects.

## Workflow

1. Inspect the existing interface, content, responsive behavior, and brand assets.
2. Read [references/design-system.md](references/design-system.md) before choosing layout, color, type, graphics, or motion.
3. State the visual concept in one sentence. Reject concepts that could describe any startup.
4. Build the structural hierarchy before adding decoration.
5. Add at most two signature visual devices and reuse them coherently.
6. Test desktop and mobile layouts, keyboard navigation, reduced motion, contrast, overflow, and console errors.
7. Remove any element that exists only to imply “technology.”

## Brand assets

Use the supplied files from `assets/` rather than redrawing the UinvolveX identity:

- `uinvolvex-logo.png`: primary wordmark; place on a compatible light surface.
- `x-icon.png`: expressive large-format brand symbol.
- `x-favicon.png`: compact browser/app icon.

Preserve proportions. Do not recolor, stretch, crop through the mark, or place the wordmark on a noisy surface.

## Required qualities

- Use electric blue and deep navy as the dominant identity.
- Make typography and layout create most of the energy.
- Keep copy direct, specific, and factual.
- Give each section a clear job and each interaction an obvious outcome.
- Use asymmetry intentionally while preserving reading order.
- Keep mobile composition designed, not merely stacked.
- Prefer CSS-native graphics and restrained motion over generic stock imagery.

## Prohibited patterns

- Endless marquees, discipline tickers, or decorative label strips.
- Repeated micro-labels, faux coordinates, fake metrics, or arbitrary numbering.
- Concentric circles, glowing orbs, random stars, and grids used as filler.
- Excessive pills, gradients, glass cards, outlined headings, and floating badges.
- Manifesto copy such as “ideas engineered,” “make it real,” or “where innovation meets.”
- Every section using a different visual trick.
- Animation without informational or navigational purpose.

## Delivery standard

Run the project’s build and lint commands. Visually inspect at a desktop viewport and at least one 390px-class mobile viewport. Fix horizontal overflow and clipped display type. Keep a visible focus state and support `prefers-reduced-motion`.
