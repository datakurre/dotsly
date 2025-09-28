<script lang="ts">
  export let color = "#000";
  export let rotation = 0;
</script>

<!-- Renamed component: Quarter -->

<style>
  .arch-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
</style>

<div class="arch-container" style="transform: rotate({rotation * 90}deg);">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <!-- Draw a quarter-arc as if it is part of a 2x2 tile circle -->
    <path d="M 1,99 L 1,1 A 98,98 0 0,1 99,99 Z" fill={color} stroke="none" />
  </svg>
</div>
