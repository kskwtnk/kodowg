# Kodowg

Kodowg is a word inspired by the Japanese term “小道具” (which means “props”).
We offer you nifty tools for those little tasks in life.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Playwright](https://playwright.dev/)
- [pnpm](https://pnpm.io/)
- [mise](https://mise.jdx.dev/)

## Available Tools

- **Character Count**: Counts the number of characters in a text, excluding newlines.
- **QR Code Generator**: Generates a QR code from a given text.
- **Random Order**: Randomizes the order of items in a list.
- **Roulette**: Selects a random item from a list, like a roulette wheel.
- **Timer**: A simple countdown timer.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/keisukewatanuki/kodowg.git
   cd kodowg
   ```

2. **Install tools:**
   This project uses [mise](https://mise.jdx.dev/) to manage tool versions. Install them by running:

   ```bash
   mise install
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm preview`: Previews the production build.
- `pnpm test`: Runs the end-to-end tests.
- `pnpm check`: Checks linting and formatting with Biome.
- `pnpm check:write`: Automatically fixes linting and formatting with Biome.
- `pnpm svelte-check`: Runs static type-checking.
