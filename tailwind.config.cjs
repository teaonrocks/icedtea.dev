/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				lexend: ["Lexend", "sans-serif"],
				"jetbrains-mono": ["JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
