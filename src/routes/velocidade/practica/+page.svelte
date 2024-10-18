<script>
	import Botoneira from './Botoneira.svelte';
	import Crono from '../Crono.svelte';
	import Operacion from '../Operacion.svelte';
	import Puntuacion from '../Puntuacion.svelte';

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
	let solucion = false;
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

	function touchmove(e) {
		e.preventDefault();
		solucion = true;
	}

	let inicioArrastre = 0;
	let coordenadaX = 0;
	function touchStart(e){
		// Gardar coordenadas iniciais e momento
		inicioArrastre = e.timeStamp;
		coordenadaX = e.clientX;
		solucion = true;
	}
	function touchEnd(e){
		// Comprobar que non fose un erro (mínimo 100 ms de arrastre ou desprazamento de menos de 80px)
		solucion = false;
		if (e.timeStamp - inicioArrastre > 100) {
			if (Math.abs(e.clientX - coordenadaX) > 80) {
				const resultado = e.clientX - coordenadaX > 0 ? 0 : 1;
				updateScore({detail: {change: resultado}});
			}
		}
	}
</script>

<header>
	<Crono {fin} />
	<Puntuacion {total} erros={$errosVelocidade} />
</header>
<main on:pointerdown={touchStart} on:pointerup={touchEnd}>
	<section>
		<Operacion {max} {operacions} {indice} {solucion} />
		<Botoneira {solucion} />
	</section>
</main>

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
