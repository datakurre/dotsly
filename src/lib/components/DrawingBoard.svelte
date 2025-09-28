<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { colorPalette } from "../colors";
  import type {
    Grid,
    ShapeType,
    ToolbarPosition,
    ColorPickedEvent,
    Selection,
  } from "../types";
  import ZoomPanContainer from "./ZoomPanContainer.svelte";
  import DrawingGrid from "./Grid.svelte";

  const dispatch = createEventDispatcher<{
    colorPicked: ColorPickedEvent;
    gridChanged: { grid: Grid };
    selectionChanged: { selection: Selection };
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
  export let selectMode = false;
  export let toolbarPosition: ToolbarPosition = "left";
  export let quarterRotation = 0;
  export let zoom = 1;
  export let selection: Selection = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    active: false,
  };

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
    dispatch("gridChanged", event.detail);
  }

  function handleColorPicked(event: CustomEvent) {
    dispatch("colorPicked", event.detail);
  }

  function handleSelectionChanged(event: CustomEvent) {
    selection = event.detail.selection;
    dispatch("selectionChanged", event.detail);
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
</style>

<div class="container">
  <ZoomPanContainer
    {zoom}
    {panX}
    {panY}
    {selectMode}
    on:zoomChanged={handleZoomChanged}
    on:panChanged={handlePanChanged}
    on:panEnd={handlePanEnd}
    let:didPan
  >
    <DrawingGrid
      grid={localGrid}
      {width}
      {height}
      {selectedShape}
      {selectedColor}
      {paintMode}
      {colorPickerMode}
      {selectMode}
      {quarterRotation}
      {selection}
      {didPan}
      on:gridChanged={handleGridChanged}
      on:colorPicked={handleColorPicked}
      on:selectionChanged={handleSelectionChanged}
    />
  </ZoomPanContainer>
</div>
