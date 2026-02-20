# YouTripio

YouTripio is a trust-first travel logistics network that connects travelers, parcel owners, and companions in one flow. This repo is a full Next.js + Tailwind implementation with a responsive UI, default dark mode, and bilingual support (English + Persian).

## Highlights

- Unified parcel and companion flow with marketplace-style discovery.
- Dashboard, control center, and request management views.
- Mobile-first, fully responsive layouts.
- Default dark mode with a single-toggle switch.
- Language toggle with English (default) and Persian support.
- GitHub-ready repo with documentation, templates, and policies.
- Standalone `index.html` demo for GitHub Pages.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- React 19
- Tailwind CSS v4
- React Icons

## Requirements

- Node.js 18+ (recommended)
- npm (bundled with Node.js)

## Getting Started

Clone the repo:

```bash
git clone <your-repo-url>
cd YouTripio
```

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

Dark mode is the default. The theme toggle persists the preference in local storage:

- Key: `youtripio-theme`
- Values: `dark`, `light`

## Language Toggle

English is the default. The language toggle persists the preference in local storage:

- Key: `youtripio-language`
- Values: `en`, `fa`

RTL is automatically applied when Persian is selected.

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

## Environment Variables

No environment variables are required for local development.

## Linting

```bash
npm run lint
```

## Deployment

Next.js production build:

```bash
npm run build
npm run start
```

For static preview, use the `index.html` demo.

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
