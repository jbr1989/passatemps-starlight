import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://passatemps.jbr1989.es',
	integrations: [
		starlight({
			title: 'Passatemps',
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
				'es': {
				  label: 'Castellano',
				  lang: 'es',
				},
			  },
			sidebar: [
				{
					label: 'Inicio',
					link: '/',
				},
				{
					label: 'Laberints',
					items: [
						// A link with a yellow "Stub" badge.
						{
							label: 'Definició i Historia',
							link: '/laberints/'
						},
						{
							label: 'Variants',
							link: '/laberints/variants/'
						},
						{
							label: 'Generador',
							link: '/laberints/generador/',
							badge: { text: 'Obsolet', variant: 'danger' },
						},
						{
							label: 'Practicar',
							link: '/laberints/practicar/'
						},
					],
				},
				{
					label: 'Mots encreuats',
					items: [
						// A link with a yellow "Stub" badge.
						{
							label: 'Definició i Historia',
							link: '/mots_encreuats/'
						},
						{
							label: 'Variants',
							link: '/mots_encreuats/variants/'
						},
						{
							label: 'Generador',
							link: '/mots_encreuats/generador/',
							badge: { text: 'Obsolet', variant: 'danger' },
						},
						{
							label: 'Practicar',
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
							link: '/sopa_lletres/'
						},
						{
							label: 'Estrategies',
							link: '/sopa_lletres/estrategies/'
						},
						{
							label: 'Generador',
							link: '/sopa_lletres/generador/',
							badge: { text: 'Obsolet', variant: 'danger' },
						},
						{
							label: 'Practicar',
							link: '/sopa_lletres/practicar/'
						},
					],
				},
				{
					label: 'Sudoku',
					autogenerate: { directory: 'sudoku' },
				},
				// {
				// 	label: 'Buscamines',
				// 	link: '/buscamines',
				// },
			],
		}),
	],
});
