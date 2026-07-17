# Abdallah Shehawey — Portfolio

Personal portfolio of an Embedded Software Engineer: projects, resume, and skills across bare-metal drivers, RTOS, and V2X systems.

**Live**: [abdallahshehawey.vercel.app](https://abdallahshehawey.vercel.app)

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + shadcn/ui
- [Framer Motion](https://www.framer.com/motion/) for page and tab transitions
- Deployed on [Vercel](https://vercel.com/) (SPA rewrite configured in `vercel.json`)

## Development

```sh
npm i          # install dependencies
npm run dev    # start dev server on http://localhost:8080
npm run build  # production build into dist/
```

## Structure

- `src/pages/` — the five routed tabs: Home, Projects, Resume, Skills, Contact
- `src/components/` — navbar, hero, footer, and shared UI
- `src/data/` — centralized content (nav items, projects, resume data)
