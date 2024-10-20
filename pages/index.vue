<template>
	<main>
		<SectionHero>
			<template #title>
				<span>Hey, I&apos;m Dimm!</span>
				<span class="opacity-60"> Software Engineer</span>
				<span> and </span>
				<span class="opacity-60">Product Designer</span>
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
}

div,
section,
header,
footer,
nav {
	@apply flex flex-col;
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

button {
	@apply uppercase;
}

input[type='text'],
input[type='date'],
input[type='email'] {
	@apply mb-quarter appearance-none border-b-2 border-t border-b-foreground border-t-backgroundSecondary bg-background;
	height: calc(var(--tile-size) / 4 * 3);
}
</style>
