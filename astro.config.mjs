// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://aidalinfo.github.io',
	base: 'doc-mini-backup',
	integrations: [
		starlight({
			title: 'Mini backup',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Documentation',
					autogenerate: { directory: 'docs' },
					// ],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
