<script>
    export let erros;
    export let tempo;

    const PENALIZACION = 5*100; // Penalización por fallo en centésimas de segundo

    let fallos = parseInt(erros);
    let tempoNum = parseInt(tempo);

    tempoNum += fallos * PENALIZACION;

    const minutos = Math.floor(tempoNum/6000);
    const segundos = Math.floor(tempoNum/100)%60 > 9 ? Math.floor(tempoNum/100)%60 : '0'+Math.floor(tempoNum/100)%60;
    const centesimas = tempoNum % 100 > 9 ? tempoNum % 100 : '0' + tempoNum % 100;

    const tempoFormateado = `${minutos}:${segundos}:${centesimas}`;
</script>
  
<h1>Último intento: {tempoFormateado} {#if fallos} ({fallos} {fallos == 1 ? 'fallo' : 'fallos'}){/if}</h1>
    
<style>
    h1 {
        color: white;
    }
</style>