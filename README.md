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

## GitHub Container Registry

The publish workflow builds and checks a Linux amd64 image on each push to `main`.

```sh
docker run --rm -p 8080:80 ghcr.io/abdallah-shehawey/abdallahshehawey:latest
```

Open http://localhost:8080. `latest` follows main; `sha-<commit>` identifies a build. The image uses the public Supabase browser configuration already tracked in this repository, supplied as repository Actions variables. To use your own project, rebuild with `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` and `VITE_SUPABASE_PROJECT_ID` build arguments. No service-role key is included, and `.env` files are excluded from the build context.
