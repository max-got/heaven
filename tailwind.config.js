/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				display: ['"Michroma"', 'sans-serif'],
				body: ['"Roboto"', 'sans-serif']
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				}
			},
			animation: {
				'pulse-slow': 'pulse 4s infinite cubic-bezier(0.4, 0, 0.6, 1)',
				'text-gradient': 'text-gradient 3s linear infinite',
				'background-shine': 'background-shine 4s linear infinite',
				marquee: 'marquee 50s linear infinite'
			},
			keyframes: {
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},
				'background-shine': {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - 2.5rem))'
					}
				}
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			orange: {
				50: '#FFF8F0',
				100: '#FFF0DB',
				200: '#FFE0B8',
				300: '#FFCE8F',
				400: '#FFB85C',
				DEFAULT: '#FF9D20',
				600: '#F08800',
				700: '#D17600',
				800: '#AD6200',
				900: '#804800',
				950: '#5C3400'
			},
			purple: {
				50: '#FAF4FA',
				100: '#F4E6F3',
				200: '#E8C9E6',
				300: '#DBA9D6',
				400: '#C77BC0',
				DEFAULT: '#994191',
				600: '#883A82',
				700: '#7A3474',
				800: '#61295C',
				900: '#4B2048',
				950: '#271125'
			},
			white: {
				50: '#FCFCFC',
				100: '#FCFCFC',
				200: '#FCFCFC',
				300: '#FAFAFA',
				400: '#F7F7F7',
				DEFAULT: '#F6F6F6',
				600: '#E0E0E0',
				700: '#C4C4C4',
				800: '#A3A3A3',
				900: '#757575',
				950: '#545454'
			},
			black: {
				50: '#F1F2F3',
				100: '#E0E2E5',
				200: '#C2C5CC',
				300: '#A6ABB5',
				400: '#888E9B',
				500: '#6B7280',
				600: '#565C67',
				700: '#41454E',
				800: '#2A2D32',
				900: '#151619',
				DEFAULT: '#0C0C0E'
			}
		}
	},
	plugins: [require('prettier-plugin-tailwindcss'), require('daisyui')],
	daisyui: {
		themes: [],
		base: false,
		logs: false
	}
};
