<script lang="ts">
  export let color = "#000";
  export let rotation = 0;
</script>

<style>
  .quarter-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
</style>

<div class="quarter-container" style="margin-top: -25%">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path
      d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z"
      fill={color}
      stroke="none"
      transform="rotate({rotation * 90}, 50, 50)"
    />
  </svg>
</div>
