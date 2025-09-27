<script lang="ts">
  import DrawingBoard from "$lib/components/DrawingBoard.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";

  let selectedShape = "square";
  let selectedColor = "#000000";
  let grid = null;
  let paintMode = false;

  function handleShapeSelected(event: CustomEvent) {
    selectedShape = event.detail.shape;
  }

  function handleColorSelected(event: CustomEvent) {
    selectedColor = event.detail.color;
  }

  function handleImageUploaded(event: CustomEvent) {
    const image = new Image();
    image.src = event.detail.src;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 32;
      canvas.height = 32;
      ctx.drawImage(image, 0, 0, 32, 32);
      const imageData = ctx.getImageData(0, 0, 32, 32).data;
      const newGrid = [];
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const brightness = (r + g + b) / 3;
        const color = findClosestColor(r, g, b);
        const shape = mapBrightnessToShape(brightness);
        newGrid.push({ shape, color, rotation: 0 });
      }
      grid = newGrid;
    };
  }

  const colorPalette = [
    { r: 0, g: 0, b: 0 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
  ];

  function findClosestColor(r, g, b) {
    let closestColor = colorPalette[0];
    let minDistance = Infinity;
    for (const color of colorPalette) {
      const distance = Math.sqrt(
        Math.pow(r - color.r, 2) +
          Math.pow(g - color.g, 2) +
          Math.pow(b - color.b, 2),
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }
    return `rgb(${closestColor.r}, ${closestColor.g}, ${closestColor.b})`;
  }

  function mapBrightnessToShape(brightness) {
    if (brightness < 85) {
      return "square";
    } else if (brightness < 170) {
      return "arch";
    } else {
      return "circle";
    }
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
  />
  {#if grid}
    <DrawingBoard
      width={32}
      height={32}
      {selectedShape}
      {selectedColor}
      {grid}
      {paintMode}
    />
  {:else}
    <DrawingBoard
      width={32}
      height={32}
      {selectedShape}
      {selectedColor}
      {paintMode}
    />
  {/if}
</main>
