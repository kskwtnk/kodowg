# Kodowg Project Analysis

## Communication Rules

### Language Settings

- **Always communicate with users in Japanese**
- Write code comments in Japanese
- Provide error messages and explanations in Japanese
- Use appropriate Japanese translations for technical terms, with English terms in parentheses when necessary

### Communication Style

- Use polite language (丁寧語) with a friendly tone
- Explain technical content in an easy-to-understand manner
- Ask questions and confirmations clearly in Japanese
- Provide code explanations and suggestions in Japanese

## Project Overview

This repository contains Kodowg, a web application built with SvelteKit. The name "Kodowg" is inspired by the Japanese word for "props" or "small tools" (小道具), and the application provides a collection of simple, useful utilities. The project is written in TypeScript and uses Tailwind CSS for styling.

The application is structured as a standard SvelteKit project, with routes defined in the `src/routes` directory. Each tool is implemented as a separate route, for example, `src/routes/character-count`.

## Building and Running

The project uses `pnpm` as the package manager. The following scripts are defined in `package.json`:

- **`pnpm dev`**: Starts the development server with live reloading.
- **`pnpm build`**: Builds the application for production. The output is configured for Cloudflare Pages.
- **`pnpm preview`**: Serves the production build locally for testing.
- **`pnpm test`**: Runs end-to-end tests using Playwright.

## Development Conventions

- **Language**: The project uses TypeScript and Svelte 5, including the new runes syntax (`$state`, `$derived`).
- **Styling**: Tailwind CSS is used for styling. Utility classes are applied directly in the Svelte components.
- **Linting and Formatting**: The project is configured with ESLint and Prettier to enforce a consistent code style.
  - Run `pnpm lint` to check for linting errors.
  - Run `pnpm format` to automatically format the code.
- **Testing**: End-to-end tests are written using Playwright and are located in the `tests/` directory. Tests are run against a production build of the application.
- **Type Checking**: Run `pnpm check` to perform static type analysis with `svelte-check`.
