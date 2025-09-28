<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { colorPalette } from "../colors";
  import type {
    Grid,
    ShapeType,
    ToolbarPosition,
    ColorPickedEvent,
  } from "../types";
  import ZoomPanContainer from "./ZoomPanContainer.svelte";
  import GridComponent from "./Grid.svelte";

  const dispatch = createEventDispatcher<{
    colorPicked: ColorPickedEvent;
  }>();

  // Props
  export let grid: Grid | null = null;
  export let width = 32;
  export let height = 32;
  export let selectedShape: ShapeType = "square";
  export let selectedColor = colorPalette.length > 0 ? colorPalette[0].rgb : "#000000";
  export let paintMode = false;
  export let colorPickerMode = false;
  export let toolbarPosition: ToolbarPosition = "left";
  export let quarterRotation = 0;
  export let zoom = 1;

  // Local state
  let localGrid: Grid;
  $: localGrid = grid || Array(width * height).fill(null);

  let panX = 0;
  let panY = 0;
  let currentDidPan = false;

  function handleZoomChanged(event: CustomEvent) {
    zoom = event.detail.zoom;
  }

  function handlePanChanged(event: CustomEvent) {
    panX = event.detail.panX;
    panY = event.detail.panY;
  }

  function handlePanEnd(event: CustomEvent) {
    currentDidPan = event.detail.didPan;
  }

  function handleGridChanged(event: CustomEvent) {
    localGrid = event.detail.grid;
  }

  function handleColorPicked(event: CustomEvent) {
    dispatch("colorPicked", event.detail);
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
</style>

<div
  class="container {toolbarPosition === 'left'
    ? 'toolbar-left-margin'
    : 'toolbar-top-margin'}"
>
  <ZoomPanContainer
    {zoom}
    {panX}
    {panY}
    on:zoomChanged={handleZoomChanged}
    on:panChanged={handlePanChanged}
    on:panEnd={handlePanEnd}
    let:didPan
  >
    <GridComponent
      grid={localGrid}
      {width}
      {height}
      {selectedShape}
      {selectedColor}
      {paintMode}
      {colorPickerMode}
      {quarterRotation}
      {didPan}
      on:gridChanged={handleGridChanged}
      on:colorPicked={handleColorPicked}
    />
  </ZoomPanContainer>
</div>
