import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://passatemps.jbr1989.es',
	integrations: [
		starlight({
			title: 'Passatemps',
			defaultLocale: 'root', // opcional
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
					autogenerate: { directory: 'laberints' },
				},
				{
					label: 'Mots encreuats',
					autogenerate: { directory: 'mots_encreuats' },
				},
				{
					label: 'Sopa de lletres',
					autogenerate: { directory: 'sopa_lletres' },
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
