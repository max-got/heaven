<script lang="ts">
	import { animate, stagger, inView } from 'motion';
	import { onMount } from 'svelte';
	import Cta from './primitives/CTA.svelte';
	import { CONTACT_INFORMATIONS, type QandA } from '$constants';

	let wrapper: HTMLDivElement;
	export let faq: QandA[];

	//type FAQ, which is eather question:string and answer:string or question:string and html:string

	onMount(() => {
		inView(
			wrapper,
			() => {
				animate(
					Array.from(wrapper.children),
					{ opacity: 100 },
					{ delay: stagger(0.3), easing: 'ease-in' }
				);
			},
			{ margin: '0px 0px -200px 0px' }
		);
	});
</script>

<div bind:this={wrapper}>
	{#each faq as item, i}
		<div
			class="collapse-arrow collapse my-2 rounded-md border border-orange/30 bg-white bg-gradient-to-r from-white-400 to-purple-400/20 bg-[200%_auto] hover:bg-[150%_auto] dark:border-purple-800 dark:bg-black dark:from-black dark:to-purple/20 dark:hover:bg-[150%_auto]"
			style="opacity: 0;"
		>
			<label for="faq-{i}" class="sr-only">
				{item.question}
			</label>
			<input type="radio" name="faq" checked={i === 0} id="faq-{i}" aria-labelledby="faq-{i}" />
			<div class="collapse-title font-display text-xl">{item.question}</div>
			<div class="collapse-content text-lg dark:text-black-200">
				{#if 'answer' in item}
					<p>{item.answer}</p>
				{:else}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html item.html}
				{/if}
			</div>
		</div>
	{/each}
	<div class="flex flex-col items-center justify-center gap-4 text-center text-sm opacity-0">
		<p class="max-w-prose text-black-700 dark:text-black-200">
			Wenn du noch weitere Fragen hast, kannst du uns gerne eine E-Mail schreiben, uns auf Instagram
			besuchen oder einfach anrufen.
		</p>
		<Cta
			color={'orange'}
			text={CONTACT_INFORMATIONS.mail.text}
			href={CONTACT_INFORMATIONS.mail.href}
		/>
	</div>
</div>
