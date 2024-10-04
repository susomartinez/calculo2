<script>
	import Resultado from '$lib/Resultado.svelte';
	import { page } from '$app/stores';

	let tempo = $page.url.searchParams.get('tempo');
	let erros = $page.url.searchParams.get('erros');

	let primeira = !(tempo || erros);
</script>

<header>
</header>
<main>
	{#if !primeira}
		<Resultado {tempo} {erros} />
	{/if}
	<a href="/operacion?max=9">{primeira ? 'Comezar' : 'Reintentar'}</a>
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
