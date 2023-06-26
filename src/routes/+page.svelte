<script lang="ts">
	import { ADDRESS, QUESTIONS_AND_ANSWERS } from '$constants';
	import Card from '$lib/components/primitives/Card.svelte';
	import { Instagram } from '$icons';

	import smokers_heaven_logo from '$assets/logo/logo-smokers-heaven.png?w=300&imagetools';
	import writers_heaven_logo from '$assets/logo/logo-writers-heaven.png?w=300&imagetools';
	import FAQ from '$lib/components/FAQ.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';
	import Map from '$lib/components/Map.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
</script>

<svelte:head>
	<title>Writers Heaven & Smokers Heaven | Grafitti, Streetart & Raucherzubehör in Potsdam</title>
	<meta
		name="description"
		content="
Willkommen auf der Homepage von Writers Heaven und Smokers Heaven! Entdecke unsere einzigartigen Läden im Sperlingshof, einem Hinterhof in der Brandenburger Straße in Potsdam. Writers Heaven bietet eine breite Auswahl an Grafitti & Streetart Zubehör, Dosen, Marker, Sketchbooks und Stickern. Smokers Heaven hingegen ist dein Paradies für Raucherzubehör, Shishas, Shisha Tabak, E-Zigaretten, Liquids und CBD-Produkte. Besuche uns vor Ort, um in die Welt der Kreativität und des Rauchens einzutauchen. Wir bieten eine vielfältige Produktpalette an. Erfahre mehr über unsere Produkte und Angebote!
	"
	/>
</svelte:head>

<section class="border-b border-t border-black py-2 dark:border-orange">
	<div class="container text-center">
		<h1
			class="inline-flex animate-text-gradient bg-gradient-to-r from-purple via-orange to-purple bg-[200%_auto] bg-clip-text text-4xl text-transparent dark:from-orange-400 dark:via-purple-400 dark:to-orange-400"
		>
			Heaven
		</h1>
		<h2 class="before:content-['++_'] after:content-['_++']">Wir sind für euch da</h2>
		<div class="my-2 space-y-1">
			<h3 class="text-xl">Wo?</h3>

			<a
				href="https://www.google.com/maps/dir//Brandenburger%20Stra%C3%9Fe%204,%20Potsdam"
				class="mx-auto flex w-fit flex-col text-black no-underline dark:text-white"
			>
				<p>{ADDRESS.street} {ADDRESS.houseNumber}<br /></p>
				<p>
					{ADDRESS.zipCode}
					{ADDRESS.city}<br />
					<span class="text-purple dark:text-orange">{ADDRESS.additional}</span>
				</p>
			</a>
		</div>
	</div>
	<OpeningHours />
</section>

<section class="border-b border-black py-24 dark:border-orange">
	<Gallery gallery={'writers'} />
	<div class="container grid max-w-4xl gap-4 md:grid-cols-2">
		<Card color={'orange'} class=" overflow-hidden">
			<span slot="header" class="relative contents">
				<h3 class="text-lg">Writers Heaven</h3>
				<a
					href="https://www.instagram.com/writers_heaven_potsdam/"
					target="_blank"
					rel="noopener noreferrer"
					class="group"
				>
					<Instagram class="h-7 w-7 fill-orange  transition-all hover:scale-95 hover:fill-orange-300" />
				</a>
			</span>

			<p class="font-display text-lg leading-[3rem] text-black dark:text-black-200">
				Grafitti & Streetart<br />
				Dosen & Marker<br />
				Sketchbooks & Sticker<br />
				<span class="text-sm">und vieles mehr...</span>
			</p>
			<div class="absolute inset-0 -z-10 opacity-25 mix-blend-luminosity">
				<img src={writers_heaven_logo} alt="Writers Heaven Logo" class="h-auto w-full" loading="lazy" />
			</div>
		</Card>
		<Card color={'purple'} class="overflow-hidden">
			<span slot="header" class="contents">
				<h3 class="text-lg">Smokers Heaven</h3>
				<a
					href="https://www.instagram.com/writers_heaven_potsdam/"
					target="_blank"
					rel="noopener noreferrer"
					class="group"
				>
					<Instagram class="h-7 w-7 fill-purple  transition-all hover:scale-95 hover:fill-purple-300" />
				</a>
			</span>
			<p class="font-display text-lg leading-[3rem] text-black dark:text-black-200">
				Shishas & Shisha Tabak <br />
				E-Zigaretten & Liquids<br />
				CBD Blüten, Öle & Liquids<br />
				<span class="text-sm">und vieles mehr...</span>
			</p>
			<div
				class="absolute inset-0 -z-10 -translate-y-8 opacity-25 mix-blend-luminosity transition-all"
			>
				<img src={smokers_heaven_logo} alt="" class="h-auto w-full" loading="lazy" />
			</div>
		</Card>
	</div>
	<Gallery gallery={'smokers'} />
</section>
<section class="border-b border-black dark:border-orange">
	<div class="container max-w-3xl">
		<h2 class="mx-auto mb-6 text-center">Fragen?</h2>
		<FAQ faq={QUESTIONS_AND_ANSWERS} />
	</div>
</section>

<section>
	<div class="container">
		<h2 class="mx-auto mb-6 text-center">Karte</h2>
		<Map />
	</div>
</section>
