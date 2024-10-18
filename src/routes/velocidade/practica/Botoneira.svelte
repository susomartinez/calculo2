<script>
	export let solucion = false;
</script>

<div class="buttonWrapper">
	{#if solucion}
		<button class="botonResultado">❌</button>
		<button class="botonResultado dereita">✅</button>
	{/if}
	<button class="button" type="button"></button>
</div>

<style>
	.buttonWrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: white;
	}

	.button {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		order: 1;
	}

	.botonResultado {
		font-size: xx-large;
		border: 0;
		background-color: transparent;
	}

	.dereita {
		order: 2;
	}
</style>
