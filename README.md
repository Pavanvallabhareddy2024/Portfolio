# Sai Pavan Vallabhareddy — Portfolio

Premium glassmorphic, dark-futuristic full-stack developer portfolio built with **React + Vite**, **Tailwind CSS** and **Framer Motion**.

## Tech

- React 18 + Vite 5
- Tailwind CSS 3 (custom design tokens, glass utilities)
- Framer Motion (section reveals, stagger, hover tilt)
- Lucide React (UI icons)
- React Icons (skill / brand logos)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/images/        # drop your real images here later
  components/
    common/             # Navbar, Footer, GlassCard, AnimatedButton, SectionTitle
    layout/PageLayout.jsx
    sections/           # Hero, About, Skills, Experience, Projects,
                        # Achievements, Education, Certificates, Contact
  data/portfolioData.js # single source of truth for ALL content
  styles/globals.css    # design system + glass utilities
  App.jsx
  main.jsx
```

## Replace placeholder images

The portfolio currently uses Unsplash URLs as placeholders. To use your own:

1. Drop files into `src/assets/images/` (e.g. `profile-placeholder.jpg`,
   `project-dashpod.jpg`, `project-embehome.jpg`, `project-build200.jpg`).
2. Open `src/data/portfolioData.js` and replace the placeholder URL constants
   at the top of the file with imports:

```js
import profilePlaceholder from '../assets/images/profile-placeholder.jpg';
import projectDashpod from '../assets/images/project-dashpod.jpg';
import projectEmbeHome from '../assets/images/project-embehome.jpg';
import projectBuild200 from '../assets/images/project-build200.jpg';
```

## Edit content

All text, skills, projects, experience and certifications live in
`src/data/portfolioData.js`. Components map over this data, so updating the
file updates the entire site.
