<script lang="ts">
  export let color = "#000";
</script>

<div class="square" style="--color: {color}" />

<style>
  .square {
    width: 100%;
    height: 100%;
    background-color: var(--color);
  }
</style>
