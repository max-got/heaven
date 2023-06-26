<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { ADDRESS } from '$constants';
	import type L from 'leaflet';

	import logo from '$assets/logo/logo-writersheaven-smokersheaven.png?w=150&imagetools';
	import Cta from './primitives/CTA.svelte';

	let mapElement: HTMLDivElement;
	let map: L.Map | null = null;

	const pop_up = `
        <div class="flex flex-col dark:bg-black text-white border border-orange rounded px-4 py-2 writers-heaven_shadow">
            <img src="${logo}" alt="Logo" class="w-20 h-20 mx-auto object-contain" loading="lazy">
            <div class="flex flex-col items-center justify-center [&_p]:!my-0">
                <p class="text-center text-lg font-bold">Heaven</p>
                <p class="text-center text-sm">${ADDRESS.street} ${ADDRESS.houseNumber}</p>
                <p class="text-center text-sm">${ADDRESS.zipCode} ${ADDRESS.city}</p>
                <p class="text-center text-sm">${ADDRESS.city}</p>
            </div>
            <a href="https://www.google.com/maps/dir//Brandenburger%20Stra%C3%9Fe%204,%20Potsdam" target="_blank" rel="noopener noreferrer" class="text-center text-sm mt-2 !text-orange font-bold no-underline">Route</a>
        </div>
    `;

	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');
			const COORDINATES = L.latLng([52.399225617697596, 13.049215453373389]);
			const BOUNDS = L.latLngBounds([52.4672, 12.930588], [52.24156, 13.283253]);

			map = L.map(mapElement, {
				maxBounds: BOUNDS,
				maxBoundsViscosity: 1.0,
				minZoom: 13,
				bounceAtZoomLimits: true
			}).setView(COORDINATES, 18);

			L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				bounds: BOUNDS
			}).addTo(map);

			const myIcon = L.icon({
				iconUrl: '/marker.png',
				iconSize: [40, 40],
				iconAnchor: [22, 80],
				popupAnchor: [-3, -76]
			});

			L.marker(COORDINATES, { icon: myIcon })
				.bindPopup(pop_up, {
					closeOnEscapeKey: true,
					closeOnClick: true
				})
				.addTo(map)
				.openPopup();
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div
	class="smokers-heaven_shadow mx-auto aspect-square max-w-2xl overflow-hidden rounded-lg bg-black"
>
	<div bind:this={mapElement} class="h-full bg-black" />
</div>

<style>
	@import 'leaflet/dist/leaflet.css';
	:global(.leaflet-popup-content-wrapper) {
		all: unset;
	}
	:global(.leaflet-popup-tip-container) {
		margin-top: -13px;
	}
	:global(.leaflet-popup-tip) {
		@apply bg-orange;
	}
</style>
