<script lang="ts">
  export let color = "#000";
</script>

<style>
  .circle {
    width: 100%;
    height: 100%;
    background-color: var(--color);
    border-radius: 50%;
  }
</style>

<div class="circle" style="--color: {color}"></div>
