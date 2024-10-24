// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/seo',
		'@nuxtjs/web-vitals',
		'@nuxt/fonts',
		'@nuxtjs/i18n',
		'@nuxt/icon',
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

	fonts: {
		families: [
			{
				name: 'Onest',
				provider: 'google',
			},
		],
		experimental: {
			processCSSVariables: true,
		},
	},

	i18n: {
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				language: 'en-US',
				files: ['./en/main.yaml'],
			},
			{
				code: 'de',
				language: 'de-DE',
				files: ['./de/main.yaml'],
			},
		],
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
		lazy: true,
		langDir: 'lang',
		strategy: 'prefix',
		rootRedirect: 'en',
	},

	icon: {
		customCollections: [
			{
				prefix: 'base',
				dir: 'assets/base/',
			},
			{
				prefix: 'logo',
				dir: 'assets/logo/',
			},
		],
	},

	compatibilityDate: '2024-10-24',
})
