import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			listStyleType: {
				circle: "circle", // `list-style-type: circle` does not exist in Tailwind's style https://github.com/tailwindlabs/tailwindcss/blob/d86fd0bb5b69c9aa5c75d4e78f8fe78969d6ff50/stubs/config.full.js#L621-L625
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant("hover", "@media(any-hover: hover){ &:where(:hover) }");
		}),
	],
};
