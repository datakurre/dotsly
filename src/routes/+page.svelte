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
      const width = 32;
      const height = 32;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height).data;
      const newGrid = [];
      for (let i = 0; i < imageData.length; i += 4) {
        const idx = i / 4;
        const x = idx % width;
        const y = Math.floor(idx / width);
        let r = imageData[i];
        let g = imageData[i + 1];
        let b = imageData[i + 2];
        const a = imageData[i + 3];
        if (a === 0) {
          r = 255;
          g = 255;
          b = 255;
        }
        const brightness = (r + g + b) / 3;
        let shape = mapBrightnessToShape(brightness);
        let rotation = 0;
        // Only allow arch on edges, and set direction
        const isTop = y === 0;
        const isBottom = y === height - 1;
        const isLeft = x === 0;
        const isRight = x === width - 1;
        if (shape === "arch" && (isTop || isBottom || isLeft || isRight)) {
          if (isTop)
            rotation = 2; // open up
          else if (isBottom)
            rotation = 0; // open down
          else if (isLeft)
            rotation = 1; // open left
          else if (isRight) rotation = 3; // open right
        } else if (shape === "arch") {
          // Inside: prefer square or circle based on brightness
          shape = brightness < 128 ? "square" : "circle";
        }
        const color = findClosestColor(r, g, b);
        newGrid.push({ shape, color, rotation });
      }
      grid = newGrid;
    };
  }

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

  function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((x) => x + x)
        .join("");
    }
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }

  function findClosestColor(r, g, b) {
    let closestHex = colorPalette[0];
    let minDistance = Infinity;
    for (const hex of colorPalette) {
      const color = hexToRgb(hex);
      const distance = Math.sqrt(
        Math.pow(r - color.r, 2) +
          Math.pow(g - color.g, 2) +
          Math.pow(b - color.b, 2),
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestHex = hex;
      }
    }
    return closestHex;
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
