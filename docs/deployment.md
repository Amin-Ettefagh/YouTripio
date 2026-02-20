# Deployment

## Local Production Test

```bash
npm run build
npm run start
```

## GitHub Pages (Static Demo)

A standalone `index.html` file exists at the repository root. It is a static demo that mirrors the marketing home screen.

Suggested flow:

- Enable GitHub Pages for the repository.
- Use the root folder as the Pages source, or copy `index.html` into `docs/` if you prefer that setup.

This static file does not require a build step.

## Vercel or Other Next.js Hosts

The full Next.js experience is best deployed to a platform that supports server rendering. Deploy the repository as a standard Next.js App Router project.
