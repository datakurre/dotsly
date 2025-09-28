<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Quarter from "./Quarter.svelte";
  import type { Grid, GridCell, ShapeType } from "../types";

  const dispatch = createEventDispatcher();

  export let grid: Grid;
  export let width: number;
  export let height: number;
  export let selectedShape: ShapeType = "square";
  export let selectedColor: string;
  export let paintMode = false;
  export let colorPickerMode = false;
  export let quarterRotation = 0;

  // Flood fill for painting adjacent blocks
  function paint(i: number) {
    const target = grid[i];
    if (!target) return draw(i);
    const { shape, color } = target;
    if (shape === selectedShape && color === selectedColor) return;
    const stack = [i];
    const visited = new Set<number>();
    while (stack.length) {
      const idx = stack.pop();
      if (idx === undefined || visited.has(idx)) continue;
      visited.add(idx);
      const cell = grid[idx];
      if (!cell || cell.shape !== shape || cell.color !== color) continue;
      grid[idx] = {
        shape: selectedShape,
        color: selectedColor,
        rotation: selectedShape === "quarter" ? quarterRotation : 0,
      };
      // Check neighbors (left, right, up, down)
      const x = idx % width;
      const y = Math.floor(idx / width);
      if (x > 0) stack.push(idx - 1);
      if (x < width - 1) stack.push(idx + 1);
      if (y > 0) stack.push(idx - width);
      if (y < height - 1) stack.push(idx + width);
    }
    grid = [...grid];
    dispatch("gridChanged", { grid });
  }

  function draw(i: number) {
    const cell = grid[i];
    if (cell && cell.shape === selectedShape && cell.color === selectedColor) {
      // Clear tile if same shape and color
      grid[i] = null;
    } else if (selectedShape === "quarter") {
      // Always set rotation from toolbar, never rotate on click
      grid[i] = {
        shape: selectedShape,
        color: selectedColor,
        rotation: quarterRotation,
      };
    } else {
      grid[i] = {
        shape: selectedShape,
        color: selectedColor,
        rotation: 0,
      };
    }
    grid = [...grid];
    dispatch("gridChanged", { grid });
  }

  function pickColor(i: number) {
    const cell = grid[i];
    if (cell && cell.color) {
      dispatch("colorPicked", { color: cell.color });
    }
  }

  export let didPan = false;

  function handleCellClick(i: number, event: MouseEvent) {
    // Stop event propagation to prevent panning when clicking cells
    event.stopPropagation();

    if (didPan) return;
    if (colorPickerMode) {
      pickColor(i);
    } else if (paintMode) {
      paint(i);
    } else {
      draw(i);
    }
  }

  function handleCellKeydown(e: KeyboardEvent, i: number) {
    if (e.key === "Enter") {
      if (colorPickerMode) {
        pickColor(i);
      } else if (paintMode) {
        paint(i);
      } else {
        draw(i);
      }
    }
  }
</script>

<style>
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

<div class="grid" style="--width: {width}; --height: {height};">
  {#each grid as cell, i}
    <div
      class="cell"
      role="button"
      tabindex="0"
      on:click={(e) => handleCellClick(i, e)}
      on:keydown={(e) => handleCellKeydown(e, i)}
    >
      {#if cell}
        {#if cell.shape === "square"}
          <Square color={cell.color} />
        {:else if cell.shape === "circle"}
          <Circle color={cell.color} />
        {:else if cell.shape === "quarter"}
          <Quarter color={cell.color} rotation={cell.rotation} />
        {/if}
      {/if}
    </div>
  {/each}
</div>
