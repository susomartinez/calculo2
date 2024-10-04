<script>
    export let erros;
    export let tempo;

    let fallos = parseInt(erros);
</script>
  
<h1>Último intento: {tempo} {#if fallos} ({fallos} {fallos == 1 ? 'fallo' : 'fallos'}){/if}</h1>
    
<style>
    h1 {
        color: white;
    }
</style>