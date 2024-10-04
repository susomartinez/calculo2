<script>
	import Crono from '$lib/Crono.svelte';
	import Operacion from '$lib/Operacion.svelte';
</script>

<header>
	<Crono />
	<!--Score client:load /-->
</header>
<main>
	<Operacion max={9} />
	<!--ButtonGroup /-->
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100svh;
		gap: 2rem;
		padding: 1rem;
	}
</style>
