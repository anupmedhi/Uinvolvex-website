# UinvolveX Digital Design System

## Design position

UinvolveX should feel like an ambitious technology company from Northeast India: sharp, inventive, capable, and slightly unconventional. The signature is controlled intensity—large type, hard color shifts, technical precision, and a single expressive brand mark—balanced by calm content areas.

Avoid “futuristic” decoration that carries no meaning. The interface should still work if every animation is disabled.

## Visual concept

Default concept: **signal / system**.

- Signal: electric blue, decisive type, responsive interaction, the luminous X.
- System: strong grid, repeated alignment, measurable spacing, restrained supporting text.
- Tension: one irregular or oversized composition inside an otherwise rational layout.

Use no more than two signature devices per page. Recommended combination:

1. A large X brand symbol cropped confidently at a viewport edge.
2. A blue “signal rail” or precise line system that connects key content.

## Color

Core tokens:

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#07101F` | Primary dark field and text |
| Midnight | `#0B1E4D` | Secondary dark surface |
| Signal blue | `#245DFF` | Primary action and brand energy |
| Deep blue | `#17378F` | Supporting brand surface |
| Ice | `#EAF0FF` | Quiet blue-tinted field |
| White | `#FFFFFF` | Primary light field |
| Muted | `#7E8CA8` | Secondary copy on dark |
| Line dark | `rgba(255,255,255,.16)` | Dividers on dark |
| Line light | `rgba(7,16,31,.16)` | Dividers on light |

Keep most sections monochromatic. Transition between white, ink, and signal blue with hard boundaries. Reserve Signal blue for one dominant moment per viewport.

Do not add unrelated accent colors unless a product has its own established identity.

## Typography

Use Manrope for display and body. Use DM Mono sparingly for functional metadata such as live status, version, or code—not decorative eyebrows.

Display rules:

- Desktop hero: `clamp(4.75rem, 9vw, 10rem)`.
- Section heading: `clamp(3rem, 5.5vw, 6rem)`.
- Mobile hero: 3.6–4.5rem depending on word length.
- Tight display tracking between `-.05em` and `-.08em`.
- Body line length: 45–70 characters.
- Body line height: 1.55–1.75.

Use sentence case. Avoid decorative outlines, multiple serif swaps, and full-uppercase headings. One short mono utility line per major view is enough.

## Layout and spacing

Use a 12-column desktop grid and a 4-column mobile grid.

- Desktop outer margin: 4–5vw.
- Mobile outer margin: 20px.
- Major section padding: 112–160px desktop; 72–96px mobile.
- Base spacing unit: 8px.
- Content should align across section boundaries even when backgrounds change.

Use asymmetry through span and placement, not arbitrary offsets. At least one edge of every major object must align to the grid.

## Hero composition

The hero should communicate company type, point of view, and next action within the first viewport.

- Use one direct headline with no startup cliché.
- Place the X as a large spatial object, not a logo repeated beside the wordmark.
- Add a compact functional rail containing location, focus, or project count only if the information is real.
- Use at most two calls to action.
- Avoid auto-scrolling text immediately after the hero.

## Project presentation

Treat products as editorial case-study entries, not generic portfolio cards.

- Use a large typographic product field or an actual screenshot when available.
- Give the name, product type, and one factual description.
- Vary scale between featured and secondary products while retaining the same internal anatomy.
- Do not invent launch dates, users, status, or outcomes.
- Do not use arbitrary monograms, rings, or numbered corners as artwork.

## Components

### Navigation

- Keep the wordmark legible on a calm surface.
- Use 3–4 destinations.
- Give the primary contact action a clear rectangular treatment; avoid pill buttons.
- On mobile, use a full-height menu with large touch targets and a visible close state.

### Buttons

- Minimum target height: 44px.
- Default shape: rectangular with no more than 6px radius.
- Use solid Signal blue for the primary action.
- Use a border or text treatment for secondary actions.
- Keep labels action-specific.

### Content surfaces

- Prefer borders and spacing over shadows.
- Use corners from 0–8px; do not mix many radii.
- Avoid glass effects.
- On dense dark areas, use subtle blue-black surface steps instead of opacity-heavy cards.

## Motion

Motion should reveal system behavior:

- Header state transition: 180–240ms.
- Hover/focus feedback: 140–200ms.
- Section entrance: optional, 300–500ms, small distance and low frequency.
- X symbol: one subtle perspective or parallax response is acceptable.

Never animate body copy continuously. Avoid marquee loops, pulsing dots, orbiting graphics, and ambient particles. Disable nonessential motion under `prefers-reduced-motion`.

## Responsive behavior

- Recompose, do not only shrink.
- Keep hero copy above the X on narrow screens; allow the X to crop at the right or bottom edge.
- Preserve 44px touch targets.
- Prevent display words from clipping unless the crop is clearly intentional and still legible.
- Collapse multi-column project metadata into a readable single-column order.
- Test at 390×844 and a typical 1280px desktop.

## Accessibility

- Meet WCAG AA contrast for text and controls.
- Maintain logical heading order.
- Provide semantic sections and descriptive link names.
- Do not communicate status by color alone.
- Make focus outlines visible on light, dark, and blue fields.
- Hide decorative artwork from assistive technology.

## Authorship test

Before shipping, ask:

1. Does the page still look specifically UinvolveX with the logo removed?
2. Is every small label communicating real information?
3. Is there one recognizable visual idea rather than ten effects?
4. Could any copy have come from a generic AI startup template?
5. Does mobile preserve the same attitude and hierarchy?

If an element fails these questions, revise or remove it.
