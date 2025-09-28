<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Quarter from "./Quarter.svelte";
  import type { Grid, GridCell, ShapeType, Selection } from "../types";

  const dispatch = createEventDispatcher();

  export let grid: Grid;
  export let width: number;
  export let height: number;
  export let selectedShape: ShapeType = "square";
  export let selectedColor: string;
  export let paintMode = false;
  export let colorPickerMode = false;
  export let selectMode = false;
  export let quarterRotation = 0;
  export let selection: Selection = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    active: false,
  };
  export let didPan = false;

  // Selection state
  let isSelecting = false;
  let selectionStart = { x: 0, y: 0 };

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

  function handleCellClick(i: number, event: MouseEvent) {
    // Stop event propagation to prevent panning when clicking cells
    event.stopPropagation();

    if (didPan) return;

    if (selectMode) {
      startSelection(i, event);
    } else if (colorPickerMode) {
      pickColor(i);
    } else if (paintMode) {
      paint(i);
    } else {
      draw(i);
    }
  }

  function startSelection(i: number, event: MouseEvent) {
    const x = i % width;
    const y = Math.floor(i / width);

    isSelecting = true;
    selectionStart = { x, y };

    selection = {
      startX: x,
      startY: y,
      endX: x,
      endY: y,
      active: true,
    };

    dispatch("selectionChanged", { selection });
  }

  function handleCellMouseDown(i: number, event: MouseEvent) {
    if (selectMode) {
      startSelection(i, event);
    }
  }

  function handleCellMouseEnter(i: number, event: MouseEvent) {
    if (selectMode && isSelecting) {
      const x = i % width;
      const y = Math.floor(i / width);

      selection = {
        ...selection,
        endX: x,
        endY: y,
      };

      dispatch("selectionChanged", { selection });
    }
  }

  function handleCellMouseUp(i: number, event: MouseEvent) {
    if (selectMode && isSelecting) {
      isSelecting = false;
      dispatch("selectionChanged", { selection });
    }
  }

  // Handle global mouse up to end selection
  function handleGlobalMouseUp() {
    if (isSelecting) {
      isSelecting = false;
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    }
  });

  // Helper function to check if a cell is in the current selection
  function isCellSelected(i: number): boolean {
    if (!selection.active) return false;

    const x = i % width;
    const y = Math.floor(i / width);

    const startX = Math.min(selection.startX, selection.endX);
    const endX = Math.max(selection.startX, selection.endX);
    const startY = Math.min(selection.startY, selection.endY);
    const endY = Math.max(selection.startY, selection.endY);

    return x >= startX && x <= endX && y >= startY && y <= endY;
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
    position: relative;
  }

  .cell {
    cursor: pointer;
    aspect-ratio: 1 / 1;
    border: 1px solid #ddd;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.1s;
  }

  .cell:hover {
    background: #fafafa;
  }

  .cell.select-mode {
    cursor: crosshair;
  }

  .cell.selected {
    background: rgba(33, 150, 243, 0.2);
    border-color: #2196f3;
  }

  .cell.selected::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #2196f3;
    pointer-events: none;
    box-sizing: border-box;
  }

  .selection-overlay {
    position: absolute;
    background: rgba(33, 150, 243, 0.15);
    border: 2px solid #2196f3;
    border-radius: 2px;
    pointer-events: none;
    z-index: 10;
    box-sizing: border-box;
    animation: selectionPulse 0.3s ease-out;
  }

  @keyframes selectionPulse {
    0% {
      background: rgba(33, 150, 243, 0.3);
      border-color: #1976d2;
    }
    100% {
      background: rgba(33, 150, 243, 0.15);
      border-color: #2196f3;
    }
  }
</style>

<div class="grid" style="--width: {width}; --height: {height};">
  {#each grid as cell, i}
    <div
      class="cell {isCellSelected(i) ? 'selected' : ''} {selectMode
        ? 'select-mode'
        : ''}"
      role="button"
      tabindex="0"
      on:click={(e) => handleCellClick(i, e)}
      on:mousedown={(e) => handleCellMouseDown(i, e)}
      on:mouseenter={(e) => handleCellMouseEnter(i, e)}
      on:mouseup={(e) => handleCellMouseUp(i, e)}
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

  <!-- Selection overlay -->
  {#if selectMode && selection.active && (isSelecting || selection.startX !== selection.endX || selection.startY !== selection.endY)}
    {@const startX = Math.min(selection.startX, selection.endX)}
    {@const endX = Math.max(selection.startX, selection.endX)}
    {@const startY = Math.min(selection.startY, selection.endY)}
    {@const endY = Math.max(selection.startY, selection.endY)}
    {@const left = (startX / width) * 100}
    {@const top = (startY / height) * 100}
    {@const selectionWidth = ((endX - startX + 1) / width) * 100}
    {@const selectionHeight = ((endY - startY + 1) / height) * 100}

    <div
      class="selection-overlay"
      style="left: {left}%; top: {top}%; width: {selectionWidth}%; height: {selectionHeight}%;"
    ></div>
  {/if}
</div>
