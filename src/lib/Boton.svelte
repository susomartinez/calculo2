<script>
    export let label;
    export let action;

</script>

<button class="button" type="button" on:click={action}>
  {label}
</button>

<style>
  .button {
    background-color: white;
    border: 1px solid white;
    padding: 0.625rem 1.25rem;
    border-radius: 0.9375rem;
  }
</style>
