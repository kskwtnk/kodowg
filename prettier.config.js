/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
