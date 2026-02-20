# Architecture

## Overview

YouTripio is organized into two route groups:

- `(marketing)` for public pages like Home, About, Services, Blog, Contact, Terms, and Auth.
- `(app)` for authenticated-style flows: Dashboard, Activity Status, Requests, and all parcel/companion list + form screens.

## Routing Map

Marketing routes:

- `/` — Home
- `/about`
- `/services`
- `/blog`
- `/contact`
- `/terms`
- `/auth`

App routes:

- `/dashboard` — profile, wallet, and main decision flow
- `/control` — activity status and journey code validation
- `/request` — market requests for parcel and companion
- `/carry-cargo` — find a courier list
- `/carry-cargo/new` — advertise a parcel
- `/send-cargo` — find a parcel list
- `/send-cargo/new` — advertise spare capacity
- `/carry-companion` — find a companion list
- `/carry-companion/new` — advertise companion need
- `/send-companion` — find someone who needs a companion
- `/send-companion/new` — advertise companion offer

## State Management

All interactivity is client-side state using React hooks:

- Toasts and loading overlays for form submissions.
- Dashboard modals for wallet recharge and profile editing.
- Journey flow steps inside the dashboard.

## Data

Mock data lives in `src/data/sample-data.ts`. Replace with API calls or database queries when a backend is ready.
