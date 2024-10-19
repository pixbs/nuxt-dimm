// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/seo',
	],
	components: {
		dirs: [
			{
				path: './components',
				ignore: ['**/*.ts'],
			},
		],
	},
	devtools: { enabled: true },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	content: {
		documentDriven: true,
		experimental: {
			search: {
				indexed: true,
			},
		},
	},
	routeRules: {
		'/': { prerender: true },
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
			},
		},
	},
})
