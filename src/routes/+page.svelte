<script lang="ts">
  import DrawingBoard from "$lib/components/DrawingBoard.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";

  let selectedShape = "square";
  let selectedColor = "#000000";

  function handleShapeSelected(event: CustomEvent) {
    selectedShape = event.detail.shape;
  }

  function handleColorSelected(event: CustomEvent) {
    selectedColor = event.detail.color;
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
  />
  <DrawingBoard width={16} height={16} {selectedShape} {selectedColor} />
</main>
