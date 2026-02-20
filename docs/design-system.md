# Design System

## Typography

- Display font: Space Grotesk (`--font-display`)
- Body font: Manrope (`--font-body`)

Headings inherit the display font, while body text uses the body font.

## Color Tokens

Defined in `src/app/globals.css`:

- `--bg`: page background
- `--bg-elev`: elevated sections
- `--card`: card surfaces
- `--text`: primary text
- `--muted`: secondary text
- `--accent`: primary brand accent
- `--accent-strong`: hover accent
- `--border`: neutral borders

Dark mode is default. The `.light` class overrides these values when a user toggles the theme.

## Components

- `.glass` — semi-transparent card surface with blur
- `.section-shell` — consistent max-width + padding
- `ThemeToggle`, `Modal`, `LoadingOverlay`, `Toast` — reusable UI building blocks

## Accessibility Notes

- Buttons and links include visible focus and hover states.
- Form labels are explicit where needed.
- Modals use high-contrast overlays for readability.
