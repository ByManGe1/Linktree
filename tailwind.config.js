/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				customGreen: 'rgb(16 185 129)',
			  },
		},
	},
	plugins: [
	],
}

