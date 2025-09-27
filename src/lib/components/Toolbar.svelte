<script lang="ts">
  let paintMode = false;

  function togglePaintMode() {
    paintMode = !paintMode;
    dispatch("paintModeToggled", { paintMode });
  }
  // Define a color palette
  // LEGO DOTS color palette (approximate hex values)
  const colorPalette = [
    "#ffffff", // White
    "#000000", // Black
    "#f4d23e", // Bright Yellow
    "#e4a9a8", // Light Pink
    "#e3000b", // Bright Red
    "#ff9c08", // Bright Orange
    "#008f9b", // Bright Light Blue
    "#0055bf", // Bright Blue
    "#a5ca18", // Bright Yellowish Green
    "#237841", // Earth Green
    "#b4004e", // Bright Purple
    "#f785b1", // Bright Pink
    "#fbe870", // Cool Yellow
    "#f5cd2f", // Bright Light Yellow
    "#c870a0", // Medium Lavender
    "#e4e7e7", // Light Bluish Gray
  ];

  function selectColorFromPalette(color: string) {
    selectedColor = color;
    dispatch("colorSelected", { color });
  }
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Arch from "./Arch.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let selectedShape = "square";
  let selectedColor = "#000000";

  function selectShape(shape: string) {
    selectedShape = shape;
    dispatch("shapeSelected", { shape });
  }

  function selectColor(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedColor = target.value;
    dispatch("colorSelected", { color: selectedColor });
  }

  function handleImageUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch("imageUploaded", { src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
</script>

<style>
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .shapes button {
    margin-right: 0.5rem;
  }

  .shapes button.selected {
    background-color: #eee;
  }
</style>

<div class="toolbar">
  <div class="shapes" style="display: flex; align-items: center;">
    <button
      on:click={() => selectShape("square")}
      class:selected={selectedShape === "square"}
      aria-label="Square"
      style="width: 2.5rem; height: 2.5rem; padding: 0; display: inline-flex; align-items: center; justify-content: center;"
    >
      <Square color={selectedColor} />
    </button>
    <button
      on:click={() => selectShape("circle")}
      class:selected={selectedShape === "circle"}
      aria-label="Circle"
      style="width: 2.5rem; height: 2.5rem; padding: 0; display: inline-flex; align-items: center; justify-content: center;"
    >
      <Circle color={selectedColor} />
    </button>
    <button
      on:click={() => selectShape("arch")}
      class:selected={selectedShape === "arch"}
      aria-label="Arch"
      style="width: 2.5rem; height: 2.5rem; padding: 0; display: inline-flex; align-items: center; justify-content: center;"
    >
      <Arch color={selectedColor} rotation={0} />
    </button>
    <button
      type="button"
      aria-label="Paint roller tool"
      class:active={paintMode}
      on:click={togglePaintMode}
      style="width: 2.5rem; height: 2.5rem; margin-left: 0.5rem; display: inline-flex; align-items: center; justify-content: center; border: 2px solid {paintMode
        ? '#333'
        : '#ccc'}; background: {paintMode
        ? '#f4d23e'
        : '#fff'}; border-radius: 0.5rem; cursor: pointer;"
    >
      <svg
        width="22"
        height="22"
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
  </div>
  <div class="colors" style="display: flex; gap: 0.25rem; align-items: center;">
    {#each colorPalette as color}
      <button
        type="button"
        on:click={() => selectColorFromPalette(color)}
        style="width: 1.5rem; height: 1.5rem; background: {color}; border: 2px solid {selectedColor ===
        color
          ? '#333'
          : '#ccc'}; border-radius: 0.25rem; cursor: pointer;"
        aria-label={color}
      ></button>
    {/each}
  </div>
  <div class="image-upload">
    <input
      type="file"
      accept="image/png, image/jpeg"
      on:change={handleImageUpload}
    />
  </div>
</div>
