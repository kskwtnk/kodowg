# Repository Guidelines

## Project Structure & Module Organization

Kodowg is a SvelteKit app. Route pages live in `src/routes`, with each tool in its own route directory such as `src/routes/timer` or `src/routes/qr-code-generator`. Page UI is implemented in `+page.svelte`; route metadata and load logic belong in the matching `+page.ts`. Shared layout files are in `src/routes/+layout.*`, reusable components are in `src/lib/components`, global styles are in `src/app.css`, and static public assets are in `static`. End-to-end tests are grouped by feature in `tests/*.test.ts`.

## Build, Test, and Development Commands

Use `mise install` to install the pinned toolchain from `mise.toml` (`node` and `pnpm`). Then run `pnpm install`.

- `pnpm dev`: start the Vite development server.
- `pnpm build`: build the production app.
- `pnpm preview`: serve the built app locally.
- `pnpm check`: run Biome lint and format checks.
- `pnpm check:write`: automatically fix Biome lint and format issues.
- `pnpm svelte-check`: run SvelteKit sync and TypeScript/Svelte checks.
- `pnpm test`: sync SvelteKit, build, then run Playwright tests.

## Coding Style & Naming Conventions

Write TypeScript and Svelte using the existing Biome configuration. Biome handles formatting, import organization, sorted object keys/properties, sorted Svelte attributes, and Tailwind class sorting. Keep route directory names lowercase and hyphenated, for example `character-count`. Use `TITLE` and `DESCRIPTION` constants for page metadata, matching existing `+page.ts` files. Prefer accessible queries and semantic HTML in UI code.

## Testing Guidelines

Playwright is the test framework, configured in `playwright.config.ts` with tests under `tests`. Name test files after the route or feature, such as `tests/random-order.test.ts`. Add or update an end-to-end test whenever changing user-visible behavior, navigation, or responsive layout. Run `pnpm test` before submitting larger changes; for quick checks, run `pnpm check` and `pnpm svelte-check`.

## Commit & Pull Request Guidelines

Recent history uses short imperative commit messages, sometimes with a Conventional Commit prefix such as `refactor:`. Keep messages focused, for example `Add group divider validation` or `fix: correct timer reset behavior`. Pull requests should include a concise description, linked issue when applicable, test results (`pnpm test`, `pnpm check`, or `pnpm svelte-check`), and screenshots or screen recordings for visible UI changes.

## Agent-Specific Instructions

Do not edit generated artifacts such as `node_modules` or `test-results`. Keep changes scoped to the requested feature and preserve existing Japanese UI copy style unless the task explicitly asks for copy changes.
