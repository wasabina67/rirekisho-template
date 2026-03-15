# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Japanese resume (履歴書 / rirekisho) template built as a static React app with Vite. It renders a print-ready A4 resume using [paper-css](https://github.com/cognitom/paper-css) for page sizing and print layout.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check with `tsc -b` then build to `docs/`
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Architecture

- **Vite + React 19 + TypeScript** — no routing, no state management, purely static rendering
- **Two-page resume**: `App.tsx` renders `<Page1 />` and `<Page2 />`, each wrapped in a `<section className="sheet padding-10mm">` (paper-css A4 sheet)
- **Resume data is hardcoded** — `Page1.tsx` has `const` objects (PROFILE, CONTACT, EDUCATION, WORK, LICENSES) for structured data; `Page2.tsx` has inline text for 趣味, 特技, 自己PR. Edit these directly to change resume content
- **Reusable components**:
  - `HistoryTable` — year/month/content table used for education, work history, and licenses. Appends "現在に至る" / "以上" rows when `title === '職歴'`
  - `Box` — titled section with header and body (used for 志望動機, 本人希望, 趣味, 特技, 自己PR)
- **Styling**: `App.css` contains all resume-specific styles (tables, boxes, layout). `index.css` is minimal (font-family only). Print layout is handled by paper-css imported in `main.tsx`
- **Photo**: `src/assets/photo.jpg` is imported in Page1 and displayed in the profile table

## Notes

- No test framework is configured — there are no tests to run
- No `.env` or external API dependencies — the app is entirely self-contained

## Build & Deploy

- Build output goes to `docs/` (configured in `vite.config.ts` via `outDir: 'docs'`)
- Base path is `/rirekisho-template/` (for GitHub Pages deployment from the `docs/` folder)
