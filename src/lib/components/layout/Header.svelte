<script lang="ts">
	import logo from '$assets/logo/logo-writersheaven-smokersheaven.png?w=360&h=360&fit=contain&imagetools';
	import InfoBanner from './InfoBanner.svelte';
</script>

<InfoBanner />
<header class="py-8">
	<div class="container flex">
		<a href="/" class="group mx-auto">
			<img
				src={logo}
				alt="logo"
				class="w-44 transition-all group-hover:scale-[0.98] group-hover:drop-shadow-lg"
				loading="eager"
				width="180"
				height="180"
			/>
			<span class="sr-only">Startseite</span>
		</a>
	</div>
</header>
