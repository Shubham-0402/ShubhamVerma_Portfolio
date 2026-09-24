# Shubham Verma — Portfolio

A personal portfolio for **Shubham Verma** — AI/ML student & developer.

Built with **React + Vite**.

## Structure

```
public/                favicon, robots.txt, sitemap + photograph
src/
  data/
    portfolioData.js   ← ALL personal info lives here (edit this)
  components/          one folder per component (JSX + CSS)
```

## Editing content

Everything personal (name, bio, education, skills, projects, experiments,
journey, email, GitHub, LinkedIn) is centralized in
`src/data/portfolioData.js`. Placeholders use the `YOUR_*` / `*_HERE`
convention, and the site renders them visibly as amber "to edit" chips.

## Before deploying

1. Replace the `YOUR_*` placeholders in `src/data/portfolioData.js`.
2. Replace `YOUR_PORTFOLIO_URL_HERE` in `index.html`, `public/robots.txt`,
   and `public/sitemap.xml`.
3. Photograph: keep it at `public/shubham-photo.jpg`. Tune its framing via
   `photoPosition` in `portfolioData.js` (e.g. `'50% 15%'`).

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
npm run lint     # eslint
```