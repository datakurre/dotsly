<script lang="ts">
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Arch from "./Arch.svelte";

  export let grid = null;
  export let width = 16;
  export let height = 16;
  export let selectedShape = "square";
  export let selectedColor = "#000000";

  let localGrid;
  $: localGrid = grid || Array(width * height).fill(null);

  function draw(i: number) {
    const cell = localGrid[i];
    if (cell && cell.shape === "arch" && cell.color === selectedColor) {
      localGrid[i] = { ...cell, rotation: (cell.rotation + 1) % 4 };
    } else {
      localGrid[i] = { shape: selectedShape, color: selectedColor, rotation: 0 };
    }
    localGrid = [...localGrid];
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

<div class="container">
  <div class="grid" style="--width: {width}; --height: {height};">
    {#each localGrid as cell, i}
      <div
        class="cell"
        role="button"
        tabindex="0"
        on:click={() => draw(i)}
        on:keydown={(e) => e.key === "Enter" && draw(i)}
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
