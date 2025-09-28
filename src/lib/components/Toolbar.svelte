<script lang="ts">
  import "./Toolbar.css";
  import { createEventDispatcher } from "svelte";
  import { colorPalette } from "../colors";
  import ColorPicker from "./ColorPicker.svelte";
  import ShapeSelector from "./ShapeSelector.svelte";
  import ToolSelector from "./ToolSelector.svelte";
  import SizeInput from "./SizeInput.svelte";
  import ImageUpload from "./ImageUpload.svelte";
  import ToolbarToggle from "./ToolbarToggle.svelte";

  const dispatch = createEventDispatcher();

  export let selectedShape = "square";
  export let selectedColor = "#000000";
  export let paintMode = false;
  export let colorPickerMode = false;
  export let selectMode = false;
  export let size: number = 32;
  // Only support left position
  let toolbarVisible = true;
  export let quarterRotation = 0;
  export let halfCircleRotation = 0;
  export let canUndo = false;
  export let canRedo = false;

  // Handle events from child components
  function handleShapeSelected(event: CustomEvent) {
    selectedShape = event.detail.shape;
    dispatch("shapeSelected", event.detail);
  }

  function handleQuarterRotationChanged(event: CustomEvent) {
    quarterRotation = event.detail.rotation;
    dispatch("quarterRotationChanged", event.detail);
  }

  function handleHalfCircleRotationChanged(event: CustomEvent) {
    halfCircleRotation = event.detail.rotation;
    dispatch("halfCircleRotationChanged", event.detail);
  }

  function handleColorSelected(event: CustomEvent) {
    selectedColor = event.detail.color;
    dispatch("colorSelected", event.detail);
  }

  function handlePaintModeToggled(event: CustomEvent) {
    paintMode = event.detail.paintMode;
    dispatch("paintModeToggled", event.detail);
  }

  function handleColorPickerModeToggled(event: CustomEvent) {
    colorPickerMode = event.detail.colorPickerMode;
    dispatch("colorPickerModeToggled", event.detail);
  }

  function handleSelectModeToggled(event: CustomEvent) {
    selectMode = event.detail.selectMode;
    dispatch("selectModeToggled", event.detail);
  }

  function handleUndo() {
    dispatch("undo");
  }

  function handleRedo() {
    dispatch("redo");
  }

  function handleSizeChanged(event: CustomEvent) {
    size = event.detail.size;
    dispatch("sizeChanged", event.detail);
  }

  function handleImageUploaded(event: CustomEvent) {
    dispatch("imageUploaded", event.detail);
  }

  function handleSave() {
    dispatch("save");
  }

  function handleLoad() {
    dispatch("load");
  }

  function handleToolbarToggle() {
    toolbarVisible = !toolbarVisible;
  }
</script>

<ToolbarToggle on:toggle={handleToolbarToggle} />

<div class="toolbar left" class:visible={toolbarVisible}>
  <ShapeSelector
    bind:selectedShape
    bind:quarterRotation
    bind:halfCircleRotation
    {selectedColor}
    on:shapeSelected={handleShapeSelected}
    on:quarterRotationChanged={handleQuarterRotationChanged}
    on:halfCircleRotationChanged={handleHalfCircleRotationChanged}
  />

  <ToolSelector
    bind:paintMode
    bind:colorPickerMode
    bind:selectMode
    bind:canUndo
    bind:canRedo
    on:paintModeToggled={handlePaintModeToggled}
    on:colorPickerModeToggled={handleColorPickerModeToggled}
    on:selectModeToggled={handleSelectModeToggled}
    on:undo={handleUndo}
    on:redo={handleRedo}
    on:zoomIn={() => dispatch("zoomIn")}
    on:zoomOut={() => dispatch("zoomOut")}
    on:save={handleSave}
    on:load={handleLoad}
  />

  <ColorPicker bind:selectedColor on:colorSelected={handleColorSelected} />

  <SizeInput bind:size on:sizeChanged={handleSizeChanged} />

  <ImageUpload on:imageUploaded={handleImageUploaded} />
</div>
