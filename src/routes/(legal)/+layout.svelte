<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="_legal mx-auto max-w-prose">
	<slot />
</section>

<style lang="postcss">
	._legal :global(h1) {
		@apply mb-6;
	}
	._legal :global(h2),
	._legal :global(h3),
	._legal :global(h4),
	._legal :global(h5) {
		@apply mb-4 text-xl;
	}
	._legal :global(h1) {
		@apply !text-2xl;
	}
	._legal :global(p) {
		@apply mb-4 max-w-prose leading-relaxed dark:text-white-700;
	}
	._legal :global(ul) {
		@apply list-inside list-disc;
	}
</style>
