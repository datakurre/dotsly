<script lang="ts">
  export let color = "#000";
  export let rotation = 0;
</script>

<style>
  .tile {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .square-half {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: var(--color);
  }
  .circle-half {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: var(--color);
    border-top-left-radius: 999px;
    border-top-right-radius: 999px;
  }
</style>

<div
  class="tile"
  style="--color: {color}; transform: rotate({rotation * 90}deg);"
>
  <div class="square-half"></div>
  <div class="circle-half"></div>
</div>
