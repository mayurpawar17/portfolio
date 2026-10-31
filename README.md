# Portfolio

A responsive portfolio website built with React, TypeScript, and TanStack Start. It presents a developer profile, skills, experience, education, and mobile app projects, with a separate case-study page for each project.

## Live site

[mayurpawar.netlify.app](https://mayurpawar.netlify.app/)

## Tech stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Tailwind CSS 4
- Vite and Nitro
- Netlify Functions for server-rendered routes

## Run locally

Use a current Node.js LTS release.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest test suite |
| `npm run test:watch` | Run Vitest in watch mode |

## Project structure

- `src/routes/` — home page and dynamic project case-study routes
- `src/lib/projects.ts` — project details displayed by the portfolio
- `src/components/ui/` — reusable UI components
- `src/styles.css` — global styles and Tailwind CSS
- `netlify.toml` — Netlify build and Nitro preset configuration

## Work section images

Use portrait images with an **860 × 1920 px** aspect ratio (about **9:20**) for project screenshots. This matches the phone frame and helps avoid cropping. Larger images with the same ratio, such as **1080 × 2411 px**, also work.

## Deploy to Netlify

Connect the GitHub repository to Netlify and deploy the production branch. The checked-in `netlify.toml` configures:

- Build command: `npm run build`
- Publish directory: `dist`
- Nitro preset: `netlify`

The build produces static assets in `dist` and a Netlify Function for server-rendered routes. No separate SPA fallback redirect is needed.

## Contact

- Email: [mayurpawar4908@gmail.com](mailto:mayurpawar4908@gmail.com)
- LinkedIn: [mayurpawar17](https://www.linkedin.com/in/mayurpawar17)
- GitHub: [mayurpawar17](https://github.com/mayurpawar17)
