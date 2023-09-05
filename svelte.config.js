import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			'$components': 'src/lib/components/',
			'$styles': 'src/lib/styles'
		}
	}
};

export default config;
