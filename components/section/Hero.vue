<template>
	<section>
		<div
			class="hero cont-m justify-between gap-half border-b border-foreground pb-tile pt-double lg:gap-tile"
		>
			<div class="round-h flex-shrink-0">
				<h1 class="animate-fade-in opacity-0">
					<slot name="title" />
				</h1>
			</div>
			<div
				class="justify-between gap-half lg:flex-row lg:items-center"
			>
				<p
					class="animate-fade-in opacity-0 lg:h-auto lg:w-sextuple"
				>
					<slot name="description" />
				</p>
				<button
					class="flex h-tile w-full animate-fade-in flex-row items-center justify-center gap-half rounded-full bg-foreground uppercase text-background opacity-0 lg:w-quad"
				>
					<slot name="button" />
				</button>
			</div>
		</div>
	</section>
</template>
