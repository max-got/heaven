<script lang="ts">
	export let color: 'purple' | 'orange' = 'purple';
	export let text = 'Click Me';
	export { classes as class };
	let classes = '';
	let href = '';

	let color_theme = {
		purple: 'from-purple-200 to-purple-600 dark:from-purple-100 dark:to-purple-400',
		orange: 'from-orange-200 to-orange-600'
	} as const;
</script>

<a
	class="relative w-fit rounded-md border border-black-400 bg-black px-6 py-2 font-medium text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black
    dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white {classes}"
	{href}
	{...$$restProps}
>
	<div
		class="absolute -inset-0.5 -z-10 animate-pulse-slow rounded-lg bg-gradient-to-b opacity-75 blur-md {color ===
		'purple'
			? color_theme.purple
			: color_theme.orange}"
	/>
	<span class="flex items-center gap-2">
		<slot name="icon-before" />
		{text}
		<slot name="icon-after" />
	</span>
</a>
