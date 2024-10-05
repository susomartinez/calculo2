<script>
	import Resultado from '$lib/Resultado.svelte';
	import { page } from '$app/stores';
	import { tempo, erros } from '$lib/stores.js';

	let primeira = ($tempo == 0);
</script>

<header>
</header>
<main>
	{#if !primeira}
		<Resultado tempo={$tempo} erros={$erros} />
	{/if}
	<p>Tempo: {$tempo} - Erros: {$erros}</p>
	<a href="/operacion">{primeira ? 'Comezar' : 'Outra vez'}</a>
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
