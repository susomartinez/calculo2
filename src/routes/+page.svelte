<script>
	import Resultado from './Resultado.svelte';
	import { tempo, erros } from '$lib/stores.js';
	import { base } from '$app/paths';

	let primeira = $tempo == 0;
</script>

<header></header>
<main>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32"
			><path
				fill="#ffffff"
				d="m21.707 20.293l-5-5a.996.996 0 0 0-1.414 0L2 28.586L3.414 30L16 17.414L19.586 21L14 26.586L15.414 28l2.292-2.292l4.001-4.001a.997.997 0 0 0 0-1.414"
			/><path
				fill="#ffffff"
				d="M28.586 9L23 14.586l-6.001-6.002A2 2 0 0 0 15.577 8a2 2 0 0 0-1.407.584L8 14.76l1.414 1.414l6.17-6.175l6.71 6.708a.997.997 0 0 0 1.413 0L30 10.414z"
			/><path
				fill="#ffffff"
				d="M22.5 9C20.57 9 19 7.43 19 5.5S20.57 2 22.5 2S26 3.57 26 5.5S24.43 9 22.5 9m0-5c-.827 0-1.5.673-1.5 1.5S21.673 7 22.5 7S24 6.327 24 5.5S23.327 4 22.5 4"
			/></svg
		>
	</div>
	<a href="{base}/velocidade" class="boton">Comezar</a>
	<a href="{base}/velocidade/practica"
		><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"
			><g
				fill="none"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				><path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 14l4 1l.5-.5M12 18v-3l-3-2.923L9.75 7" /><path
					d="M6 10V8l4-1l2.5 2.5l2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1l1-11l2-1"
				/></g
			></svg
		></a
	>
	<div>
		{#if !primeira}
			<Resultado tempo={$tempo} erros={$erros} />
		{/if}
	</div>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"
			><circle cx="17" cy="4" r="2" fill="#ffffff" /><path
				fill="#ffffff"
				d="M15.777 10.969a2.01 2.01 0 0 0 2.148.83l3.316-.829l-.483-1.94l-3.316.829l-1.379-2.067a2 2 0 0 0-1.272-.854l-3.846-.77a2 2 0 0 0-2.181 1.067l-1.658 3.316l1.789.895l1.658-3.317l1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196l5.169 1.034l1.816 5.449l1.896-.633l-1.815-5.448a2.01 2.01 0 0 0-1.506-1.33l-3.039-.607l1.772-2.954z"
			/></svg
		>
	</div>
	<a href="{base}/mediofondo" class="boton">Comezar</a>
	<a href="{base}/mediofondo/practica"
		><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"
			><g
				fill="none"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				><path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 14l4 1l.5-.5M12 18v-3l-3-2.923L9.75 7" /><path
					d="M6 10V8l4-1l2.5 2.5l2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1l1-11l2-1"
				/></g
			></svg
		></a
	>
	<div>
		{#if !primeira}
			<Resultado tempo={$tempo} erros={$erros} />
		{/if}
	</div>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 48 48"
			><g fill="#ffffff"
				><path
					d="M30.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-9.04 4.282c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a54 54 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49 49 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918c.225.294.364.644.403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037l-.084-.172l-4.242-5.52a2 2 0 0 1-.282-1.934z"
				/><path
					d="m18.432 29.007l-1.472 3.96l-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028z"
				/></g
			></svg
		>
	</div>
	<div class="boton">Proximamente</div>
	<a href="{base}/fondo/practica" style="pointer-events: none"
		><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"
			><g
				fill="none"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				><path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 14l4 1l.5-.5M12 18v-3l-3-2.923L9.75 7" /><path
					d="M6 10V8l4-1l2.5 2.5l2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1l1-11l2-1"
				/></g
			></svg
		></a
	>
	<div>
		{#if !primeira}
			<Resultado tempo={$tempo} erros={$erros} />
		{/if}
	</div>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 14 14"
			><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
				><path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7" /><path
					d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z"
				/></g
			></svg
		>
	</div>
	<div class="boton">Proximamente</div>
	<a href="{base}/tiro/practica" style="pointer-events: none"
		><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"
			><g
				fill="none"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				><path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 14l4 1l.5-.5M12 18v-3l-3-2.923L9.75 7" /><path
					d="M6 10V8l4-1l2.5 2.5l2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1l1-11l2-1"
				/></g
			></svg
		></a
	>
	<div>
		{#if !primeira}
			<Resultado tempo={$tempo} erros={$erros} />
		{/if}
	</div>
</main>

<style>
	main {
		display: grid;
		grid: auto auto auto auto / auto auto auto auto;
		align-items: center;
		justify-items: center;
		height: 100svh;
		gap: 2rem;
		padding: 1rem;
	}
	.boton {
		background-color: white;
		border: 1px solid white;
		padding: 0.625rem 1.25rem;
		border-radius: 0.9375rem;
		font-size: 3rem;
		color: black;
	}
</style>
