<script lang="ts">
	import { scrollFadeIn } from '$utils/actions/scrollFadeIn';

	export let color: 'purple' | 'orange' = 'orange';
	export { classes as class };
	let classes = '';

	let div_classes =
		color === 'orange'
			? 'writers-heaven writers-heaven_shadow'
			: 'smokers-heaven smokers-heaven_shadow';

	let div: HTMLDivElement;

	let position = { x: 0, y: 0 };

	let opacity = 0;

	const handleMouseMove = (e: MouseEvent) => {
		if (!div) return;

		const rect = div.getBoundingClientRect();

		position = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
	};

	const handleMouseEnter = () => {
		opacity = 1;
	};

	const handleMouseLeave = () => {
		opacity = 0;
	};
</script>

<div
	id="card"
	bind:this={div}
	on:mousemove={handleMouseMove}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	use:scrollFadeIn={{ out_animation: true }}
	role="button"
	tabindex="-1"
	class="cursor-default transition-transform duration-500 hover:-translate-y-1 {classes}"
>
	<div class="relative flex flex-col gap-4 rounded-md border px-4 pb-4 pt-2 {div_classes}">
		<div
			class="inline-flex animate-text-gradient justify-between bg-gradient-to-r bg-[200%_auto] bg-clip-text text-base text-transparent md:text-lg lg:text-xl
            {color === 'orange'
				? 'from-orange-400 via-orange-600 to-orange-400'
				: 'from-purple-400 via-purple-600 to-purple-400'}"
		>
			<slot name="header" />
		</div>
		<slot />

		<slot name="footer" />
		<div
			class="pointer-events-none absolute inset-0 opacity-0 transition duration-300"
			style={`
			opacity: ${opacity};
			background: radial-gradient(600px circle at ${position.x}px ${position.y}px, ${
				color === 'orange' ? 'var(--o)' : 'var(--p)'
			}, transparent 40%);
		`}
		/>
	</div>
</div>

<style lang="postcss">
	#card {
		--p: theme('colors.purple.300/0.15');
		--p-light: theme('colors.purple.300/0.2');
		--o: theme('colors.orange.300/0.15');
		--o-light: theme('colors.orange.300/0.2');
	}
</style>
