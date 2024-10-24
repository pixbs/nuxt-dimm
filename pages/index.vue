<template>
	<main>
		<SectionHero>
			<template #title>
				{{ $t('title') }}
			</template>
			<template #description>
				<p>
					I focus on future-oriented methodologies such as
					human-centricity, and lean development.
				</p>
			</template>
			<template #button>
				<span>Let&apos;s talk</span>
			</template>
		</SectionHero>
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	white-space: pre-line;
}

div,
section,
header,
footer,
nav,
main {
	@apply flex flex-col;
}

main {
	min-height: calc(round(100vh, var(--tile-size)));
}

section {
	@apply px-tile lg:px-double;
}

:root {
	--tile-size: 12.5vw;
	--background: #161616;
	--background-secondary: #2d2d2d;
	--foreground: white;
	--brand: #f22f57;
	font-family: 'Onest', sans-serif;
	-ms-overflow-style: none;
	scrollbar-width: none;
}

@media (min-width: 768px) {
	:root {
		--tile-size: 10vw;
	}
}

@media (min-width: 1024px) {
	:root {
		--tile-size: 5.5555556vw;
	}
}

::-webkit-scrollbar {
	display: none;
}

::selection {
	background: var(--brand);
	color: var(--background);
}

body {
	color: var(--foreground);
	background-image: linear-gradient(
			var(--background-secondary) 1px,
			transparent 1px
		),
		linear-gradient(
			90deg,
			var(--background-secondary) 1px,
			transparent 1px
		);
	background-size: var(--tile-size) var(--tile-size);
	background-color: var(--background);
}

h1,
h2,
h3,
h4 {
	@apply pb-quarter font-semibold lg:pb-0;
}

h1 {
	@apply text-oneAndHalf;
}

h2 {
	@apply text-half;
}

h3 {
	@apply text-third;
}

button,
p {
	@apply text-quarter;
}

button,
.button {
	@apply flex h-tile cursor-pointer flex-row items-center justify-center gap-quarter rounded-full border border-foreground bg-background uppercase hover:border-backgroundSecondary;
	@apply transition duration-300 ease-out;
}

input[type='text'],
input[type='date'],
input[type='email'] {
	@apply mb-quarter appearance-none border-b-2 border-t border-b-foreground border-t-backgroundSecondary bg-background;
	height: calc(var(--tile-size) / 4 * 3);
}
</style>
