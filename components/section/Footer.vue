<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const availableLocales = computed(() => {
	return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
	<footer>
		<div class="w-full py-tile">
			<div class="row h-double md:h-tile">
				<p>
					<span>
						© {{ new Date().getFullYear() }}
						{{ $t('footer-copy') }}
					</span>
				</p>
				<nuxt-link :to="localePath('/privacy')">
					{{ $t('footer-privacy') }}
				</nuxt-link>
			</div>
			<div class="row">
				<nuxt-link
					v-for="loc in availableLocales"
					:key="loc.code"
					class="button w-full text-quarter lg:w-quad"
					:to="switchLocalePath(loc.code)"
				>
					{{ $t('footer-switch') }}
					<Icon name="base:globe" />
				</nuxt-link>
				<div class="flex-row">
					<ElementSocial />
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	@apply m-0 flex-row justify-between px-tile py-0;
	@apply lg:px-double;
	@apply border-t border-foreground;
}
.row {
	@apply min-h-tile w-full flex-row flex-wrap items-center justify-between;
}

p,
a {
	@apply uppercase;
}

.social {
	@apply w-tile !border-backgroundSecondary text-third hover:!border-foreground;
}

p {
	@apply text-[0.875rem] font-semibold text-foreground opacity-60;
}
</style>
