<script>
	import Resultado from './Resultado.svelte';
	import { tempo, erros } from '$lib/stores.js';
	import { base } from '$app/paths'

	let primeira = ($tempo == 0);
</script>

<header>
</header>
<main>
	{#if !primeira}
		<Resultado tempo={$tempo} erros={$erros} />
	{/if}
	<a href="{base}/operacion">{primeira ? 'Comezar' : 'Outra vez'}</a>
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
	a {
		background-color: white;
    border: 1px solid white;
    padding: 0.625rem 1.25rem;
    border-radius: 0.9375rem;
	font-size: 3rem;
	color: black;;
	}
</style>
