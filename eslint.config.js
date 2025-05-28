import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig([
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	{
		files: ["**/*.{js,ts,svelte}"],
		plugins: { js, ts },
		extends: ["js/recommended", "ts/recommended"],
	},
	{
		files: ["**/*.svelte"],
		plugins: { svelte },
		extends: ["svelte/recommended", "svelte/prettier"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: [".svelte"],
				parser: ts.parser,
			},
		},
	},
	prettier,
	globalIgnores(["build/", ".svelte-kit/", "dist/"]),
]);
