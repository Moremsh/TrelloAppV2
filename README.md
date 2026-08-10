# TrelloApp

A Trello-style task board, rebuilt from scratch step by step to learn frontend architecture properly — state management, feature-based structure, and where logic should live in a React app.

## Stack

- React + TypeScript
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS + shadcn/ui
- @hello-pangea/dnd (drag and drop)
- Vitest

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check + production build
npm run lint      # oxlint
npm run preview   # preview a production build locally
```

## Project structure

Feature-based, not type-based — a feature folder owns everything only it uses, and code only moves to `shared/` once a second feature needs it.

```
src/
  app/                  store, router, providers
  features/
    tasks/
      components/
      hooks/
      store/            slice + selectors
      utils.ts          pure functions
      constants.ts
  shared/
    components/         composed shared UI (Header, Sidebar)
  components/
    ui/                 shadcn/ui primitives
  pages/
```

## Build log

Built in stages, each one focused on a single concept:

- [x] Step 0 — Project setup
- [x] Step 1 — Data model + state map
- [x] Step 2 — Router + layout shell
- [x] Step 3 — Board renders from static data
- [x] Step 4 — Store + selectors
- [x] Step 5 — Add / edit / delete
- [x] Step 6 — Drag and drop
- [ ] Step 7 — Search + filter via URL
- [ ] Step 8 — Theme
- [ ] Step 9 — Dashboard + charts
- [ ] Step 10 — Tests + polish