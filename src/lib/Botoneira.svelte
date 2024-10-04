<script>
    import BotonOperacion from "./BotonOperacion.svelte";
    
</script>

<div class="buttonWrapper">
	<BotonOperacion label="Fallo ❌" action=1 on:updateScore />
    <BotonOperacion label="Acierto ✅" action=0 on:updateScore />
</div>

<style>
	.buttonWrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8rem;
        color: white;
	}
</style>