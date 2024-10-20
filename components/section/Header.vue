<template>
	<header>
		<NuxtLink to="/" class="logo" area-label="Home" />
		<nav>
			<NuxtLink to="/about"> About </NuxtLink>
			<NuxtLink to="/work"> Work </NuxtLink>
			<NuxtLink to="/services"> Services </NuxtLink>
		</nav>
		<NuxtLink to="/contact" class="button">
			Let's talk
		</NuxtLink>
	</header>
</template>

<style scoped>
header {
	@apply fixed left-0 right-0 z-50 flex-row justify-between px-tile;
	@apply lg:px-double lg:py-quarter;
}
nav {
	@apply absolute left-1/2 right-1/2 hidden h-half w-quad -translate-x-1/2 flex-row rounded-full border border-backgroundSecondary bg-background p-1 *:w-full *:rounded-full lg:flex;
}
nav > * {
	@apply flex items-center justify-center transition duration-300 ease-out hover:bg-backgroundSecondary;
}
.button {
	@apply hidden shrink-0 flex-row items-center justify-center gap-3 rounded-full border border-backgroundSecondary bg-background px-7 hover:border-foreground;
	@apply md:flex md:w-quad lg:w-auto lg:min-w-double;
	@apply transition duration-300 ease-out;
}
.logo {
	@apply z-10 aspect-square size-tile rounded-full bg-brand lg:size-half;
}
</style>
