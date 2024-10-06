<script>
	import Botoneira from './Botoneira.svelte';
	import Crono from './Crono.svelte';
	import Operacion from './Operacion.svelte';
	import Puntuacion from './Puntuacion.svelte';

	import { total, erros, tempo } from '$lib/stores.js';

    import { goto } from '$app/navigation';
	import { base } from '$app/paths'

    const max = 9;

	function shuffleArray(array) {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	let fin = 0;

	let operacions = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
	shuffleArray(operacions);
	let indice = 0;
	let opActual = operacions[0];
	erros.set(0);
	total.set(0);
	tempo.set(new Date());

	function updateScore(event) {
		total.update((n) => ++n);
		erros.update((n) => n + parseInt(event.detail.change));
        indice++;
		if (indice < operacions.length) {
			opActual = operacions[indice];
		} else {
			tempo.set(new Date() - $tempo);
			fin = 1;
            goto(base + '/');
        }
	}
</script>

<header>
	<Crono {fin} />
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
