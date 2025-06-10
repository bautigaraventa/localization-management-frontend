# Localization Management Frontend

Demo:

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
