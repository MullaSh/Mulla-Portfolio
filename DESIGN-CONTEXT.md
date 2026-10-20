# DESIGN CONTEXT: Mulla Shadra Portfolio

> Design decisions for the portfolio. Safe to keep in the public repo.
> **Status:** final for v1 · **Last updated:** 20 October 2026

---

## 1. Reference

- **Source:** Dribbble shot "David Personal Website Portfolio": https://dribbble.com/shots/23617179-David-Personal-Website-Portfolio
- **How we use it:** inspiration only. We keep the layout logic, spacing and the bold black-and-white mood, and rebuild everything with Mulla's own content and a QA identity.

## 2. Direction

- **Keywords:** clean · confident · lots of white space · black and white with one **sunny yellow** accent · hard offset shadows.
- **QA twist:** test-style labels (`✓ Hi there…`, `[ PASSED ] Projects`) with small corner handles. A wink, not a theme.
- **Simple on purpose:** one page, no animation except smooth scrolling, code a beginner can read.

## 3. Colors

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--surface` | `#F5F5F3` | Alternate section background |
| `--ink` | `#0A0A0A` | Headings, buttons, borders, hard shadows, band, footer |
| `--text` | `#5C5F66` | Body text |
| `--line` | `#E5E5E5` | Dividers |
| `--accent` | `#FFD23F` | Sunny yellow: highlights, button shadow, dots, icon squares |
| `--accent-ink` | `#8A6A00` | Dark gold for small text on white |

**Rules:** yellow is never text on white and never carries white text. On black (band, footer, code) yellow text is fine. One accent, no gradients.

## 4. Typography

| Role | Font | Weights |
|---|---|---|
| Headings | Outfit (Google Fonts) | 500, 600 |
| Body | Karla (Google Fonts) | 400, 500, 600 |
| Code | system monospace (`ui-monospace`, Consolas) | — |

## 5. Layout

- Content width max **1200px**, centered. Breakpoints **≤ 900px** (tablet) and **≤ 600px** (phone).
- `main { overflow-x: clip }` prevents horizontal scrolling on phones.
- Menu: always visible on desktop; hamburger at ≤ 900px (the only interactive JS).

## 6. Page map (single page)

1. **Header**: logo "M" + Mulla; Home · What I do · Projects · Experience · About · Contact.
2. **Hero**: QA tag + "Open to new QA roles" pill; H1 "QA Engineer based in Jakarta" with yellow highlight; Get in touch + Download CV; LinkedIn and email icons; photo in a plain frame (2px border, 12px black offset shadow, no decorations).
3. **Band**: static, straight black band with yellow borders listing core skills, separated by ✦.
4. **What I do**: 4 rows with yellow icon squares and one real fact each.
5. **Projects**:
   - Featured case study card (Bond e-statement platform) with steps, the "How the automation grew" story, PDF button and a stats panel.
   - **Inside the automation framework** (`#framework`): 3 cards, Locator → Page action → Test case, with short code.
   - "Other projects" list. A future case study can be promoted to the featured slot.
6. **Experience**: timeline of 3 roles, heading "1 year 9 months in QA, plus a 1-year internship".
7. **About**: IT-neutral statement, then Education, Skills (dashed chips = learning, AI note), Beyond work.
8. **Contact footer**: black block, "Available now · based in Jakarta", "Hiring a QA Engineer? Let's talk.", email + LinkedIn.

The case study lives in the PDF (`assets/case-study-bond-estatement.pdf`), not on a separate page.

## 7. Components

- **Primary button:** black, white text, `4px 4px 0` yellow shadow. Min height 44px.
- **Text button:** text + icon, underline on hover.
- **Pills:** outlined, rounded.
- **Code blocks:** black background, light text, yellow for highlights, scroll horizontally inside the card on phones.

## 8. Motion

- Only `scroll-behavior: smooth` and short hover changes. No reveal-on-scroll, no marquee, no rotating badge.

## 9. Content rules

- Client names anonymized ("a multinational bank", "a major telecom provider"). No dev URLs, credentials or table prefixes.
- No invented metrics. Learning skills (Selenium, Postman) stay labeled.
- No "remote" claim until confirmed.
- All copy is in `CONTENT.md`.

## 10. Implementation

- Plain HTML, CSS, vanilla JS. Tokens in `:root` at the top of `style.css`. Icons are inline SVG.
- All images in `assets/` with `alt` text. Photo: 640×800, about 32 KB.
- Before merging: check the list in `README.md`.
