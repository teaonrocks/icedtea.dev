/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				"dm-sans": ["DM Sans", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				lexend: ["Lexend", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				nunito: ["Nunito", "sans-serif"],
				"public-sans": ["Public Sans", "sans-serif"],
				urbanist: ["Urbanist", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
				'jetbrains-mono' :['JetBrains Mono', 'monospace']
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
