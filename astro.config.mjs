import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://passatemps.jbr1989.es',
	integrations: [
		starlight({
			title: {
				'ca': 'Passatemps',
				'es': 'Passatiempos',
				'en': 'Pastimes',
			},
			defaultLocale: 'root', // opcional
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			locales: {
				root: {
				  label: 'Català',
				  lang: 'ca', // lang es obligatorio para los locales raíz
				},
				es: {
				  label: 'Castellano',
				  lang: 'es',
				},
				en: {
					label: 'English',
					lang: 'en',
				  },
			  },
			sidebar: [
				{
					label: 'Inicio',
					link: '/',
				},
				{
					label: 'Laberints',
					translations: { 'es': 'Laberintos', 'en': 'Labyrinths' },
					items: [
						// A link with a yellow "Stub" badge.
						{
							label: 'Definició i Historia',
							translations: { 'es': 'Definición y Historia', 'en': 'Definition and History' },
							link: '/laberints/'
						},
						{
							label: 'Variants',
							translations: { 'es': 'Variantes', 'en': 'Variants' },
							link: '/laberints/variants/'
						},
						{
							label: 'Generador',
							translations: { 'es': 'Generador', 'en': 'Generator' },
							link: '/laberints/generador/',
							badge: { text: 'Obsolet', variant: 'danger' },
						},
						{
							label: 'Practicar',
							translations: { 'es': 'Practicar', 'en': 'Practice' },
							link: '/laberints/practicar/'
						},
					],
				},
				{
					label: 'Mots encreuats',
					translations: { 'es': 'Crucigramas', 'en': 'Crosswords' },
					items: [
						// A link with a yellow "Stub" badge.
						{
							label: 'Definició i Historia',
							translations: { 'es': 'Definición y Historia', 'en': 'Definition and History' },
							link: '/mots_encreuats/'
						},
						{
							label: 'Variants',
							translations: { 'es': 'Variantes', 'en': 'Variants' },
							link: '/mots_encreuats/variants/'
						},
						{
							label: 'Generador',
							translations: { 'es': 'Generador', 'en': 'Generator' },
							link: '/mots_encreuats/generador/',
							badge: { text: 'Obsolet', variant: 'danger' },
						},
						{
							label: 'Practicar',
							translations: { 'es': 'Practicar', 'en': 'Practice' },
							link: '/mots_encreuats/practicar/'
						},
					],
				},
				{
					label: 'Sopa de lletres',
					items: [
						// A link with a yellow "Stub" badge.
						{
							label: 'Definició i Historia',
							translations: { 'es': 'Definición y Historia', 'en': 'Definition and History' },
							link: '/sopa_lletres/'
						},
						{
							label: 'Estrategies',
							translations: { 'es': 'Estrategias', 'en': 'Strategies' },
							link: '/sopa_lletres/estrategies/'
						},
						{
							label: 'Generador',
							translations: { 'es': 'Generador', 'en': 'Generator' },
							link: '/sopa_lletres/generador/',
							badge: { text: 'Obsolet', variant: 'danger' },
						},
						{
							label: 'Practicar',
							translations: { 'es': 'Practicar', 'en': 'Practice' },
							link: '/sopa_lletres/practicar/'
						},
					],
				},
				{
					label: 'Sudoku',
					autogenerate: {  directory: 'sudoku' },
				},
				// {
				// 	label: 'Buscamines',
				// 	link: '/buscamines',
				// },
			],
		}),
	],
});
