<script>
	export let fin;

	let crono = 0;
	let minutos, segundos, decimas = 0;

	const temporizador = setInterval(() => {
		crono++;
		minutos = Math.floor(crono/600);
		segundos = Math.floor(crono/10)%60 > 9 ? Math.floor(crono/10)%60 : '0'+Math.floor(crono/10)%60;
		decimas = crono % 10;
	}, 100);

	$: if (parseInt(fin)) clearInterval(temporizador);
</script>

<div class="crono">
	<span class="minutos">{minutos}</span>:<span class="segundos">{segundos}</span><span class="decimas">:{decimas}</span>
</div>

<style>
	.crono {
		font-size: 2rem;
		color: white;
	}
	.decimas {
		font-size: 1.1rem;
	}
</style>
