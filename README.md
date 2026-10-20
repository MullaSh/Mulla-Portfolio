# Mulla Shadra · QA Portfolio

Personal portfolio website of Mulla Shadra, QA Engineer based in Jakarta.
Live: https://mullash.github.io/Mulla-Portfolio/

## Tech

Plain **HTML, CSS and a little vanilla JavaScript**. No framework, no npm, no build step.
Hosted on GitHub Pages from the `master` branch.

## Structure

```
index.html         one-page site (Home, What I do, Projects, Experience, About, Contact)
style.css          all styles; design tokens (colors, fonts) at the top in :root
scripts.js         mobile menu toggle + footer year
assets/            photo, CV and case study PDF
CONTENT.md         all website text, section by section
DESIGN-CONTEXT.md  design decisions: colors, fonts, layout, components
```

## Run locally

Open `index.html` in a browser. That's it.

## Workflow

1. Work on a branch: `git checkout -b <branch>`
2. Small commits per step
3. Review, then merge into `master` and push. GitHub Pages updates in about a minute.

## Before merging

- [ ] Check on desktop and on a phone width (Chrome DevTools, 390px)
- [ ] All links work (CV, case study PDF, email, LinkedIn)
- [ ] No horizontal scrolling on mobile
- [ ] Lighthouse (Performance, Accessibility, Best Practices, SEO)
- [ ] W3C HTML validator: https://validator.w3.org/
