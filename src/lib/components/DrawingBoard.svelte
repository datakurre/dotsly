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
  <div class="grid" style="--width: {width}; --height: {height};">
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
