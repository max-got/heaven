<script lang="ts">
	import { ADDRESS, CONTACT_INFORMATIONS } from '$constants';
	import { scrollFadeIn } from '$utils/actions/scrollFadeIn';
	import Cta from './primitives/CTA.svelte';
</script>

<div
	class="heaven-shadow bg relative mx-auto max-w-3xl rounded-xl text-center"
	use:scrollFadeIn={{ out_animation: true }}
>
	<div class="absolute top-0 flex w-full justify-center">
		<div
			class="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000"
		/>
	</div>
	<div
		class="flex h-full items-center justify-center rounded-md border border-orange-300 bg-white px-3 py-12 dark:border-purple-300 dark:bg-black"
	>
		<div class=" mx-auto flex max-w-6xl flex-col space-y-8 font-display text-2xl lg:text-4xl">
			<div class="space-y-4">
				<p class="font-display">{ADDRESS.street}, {ADDRESS.houseNumber}</p>
				<p class="font-display">{ADDRESS.zipCode}, {ADDRESS.city}</p>
				<p class="font-display">{ADDRESS.additional}</p>
			</div>
			<a href={CONTACT_INFORMATIONS.mail.href}>{CONTACT_INFORMATIONS.mail.text}</a>
			<a href={CONTACT_INFORMATIONS.phone.href}>{CONTACT_INFORMATIONS.phone.text}</a>
			<div class="mt-6 flex text-xl">
				<Cta
					class="mx-auto"
					href={'https://www.google.com/maps/dir//Brandenburger%20Stra%C3%9Fe%204,%20Potsdam'}
					text={'Anfahrt'}
					color={'orange'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				/>
			</div>
		</div>
	</div>
</div>
