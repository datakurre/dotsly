<script lang="ts">
  export let color = "#000";
  export let rotation = 0;
</script>

<div class="arch-container" style="transform: rotate({rotation * 90}deg);">
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <circle cx="0" cy="0" r="100" fill={color} />
  </svg>
</div>

<style>
  .arch-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
</style>
