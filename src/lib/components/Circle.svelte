<script lang="ts">
  export let color = "#000";
</script>

<div class="circle" style="--color: {color}"></div>

<style>
  .circle {
    width: 100%;
    height: 100%;
    background-color: var(--color);
    border-radius: 50%;
  }
</style>
