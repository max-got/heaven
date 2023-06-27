<script lang="ts">
	import { stagger, inView, timeline, type TimelineDefinition } from 'motion';
	import { onMount } from 'svelte';

	export let gallery: 'writers' | 'smokers' = 'writers';

	import gallery_1_writers from '$assets/writers_heaven/gallery_1.jpg?h=400&fit=contain&imagetools';
	import gallery_2_writers from '$assets/writers_heaven/gallery_2.jpg?h=400&fit=contain&imagetools';
	import gallery_3_writers from '$assets/writers_heaven/gallery_3.jpg?h=400&fit=contain&imagetools';
	import gallery_4_writers from '$assets/writers_heaven/gallery_4.jpg?h=400&fit=contain&imagetools';
	import gallery_5_writers from '$assets/writers_heaven/gallery_5.jpg?h=400&fit=contain&imagetools';

	import gallery_1_smokers from '$assets/smokers_heaven/gallery_1.jpg?h=400&fit=contain&imagetools';
	import gallery_2_smokers from '$assets/smokers_heaven/gallery_2.jpg?h=400&fit=contain&imagetools';
	import gallery_3_smokers from '$assets/smokers_heaven/gallery_3.jpg?h=400&fit=contain&imagetools';
	import gallery_4_smokers from '$assets/smokers_heaven/gallery_4.jpg?h=400&fit=contain&imagetools';
	import gallery_5_smokers from '$assets/smokers_heaven/gallery_5.jpg?h=400&fit=contain&imagetools';

	const images_writers = [
		gallery_1_writers,
		gallery_2_writers,
		gallery_3_writers,
		gallery_4_writers,
		gallery_5_writers
	];

	const images_smokers = [
		gallery_1_smokers,
		gallery_2_smokers,
		gallery_3_smokers,
		gallery_4_smokers,
		gallery_5_smokers
	];

	const images = gallery === 'writers' ? images_writers : images_smokers;

	let image_wrapper_1: HTMLDivElement;
	let image_wrapper_2: HTMLDivElement;

	onMount(() => {
		const sequence = [
			[
				Array.from(image_wrapper_1.children),
				{ opacity: 1 },
				{ delay: stagger(0.3, { from: 'center' }), easing: 'ease-in' }
			],
			[
				Array.from(image_wrapper_2.children),
				{ opacity: 1 },
				{ delay: stagger(0.3, { from: 'center' }), easing: 'ease-in' }
			]
		] as TimelineDefinition;

		inView(
			image_wrapper_1,
			() => {
				timeline(sequence);
			},
			{ margin: '0px 0px -100px 0px' }
		);
	});
</script>

<div
	class="group relative mx-auto my-4 flex max-w-7xl flex-col justify-center overflow-hidden py-2 lg:py-9"
>
	<div
		class="overlay absolute -inset-y-10
		z-10
		mx-auto
		w-full select-none
		bg-[linear-gradient(to_right,theme(colors.white.DEFAULT)_0%,transparent_10%,transparent,transparent_90%,theme(colors.white.DEFAULT)_100%)] to-100%
		dark:bg-[linear-gradient(to_right,theme(colors.black.DEFAULT)_0%,transparent_10%,transparent,transparent_90%,theme(colors.black.DEFAULT)_100%)]"
	/>
	<div class="relative flex gap-10 overflow-hidden">
		<div
			class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10
			group-hover:[animation-play-state:paused]
			{gallery === 'smokers' ? '[animation-direction:reverse]' : ''}"
			bind:this={image_wrapper_1}
		>
			{#each images as image, i}
				<img
					class="z-20 max-w-[clamp(15rem,28vmin,20rem)] rounded-md object-cover opacity-0 shadow-md
					{i % 2 === 0 ? 'aspect-square' : 'aspect-video'}"
					src={image}
					alt=""
					loading="lazy"
					width="400"
					height="400"
				/>
			{/each}
		</div>
		<div
			aria-hidden="true"
			class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 group-hover:[animation-play-state:paused] {gallery ===
			'smokers'
				? '[animation-direction:reverse]'
				: ''}"
			bind:this={image_wrapper_2}
		>
			{#each images as image, i}
				<img
					class="max-w-[clamp(15rem,28vmin,20rem)] rounded-md object-cover opacity-0 shadow-md
					{i % 2 === 0 ? 'aspect-square' : 'aspect-video'}
					"
					src={image}
					alt=""
					loading="lazy"
					width="400"
					height="400"
				/>
			{/each}
		</div>
	</div>
</div>
