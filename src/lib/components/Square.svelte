<script lang="ts">
  export let color = "#000";
</script>

<style>
  .square {
    width: 100%;
    height: 100%;
    background-color: var(--color);
  }
</style>

<div class="square" style="--color: {color}"></div>
