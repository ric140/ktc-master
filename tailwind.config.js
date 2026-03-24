/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			colors: {
				ink:   '#0e0d0b',
				paper: '#f4f0e8',
				sand:  '#e8e0cc',
				rule:  '#c8bfa8',
				gold:  '#b8960c',
				ember: '#c44a1a',
				deep:  '#1a2035',
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'Georgia', 'serif'],
				cond:  ['Barlow Condensed', 'Arial Narrow', 'sans-serif'],
				mono:  ['IBM Plex Mono', 'monospace'],
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#0e0d0b',
						fontFamily: 'Cormorant Garamond, Georgia, serif',
						fontSize: '1.125rem',
						lineHeight: '1.8',
						'h1, h2, h3': {
							fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
							color: '#0e0d0b',
						},
						a: { color: '#b8960c' },
						'a:hover': { color: '#c44a1a' },
					}
				}
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
