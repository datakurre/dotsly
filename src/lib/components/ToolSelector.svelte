<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let paintMode = false;
  export let colorPickerMode = false;

  function togglePaintMode() {
    paintMode = !paintMode;
    if (paintMode) colorPickerMode = false;
    dispatch("paintModeToggled", { paintMode });
  }

  function toggleColorPickerMode() {
    colorPickerMode = !colorPickerMode;
    if (colorPickerMode) paintMode = false;
    dispatch("colorPickerModeToggled", { colorPickerMode });
  }
</script>

<div class="tool-group">
  <div class="group-label">Tools</div>
  <div class="tool-grid">
    <button
      type="button"
      aria-label="Zoom in"
      class="tool-button"
      title="Zoom In"
      on:click={() => dispatch("zoomIn")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#555"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
    <button
      type="button"
      aria-label="Zoom out"
      class="tool-button"
      title="Zoom Out"
      on:click={() => dispatch("zoomOut")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#555"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
    <button
      type="button"
      aria-label="Paint roller tool"
      class:active={paintMode}
      on:click={togglePaintMode}
      class="tool-button"
      title="Fill Tool - Fill areas with selected color"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={paintMode ? "#333" : "#888"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <!-- Roller bar -->
        <rect
          x="6"
          y="4"
          width="10"
          height="4"
          rx="1.5"
          fill={paintMode ? "#f4d23e" : "#fff"}
          stroke={paintMode ? "#333" : "#888"}
        />
        <!-- Handle connector -->
        <path
          d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"
          stroke={paintMode ? "#333" : "#888"}
        />
        <!-- Handle -->
        <rect
          x="11"
          y="14"
          width="2"
          height="5"
          rx="1"
          fill={paintMode ? "#f4d23e" : "#fff"}
          stroke={paintMode ? "#333" : "#888"}
        />
        <path d="M12 12v2" stroke={paintMode ? "#333" : "#888"} />
      </svg>
    </button>
    <button
      type="button"
      aria-label="Pick color from canvas"
      class:active={colorPickerMode}
      on:click={toggleColorPickerMode}
      class="tool-button"
      title="Color Picker - Click to pick colors from the canvas"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colorPickerMode ? "#333" : "#888"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="7"
          stroke-width="2"
          fill={colorPickerMode ? "#aef" : "#fff"}
        />
        <path d="M12 9v3l2 2" stroke-width="2" />
      </svg>
    </button>
  </div>
</div>