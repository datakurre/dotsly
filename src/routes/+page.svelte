<script lang="ts">
  import DrawingBoard from "$lib/components/DrawingBoard.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import { palette2D, colorPalette } from "$lib/colors";
  import { processImageToGrid } from "$lib/utils/processImageToGrid";

  let selectedShape = "square";
  let selectedColor = colorPalette.length > 0 ? colorPalette[0].rgb : "#000000";
  let grid = null;
  let paintMode = false;
  let toolbarPosition: "left" | "top" = "left";
  let zoom = 1;
  function handleZoomIn() {
    zoom = Math.min(zoom + 0.1, 3);
  }
  function handleZoomOut() {
    zoom = Math.max(zoom - 0.1, 0.2);
  }
  let colorPickerMode = false;

  function handleShapeSelected(event: CustomEvent) {
    selectedShape = event.detail.shape;
  }

  function handleColorSelected(event: CustomEvent) {
    selectedColor = event.detail.color;
  }

  async function handleImageUploaded(event: CustomEvent) {
    // Use the parsed color palette from CSV, passing only the hex values
    const paletteHex = colorPalette.map((c) => c.rgb);
    grid = await processImageToGrid(event.detail.src, paletteHex, 32, 32);
  }

  function handleColorPickerModeToggled(event: CustomEvent) {
    colorPickerMode = event.detail.colorPickerMode;
  }

  function handleColorPicked(event: CustomEvent) {
    selectedColor = event.detail.color;
    colorPickerMode = false;
  }
  // ...existing code...

  function handleToolbarPositionToggle() {
    toolbarPosition = toolbarPosition === "left" ? "top" : "left";
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>

<svelte:head>
  <title>Dotsly</title>
</svelte:head>

<main>
  <Toolbar
    on:shapeSelected={handleShapeSelected}
    on:colorSelected={handleColorSelected}
    on:imageUploaded={handleImageUploaded}
    on:paintModeToggled={(e) => (paintMode = e.detail.paintMode)}
    on:colorPickerModeToggled={handleColorPickerModeToggled}
    on:zoomIn={handleZoomIn}
    on:zoomOut={handleZoomOut}
    bind:toolbarPosition
    bind:selectedColor
  />
  {#if grid}
    <DrawingBoard
      width={32}
      height={32}
      {selectedShape}
      {selectedColor}
      {grid}
      {paintMode}
      {colorPickerMode}
      {toolbarPosition}
      {zoom}
      on:colorPicked={handleColorPicked}
    />
  {:else}
    <DrawingBoard
      width={32}
      height={32}
      {selectedShape}
      {selectedColor}
      {paintMode}
      {colorPickerMode}
      {toolbarPosition}
      {zoom}
      on:colorPicked={handleColorPicked}
    />
  {/if}
</main>
