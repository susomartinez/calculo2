<script>
    export let erros;
    export let tempo;

    let fallos = parseInt(erros);

    const minutos = Math.floor(tempo/6000);
    const segundos = Math.floor(tempo/100)%60 > 9 ? Math.floor(tempo/100)%60 : '0'+Math.floor(tempo/100)%60;
    const centesimas = tempo % 100 > 9 ? tempo % 100 : '0' + tempo % 100;

    const tempoFormateado = `${minutos}:${segundos}:${centesimas}`;
</script>
  
<h1>Último intento: {tempoFormateado} {#if fallos} ({fallos} {fallos == 1 ? 'fallo' : 'fallos'}){/if}</h1>
    
<style>
    h1 {
        color: white;
    }
</style>