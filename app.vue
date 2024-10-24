<template>
	<SectionHeader />
	<NuxtPage />
	<SectionFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
	transition-timing-function: cubic-bezier(
		0.25,
		0.46,
		0.45,
		0.94
	);
}
.page-enter-from {
	opacity: 0;
	transform: translateY(-100px);
}
.page-leave-to {
	opacity: 0;
	transform: translateY(100px);
}
</style>
