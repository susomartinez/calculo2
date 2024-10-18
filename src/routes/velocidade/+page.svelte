<script>
	import Botoneira from './Botoneira.svelte';
	import Crono from './Crono.svelte';
	import Operacion from './Operacion.svelte';
	import Puntuacion from './Puntuacion.svelte';

	import { errosVelocidade, tempoVelocidade } from '$lib/stores.js';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const max = 9;

	function shuffleArray(array) {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	let fin = 0;
	let total = 0;

	let operacions = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
	//let operacions = [0, 1, 2, 3];
	shuffleArray(operacions);
	let indice = 0;
	errosVelocidade.set(0);
	tempoVelocidade.set(new Date());

	function updateScore(event) {
		total++;
		errosVelocidade.update((n) => n + parseInt(event.detail.change));
		if (indice >= operacions.length - 1) {
			tempoVelocidade.set(new Date() - $tempoVelocidade);
			fin = 1;
			goto(base + '/');
		} else {
			indice++;
		}
	}

	function onKeyDown(e) {
		const mockEvent = {
			detail: {
				change: 0
			}
		};
		switch (e.keyCode) {
			case 37: // Frecha esquerda
				mockEvent.detail.change = 1;
				updateScore(mockEvent);
				break;
			case 39: // Frecha derecha
				updateScore(mockEvent);
				break;
		}
	}
</script>

<header>
	<Crono {fin} />
	<Puntuacion {total} erros={$errosVelocidade} />
</header>
<main>
	<section>
		<Operacion {max} {operacions} {indice} solucion={true} />
		<Botoneira on:updateScore={updateScore} />
	</section>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	main {
		height: 100%;
	}

	section {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>
