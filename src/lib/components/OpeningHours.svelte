<script lang="ts">
	import { OPENING_HOURS, currentlyOpen } from '$constants';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { stagger, timeline, type TimelineDefinition } from 'motion';

	let opening_hours_wrapper: HTMLDivElement;
	let wrapper: HTMLDivElement;

	$: is_open = false;
	let mounted = false;
	is_open = currentlyOpen();

	onMount(() => {
		mounted = true;

		const sequence = [
			[wrapper, { opacity: 100 }, { duration: 0.9 }],
			[
				Array.from(opening_hours_wrapper.children),
				{ opacity: 100 },
				{ delay: stagger(0.2), easing: 'ease-in', duration: 0.7 }
			]
		] as TimelineDefinition;
		//update 10 minutes
		setInterval(() => {
			is_open = currentlyOpen();
		}, 1000 * 60 * 10);

		timeline(sequence);
	});
</script>

<div id="openingHours" class="  mx-auto my-8 max-w-3xl rounded opacity-0" bind:this={wrapper}>
	<div class="heaven-gradient rounded p-[1px]">
		<div class="rounded bg-white px-2 py-4 dark:bg-black">
			<div class="relative font-display">
				<h2 class="text-center">Servicezeiten</h2>
				{#if mounted}
					<span
						class="absolute -top-7 right-0 inline-flex -translate-x-[5%] rotate-[10deg] animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,theme(colors.orange.200),45%,theme(colors.white.DEFAULT),55%,theme(colors.orange.200))] bg-[length:250%_100%] px-3 py-1 text-sm font-medium
					text-orange-800 backdrop-blur-3xl transition-all duration-500 hover:scale-[1.05] hover:shadow-lg hover:backdrop-blur-0 dark:border-purple-800 dark:bg-[linear-gradient(110deg,theme(colors.black.DEFAULT),45%,theme(colors.purple.800),55%,theme(colors.black.DEFAULT))] dark:text-purple-300 md:-top-3 md:-translate-x-1/2"
						transition:fade={{ delay: 2000 }}
					>
						{is_open ? 'Wir haben geöffnet!' : 'Zurzeit Geschlossen'}
					</span>
				{/if}
			</div>
			<div
				id="animationWrapper"
				bind:this={opening_hours_wrapper}
				class="mx-auto grid bg-primary text-primary-content md:grid-cols-2"
			>
				{#each Object.entries(OPENING_HOURS) as [day, hours]}
					<div class="stat text-center opacity-0 md:last-of-type:col-span-2 md:last-of-type:text-center">
						<div class="mb-1 font-display">{day}</div>
						<div class="text-2xl font-bold">
							{#if hours.opening === hours.closing}
								geschlossen
							{:else}
								{hours.opening} Uhr - {hours.closing} Uhr
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
