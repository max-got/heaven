<script lang="ts">
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark' = 'dark';

	const toggle_theme = () => {
		const new_theme = theme === 'dark' ? 'light' : 'dark';
		theme = new_theme;
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);
		localStorage.setItem('heaven:theme', JSON.stringify({ current: new_theme }));
	};

	onMount(() => {
		localStorage.setItem('heaven:theme', JSON.stringify({ current: theme }));
	});
</script>

<svelte:head>
	<script>
		if (typeof localStorage !== 'undefined' && localStorage.getItem('heaven:theme')) {
			theme = JSON.parse(localStorage.getItem('heaven:theme'))?.current;
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		} else {
			theme = 'light';
		}

		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);
	</script>
</svelte:head>

<button
	on:click={toggle_theme}
	class="relative flex h-8 w-16 rounded-md border border-purple-600 bg-white bg-gradient-to-r from-white-400 to-purple-400/20 px-2
    transition-colors duration-100 dark:border-orange-800 dark:bg-black dark:from-orange/20 dark:to-black"
	aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
>
	<span
		class="absolute inset-x-1 flex h-full items-center transition-all
    {theme === 'dark' ? 'translate-x-[30px]' : 'translate-x-0'}
    "
	>
		{#if theme === 'dark'}
			<span class="rounded-full bg-purple-300 fill-black p-[3px] transition-transform [&_svg]:w-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						d="m21.067 11.857l-.642-.388l.642.388Zm-8.924-8.924l-.388-.642l.388.642ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118a.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082a.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606l1.284.776Z"
					/></svg
				>
			</span>
		{:else}
			<span
				class="rounded-full bg-orange-400 stroke-black p-[3px] transition-transform [&_svg]:w-4"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><g fill="none" stroke-width="1.5"
						><circle cx="12" cy="12" r="6" /><path
							stroke-linecap="round"
							d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393"
						/></g
					></svg
				>
			</span>
		{/if}
	</span>
</button>
