<script lang="ts">
	import ThemeChange from '../utils/ThemeChange.svelte';
</script>

<footer class="mt-auto border-t border-black py-4">
	<div class="container flex flex-col items-center space-y-2">
		<ThemeChange />
		<nav class="mx-auto">
			<ul class="flex gap-4">
				<li>
					<a href="/impressum">Impressum</a>
				</li>
				<li>
					<a href="/datenschutzerklaerung">Datenschutz</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
