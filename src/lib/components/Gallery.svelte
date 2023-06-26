<script lang="ts">
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
</script>

<div class="relative mx-auto flex max-w-7xl flex-col justify-center overflow-hidden py-2 lg:py-9">
	<div
		class="overlay absolute -inset-y-10 z-10 mx-auto w-full
		to-100%"
	/>
	<div class="pointer-events-none relative flex gap-10 overflow-hidden">
		<div
			class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 {gallery ===
			'smokers'
				? '[animation-direction:reverse]'
				: ''}"
		>
			{#each images as image}
				<img
					class="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
					src={image}
					alt=""
					loading="lazy"
				/>
			{/each}
		</div>
		<div
			aria-hidden="true"
			class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 {gallery ===
			'smokers'
				? '[animation-direction:reverse]'
				: ''}"
		>
			{#each images as image}
				<img
					class="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
					src={image}
					alt=""
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.overlay {
		background-image: linear-gradient(
			to right,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0) 10%,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0) 90%,
			rgba(255, 255, 255, 1) 100%
		);
	}
</style>
