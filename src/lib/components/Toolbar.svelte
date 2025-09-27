<script lang="ts">
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
  <div class="shapes">
    <button
      on:click={() => selectShape("square")}
      class:selected={selectedShape === "square"}
    >
      Square
    </button>
    <button
      on:click={() => selectShape("circle")}
      class:selected={selectedShape === "circle"}
    >
      Circle
    </button>
    <button
      on:click={() => selectShape("arch")}
      class:selected={selectedShape === "arch"}
    >
      Arch
    </button>
  </div>
  <div class="colors">
    <input type="color" bind:value={selectedColor} on:input={selectColor} />
  </div>
</div>
