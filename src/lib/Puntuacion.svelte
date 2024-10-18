<script>
      export let erros;
      export let total;

      $: correctas = parseInt(total)-parseInt(erros);

  </script>
  
  <h1>Correctas: {correctas}/{total}</h1>
    
  <style>
      h1 {
          color: white;
      }
  </style>