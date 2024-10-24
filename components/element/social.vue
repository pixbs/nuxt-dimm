<template>
	<nuxt-link
		to="https://t.me/pixbs"
		class="button social"
		aria-label="telegram"
	>
		<Icon name="logo:telegram" />
	</nuxt-link>
	<nuxt-link
		to="https://www.behance.net/pixbs"
		class="button social"
		aria-label="behance"
	>
		<Icon name="logo:behance" />
	</nuxt-link>
	<nuxt-link
		to="https://www.linkedin.com/in/pixbs/"
		class="button social"
		aria-label="linkedin"
	>
		<Icon name="logo:linkedin" />
	</nuxt-link>
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
