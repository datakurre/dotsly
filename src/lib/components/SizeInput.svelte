<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let size: number = 32;

  function handleSizeInput(event: Event) {
    const target = event.target as HTMLInputElement;
    size = Math.max(1, Math.min(128, parseInt(target.value) || 1));
    dispatch("sizeChanged", { size });
  }
</script>

<div
  class="canvas-size-group"
  style="display:flex; justify-content:center; align-items:center; width:100%;"
>
  <div class="group-label" style="margin-right: 1ex">Size</div>
  <div class="tool-grid">
    <label style="display:flex; flex-direction:column; align-items:center;">
      <input
        type="number"
        min="1"
        max="256"
        bind:value={size}
        on:input={handleSizeInput}
      />
    </label>
  </div>
</div>
