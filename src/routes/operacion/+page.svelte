<script>
	import Botoneira from '$lib/Botoneira.svelte';
	import Crono from '$lib/Crono.svelte';
	import Operacion from '$lib/Operacion.svelte';
	import Puntuacion from '$lib/Puntuacion.svelte';

	import { total, erros } from '$lib/stores.js';

    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let max = $page.url.searchParams.get('max');

	function shuffleArray(array) {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	let operacions = [0, 1, 2, 3];
	shuffleArray(operacions);
	let indice = 0;
	let opActual = operacions[0];
	erros.set(0);
	total.set(0);

	function updateScore(event) {
		total.update((n) => ++n);
		erros.update((n) => n + parseInt(event.detail.change));
        indice++;
		if (indice < operacions.length) {
			opActual = operacions[indice];
		} else {
            goto('/?tempo=0&erros=' + $erros);
        }
	}
</script>

<header>
	<Crono />
	<Puntuacion />
</header>
<main>
	<Operacion {max} operacion={opActual} />
	<Botoneira on:updateScore={updateScore} />
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
