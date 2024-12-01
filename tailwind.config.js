/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			black: '#0e0e0e',
			white: '#fff',
			lightWhite: '#E2E2E2',
			gray: '#383638',
			darkBlue: '#0B0F15',
			blue: '#377DFF80',
		},
		fontFamily: {
			quicksand: ['Quicksand', 'sans-serif'],
			nunito: ['Nunito', 'sans-serif'],
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '769px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
}
