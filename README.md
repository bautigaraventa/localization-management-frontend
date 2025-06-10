# Localization Management Frontend

for a quick Demo wath the videos in the following order:

1. https://www.loom.com/share/72843c2866f145fbb289bf96186acd81?sid=e75f0b7b-a711-4da1-afd0-afab3dd7dc38
2. https://www.loom.com/share/0331c6ccc0804959b7374148662ba066?sid=efef7b05-33d9-4c70-8fb7-1dcf939c547f
3. https://www.loom.com/share/ecff1de1fad84648929f2f8c7843b906?sid=71a7395b-1dad-4c81-969f-1eee1029c68e

## Overview

The Localization Management Frontend is a web application designed to facilitate the management of localization files and translations for various projects. It provides a user-friendly interface for developers and translators to collaborate on localization efforts.

## Technologies Used

- **Framework**: Next.js 15 App Router (with `app/` directory)
- **Styling**: TailwindCSS, shadcn/ui components
- **Tables**: TanStack Table
- **API Fetch**: TanStack Query
- **Date utils**: date-fns
- **State**: Zustand

## Project Structure

```text
src/
│
├── app/
│ │
│ ├── api/translations
│ │ └── route.ts # Next.js Server API endpoint
│ └── page.tsx # Main site
│
├── components/
│ ├── filters/ # Filters components
│ ├── table/ # Translations Table components
│ ├── layout/ # Shell components
│ └── ui/ # Shadcn-ui base components
├── hooks/
│ └── useTranslationKeys.ts # Data fetching hook
│
├── lib/ # Mocks and utils
├── store/ # Zustand store
└── types/ # TypeScript interfaces/enums/consts
```

## Installation Instructions

### Clone this repo

Set ENV variable in your .env.local: `API_URL=http://127.0.0.1:8000`

```bash
npm install
npm run dev
```

Open in browser http://localhost:3000

### Tu run tests

```bash
npm run test
```

## Features

- **Table View**

  Translations shown in a paginated table with 4 columns: ID, Key, Translation value, Updated at. The columns can be hidden/shown as the user wants

- **Sorting**

  The table can be sorted asc/desc by ID and Key.

- **Filtering**

  The table content can be filtered by project, by category, and by language.

- **Searching**

  Search table rows by Key is available in a text input search bar.

## Out of scope

- An endpoint to generate some stats was created but is not being consume by the UI.
- Authentication: we are seeing a mocked username and avatar.
- Persist a translation update to the database.
- Get projects from DB: we are seeing 3 mocked projects.
- Get languages from DB: we are seeing 3 mocked languages.
