# YouTripio

YouTripio is a trust-first travel cargo & companion network that connects travelers, parcel owners, and companions in one unified flow. This repository delivers a full Next.js + Tailwind implementation with a responsive UI, default dark mode, bilingual EN/FA support, and a standalone GitHub Pages demo.

## Highlights

- Unified parcel and companion flow with marketplace-style discovery.
- Dashboard, control center, and request management views.
- Mobile-first layouts with full responsiveness across screens.
- Default dark mode with a single-toggle switch.
- Language toggle with English (default) and Persian (RTL) support.
- GitHub-ready repository with docs, policies, and templates.
- Standalone `index.html` demo for GitHub Pages.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- React 19
- Tailwind CSS v4
- React Icons

## Quick Start

Install dependencies:

```bash
npm install
```

Run the dev server on a port ending with `22`:

```bash
npm run dev:3022
```

Open the app:

```text
http://localhost:3022
```

## Scripts

- `npm run dev` — start dev server
- `npm run dev:3022` — start dev server on port 3022
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Project Structure

```text
src/
  app/
    (marketing)/     # Home, About, Blog, Services, Contact, Terms, Auth
    (app)/           # Dashboard, Control Center, and journey flows
  components/        # Header, footer, theme, language, UI primitives
  data/              # Mock data for cards and lists
  lib/               # Utilities and shared logic
public/
  images/            # Local media
```

## Routes

Marketing:
- `/` Home
- `/about`
- `/services`
- `/blog`
- `/contact`
- `/terms`
- `/auth`
- `/soon`

App:
- `/dashboard`
- `/control`
- `/request`
- `/carry-cargo`
- `/carry-cargo/new`
- `/send-cargo`
- `/send-cargo/new`
- `/carry-companion`
- `/carry-companion/new`
- `/send-companion`
- `/send-companion/new`

## Theming

Dark mode is the default. The theme toggle persists the preference in local storage.

- Key: `youtripio-theme`
- Values: `dark`, `light`

## Language (EN/FA + RTL)

English is the default. The language toggle persists the preference in local storage, and applies RTL layout when Persian is selected.

- Key: `youtripio-language`
- Values: `en`, `fa`

## Static Demo (GitHub Pages)

A standalone `index.html` is included at the repo root. It mirrors the Next.js experience with all sections and toggles.

Suggested usage:

- Point GitHub Pages to the root folder.
- Or copy `index.html` into a `docs/` folder and set GitHub Pages to `docs/`.

No build step is required for the static demo.

## Documentation

Docs live in the `docs/` folder:

- `docs/architecture.md`
- `docs/design-system.md`
- `docs/deployment.md`
- `docs/roadmap.md`

## Quality Checks

Run lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

## Repository Metadata (For GitHub)

Suggested Description:

YouTripio is a trust-first travel cargo & companion network built with Next.js, Tailwind CSS, and TypeScript. It features a responsive UI, default dark mode, bilingual EN/FA support, and a standalone GitHub Pages demo.

Suggested Topics:

`nextjs`, `react`, `typescript`, `tailwindcss`, `travel`, `logistics`, `marketplace`, `dashboard`, `ui`, `responsive-design`, `dark-mode`, `i18n`, `rtl`, `github-pages`, `landing-page`

## Contributing

See `CONTRIBUTING.md` for workflow, style guide, and PR requirements.

## Code of Conduct

See `CODE_OF_CONDUCT.md`.

## Security

See `SECURITY.md` for reporting vulnerabilities.

## Support

See `SUPPORT.md` for support channels.

## License

MIT
