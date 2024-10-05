<script>
    export let erros;
    export let tempo;

    const PENALIZACION = 5*1000; // Penalización por fallo en milésimas de segundo

    let fallos = parseInt(erros);
    let tempoNum = parseInt(tempo);

    console.log(erros, tempo, typeof erros, typeof tempo);
    console.log(tempoNum, fallos);

    tempoNum += fallos * PENALIZACION;
    tempoNum = Math.round(tempoNum/10); // Pásase de milésimas a centésimas

    const minutos = Math.floor(tempoNum/6000);
    const segundos = Math.floor(tempoNum/100)%60 > 9 ? Math.floor(tempoNum/100)%60 : '0'+Math.floor(tempoNum/100)%60;
    const centesimas = tempoNum % 100 > 9 ? tempoNum % 100 : '0' + tempoNum % 100;

    const tempoFormateado = `${minutos}:${segundos},${centesimas}`;
</script>
  
<h1>Último intento: {tempoFormateado} {#if fallos} ({fallos} {fallos == 1 ? 'fallo' : 'fallos'}){/if}</h1>
    
<style>
    h1 {
        color: white;
    }
</style>