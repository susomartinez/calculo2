<script>
	export let fin;
	import { tempo } from './stores.js';

	tempo.set(0);
	let minutos, segundos, centesimas = 0;

	const interval = setInterval(() => {
		tempo.update((n) => ++n);
		minutos = Math.floor($tempo/6000);
		segundos = Math.floor($tempo/100)%60 > 9 ? Math.floor($tempo/100)%60 : '0'+Math.floor($tempo/100)%60;
		centesimas = $tempo % 100 > 9 ? $tempo % 100 : '0' + ($tempo % 100);
	}, 10);

	$: if (parseInt(fin)) clearInterval(interval);
</script>

<div class="crono">
	<span class="minutos">{minutos}</span>:<span class="segundos">{segundos}</span><span class="centesimas">:{centesimas}</span>
</div>

<style>
	.crono {
		font-size: 2rem;
		color: white;
	}
	.centesimas {
		font-size: 1.1rem;
	}
</style>
