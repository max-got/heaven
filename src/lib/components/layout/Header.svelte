<script lang="ts">
	import avif from '$assets/logo/logo-writersheaven-smokersheaven.png?w=400;600;780&format=avif&as=srcset&imagetools';
	import webp from '$assets/logo/logo-writersheaven-smokersheaven.png?w=400;600;780&format=webp&as=srcset&imagetools';
	import fallback from '$assets/logo/logo-writersheaven-smokersheaven.png?w=400&imagetools';

	import InfoBanner from './InfoBanner.svelte';
</script>

<InfoBanner />
<header class="py-8">
	<div class="container flex">
		<a href="/" class="group mx-auto">
			<picture>
				<source srcset="${avif}" type="image/avif" />
				<source srcset="${webp}" type="image/webp" />
				<img
					src="${fallback}"
					alt="logo"
					class="w-44 transition-all group-hover:scale-[0.98] group-hover:drop-shadow-lg"
					loading="eager"
					width="180"
					height="180"
				/>
			</picture>

			<span class="sr-only">Startseite</span>
		</a>
	</div>
</header>
