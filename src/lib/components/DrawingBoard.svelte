<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Arch from "./Arch.svelte";
  import { colorPalette } from "../colors";
  import type {
    Grid,
    GridCell,
    ShapeType,
    ToolbarPosition,
    ColorPickedEvent,
  } from "../types";

  const dispatch = createEventDispatcher<{
    colorPicked: ColorPickedEvent;
  }>();

  // Props
  export let grid: Grid | null = null;
  export let width = 32;
  export let height = 32;
  export let selectedShape: ShapeType = "square";
  export let selectedColor =
    colorPalette.length > 0 ? colorPalette[0].rgb : "#000000";
  export let paintMode = false;
  export let colorPickerMode = false;
  export let toolbarPosition: ToolbarPosition = "left";

  // Local state
  let localGrid: Grid;
  $: localGrid = grid || Array(width * height).fill(null);

  // Zoom and pan state
  export let zoom = 1;
  let panX = 0;
  let panY = 0;
  let isPanning = false;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let gridEl: HTMLDivElement;

  // Handle mouse wheel for zooming
  function onGridWheel(e: WheelEvent) {
    // Only zoom if ctrl is NOT pressed (let browser handle ctrl+wheel for accessibility)
    if (e.ctrlKey) return;
    e.preventDefault();
    const zoomStep = 0.1;
    let newZoom = zoom;
    if (e.deltaY < 0) {
      newZoom = Math.min(zoom + zoomStep, 5);
    } else if (e.deltaY > 0) {
      newZoom = Math.max(zoom - zoomStep, 0.2);
    }
    if (newZoom !== zoom) {
      zoom = newZoom;
    }
  }

  function onGridMouseDown(e: MouseEvent) {
    if (e.button !== 0) return;
    isPanning = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    window.addEventListener("mousemove", onGridMouseMove);
    window.addEventListener("mouseup", onGridMouseUp);
    e.preventDefault();
  }

  function onGridMouseMove(e: MouseEvent) {
    if (!isPanning) return;
    panX += e.clientX - lastMouseX;
    panY += e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }

  function onGridMouseUp() {
    isPanning = false;
    window.removeEventListener("mousemove", onGridMouseMove);
    window.removeEventListener("mouseup", onGridMouseUp);
  }

  // Keep canvas visually stable at viewport center on zoom
  let prevZoom = zoom;
  $: if (zoom !== prevZoom && gridEl) {
    // Get container bounding rect and center
    const container = gridEl.parentElement;
    if (container) {
      const crect = container.getBoundingClientRect();
      const cx = crect.left + crect.width / 2;
      const cy = crect.top + crect.height / 2;
      // Compute grid center in screen coords before zoom
      const gridRect = gridEl.getBoundingClientRect();
      const gridCenterX = gridRect.left + gridRect.width / 2;
      const gridCenterY = gridRect.top + gridRect.height / 2;
      // Offset from container center to grid center
      const dx = cx - gridCenterX;
      const dy = cy - gridCenterY;
      // Adjust pan so grid center stays at container center after zoom
      panX += dx - dx * (zoom / prevZoom);
      panY += dy - dy * (zoom / prevZoom);
    }
    prevZoom = zoom;
  }

  // Flood fill for painting adjacent blocks
  function paint(i: number) {
    const target = localGrid[i];
    if (!target) return draw(i);
    const { shape, color } = target;
    if (shape === selectedShape && color === selectedColor) return;
    const stack = [i];
    const visited = new Set<number>();
    while (stack.length) {
      const idx = stack.pop();
      if (idx === undefined || visited.has(idx)) continue;
      visited.add(idx);
      const cell = localGrid[idx];
      if (!cell || cell.shape !== shape || cell.color !== color) continue;
      localGrid[idx] = {
        shape: selectedShape,
        color: selectedColor,
        rotation: 0,
      };
      // Check neighbors (left, right, up, down)
      const x = idx % width;
      const y = Math.floor(idx / width);
      if (x > 0) stack.push(idx - 1);
      if (x < width - 1) stack.push(idx + 1);
      if (y > 0) stack.push(idx - width);
      if (y < height - 1) stack.push(idx + width);
    }
    localGrid = [...localGrid];
  }

  function draw(i: number) {
    const cell = localGrid[i];
    if (cell && cell.shape === "arch" && cell.color === selectedColor) {
      localGrid[i] = { ...cell, rotation: (cell.rotation + 1) % 4 };
    } else {
      localGrid[i] = {
        shape: selectedShape,
        color: selectedColor,
        rotation: 0,
      };
    }
    localGrid = [...localGrid];
  }

  function pickColor(i: number) {
    const cell = localGrid[i];
    if (cell && cell.color) {
      dispatch("colorPicked", { color: cell.color });
    }
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .toolbar-left-margin {
    margin-left: 7rem;
  }
  .toolbar-top-margin {
    margin-top: 5.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--width), 1fr);
    grid-template-rows: repeat(var(--height), 1fr);
    width: 90vmin;
    max-width: 500px;
    border: 1px solid #ddd;
    aspect-ratio: 1 / 1;
  }

  .cell {
    cursor: pointer;
    aspect-ratio: 1 / 1;
    border: 1px solid #ddd;
  }
</style>

<div
  class="container {toolbarPosition === 'left'
    ? 'toolbar-left-margin'
    : 'toolbar-top-margin'}"
>
  <!-- toolbar slot removed, handled in parent -->
  <div
    class="grid"
    role="application"
    aria-label="Drawing canvas"
    tabindex="0"
    bind:this={gridEl}
    style="--width: {width}; --height: {height}; transform: translate({panX}px, {panY}px) scale({zoom}); cursor: {isPanning
      ? 'grabbing'
      : 'grab'}; user-select: none; touch-action: none;"
    on:mousedown={onGridMouseDown}
    on:keydown={(e) => {
      if (e.key === " ") {
        e.preventDefault();
        onGridMouseDown({
          button: 0,
          clientX: lastMouseX,
          clientY: lastMouseY,
          preventDefault: () => {},
        } as MouseEvent);
      }
    }}
    on:keyup={(e) => {
      if (e.key === " ") {
        e.preventDefault();
        onGridMouseUp();
      }
    }}
    on:wheel={onGridWheel}
    {...{
      "on:mousedown": onGridMouseDown,
      "on:keydown": (e: KeyboardEvent) => {
        if (e.key === " ") {
          e.preventDefault();
          onGridMouseDown({
            button: 0,
            clientX: lastMouseX,
            clientY: lastMouseY,
            preventDefault: () => {},
          } as MouseEvent);
        }
      },
      "on:keyup": (e: KeyboardEvent) => {
        if (e.key === " ") {
          e.preventDefault();
          onGridMouseUp();
        }
      },
      "on:wheel": onGridWheel,
    }}
  >
    {#each localGrid as cell, i}
      <div
        class="cell"
        role="button"
        tabindex="0"
        on:click={() =>
          colorPickerMode ? pickColor(i) : paintMode ? paint(i) : draw(i)}
        on:keydown={(e) => {
          if (e.key === "Enter") {
            if (colorPickerMode) pickColor(i);
            else paintMode ? paint(i) : draw(i);
          }
        }}
      >
        {#if cell}
          {#if cell.shape === "square"}
            <Square color={cell.color} />
          {:else if cell.shape === "circle"}
            <Circle color={cell.color} />
          {:else if cell.shape === "arch"}
            <Arch color={cell.color} rotation={cell.rotation} />
          {/if}
        {/if}
      </div>
    {/each}
  </div>
</div>
