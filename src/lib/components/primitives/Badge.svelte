<script lang="ts">
	export { classes as class };
	let classes = '';
</script>

<span
	class="inline-flex animate-background-shine items-center justify-center rounded-full border border-purple-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1
    text-sm font-medium text-purple-300 backdrop-blur-3xl transition-all duration-500 {classes}"
>
	<slot />
</span>
