<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import {
    ZoomIn,
    ZoomOut,
    PaintBucket,
    Pipette,
    MousePointerClick,
    Undo,
    Redo,
  } from "lucide-svelte";
  import { keyboardShortcuts, getShortcutDescription } from "../utils/keyboard";

  const dispatch = createEventDispatcher();

  export let paintMode = false;
  export let colorPickerMode = false;
  export let selectMode = false;
  export let canUndo = false;
  export let canRedo = false;

  function togglePaintMode() {
    paintMode = !paintMode;
    if (paintMode) {
      colorPickerMode = false;
      selectMode = false;
    }
    dispatch("paintModeToggled", { paintMode });
  }

  function toggleColorPickerMode() {
    colorPickerMode = !colorPickerMode;
    if (colorPickerMode) {
      paintMode = false;
      selectMode = false;
    }
    dispatch("colorPickerModeToggled", { colorPickerMode });
  }

  function toggleSelectMode() {
    selectMode = !selectMode;
    if (selectMode) {
      paintMode = false;
      colorPickerMode = false;
    }
    dispatch("selectModeToggled", { selectMode });
  }

  function handleUndo() {
    dispatch("undo");
  }

  function handleRedo() {
    dispatch("redo");
  }
</script>

<div class="tool-group">
  <div class="group-label">Tools</div>
  <div class="tool-grid">
    <button
      type="button"
      aria-label="Selection tool"
      class:active={selectMode}
      on:click={toggleSelectMode}
      class="tool-button"
      title="Selection Tool ({getShortcutDescription(
        keyboardShortcuts.select,
      )})"
    >
      <MousePointerClick size={24} color={selectMode ? "#333" : "#555"} />
    </button>
    <button
      type="button"
      aria-label="Zoom in"
      class="tool-button"
      title="Zoom In ({getShortcutDescription(keyboardShortcuts.zoomIn)})"
      on:click={() => dispatch("zoomIn")}
    >
      <ZoomIn size={24} color="#555" />
    </button>
    <button
      type="button"
      aria-label="Zoom out"
      class="tool-button"
      title="Zoom Out ({getShortcutDescription(keyboardShortcuts.zoomOut)})"
      on:click={() => dispatch("zoomOut")}
    >
      <ZoomOut size={24} color="#555" />
    </button>
    <button
      type="button"
      aria-label="Paint bucket tool"
      class:active={paintMode}
      on:click={togglePaintMode}
      class="tool-button"
      title="Fill Tool ({getShortcutDescription(keyboardShortcuts.fill)})"
    >
      <PaintBucket size={24} color={paintMode ? "#333" : "#555"} />
    </button>
    <button
      type="button"
      aria-label="Color picker tool"
      class:active={colorPickerMode}
      on:click={toggleColorPickerMode}
      class="tool-button"
      title="Color Picker ({getShortcutDescription(
        keyboardShortcuts.colorPicker,
      )})"
    >
      <Pipette size={24} color={colorPickerMode ? "#333" : "#555"} />
    </button>
    <button
      type="button"
      aria-label="Undo"
      class="tool-button"
      title="Undo ({getShortcutDescription(keyboardShortcuts.undo)})"
      disabled={!canUndo}
      on:click={handleUndo}
    >
      <Undo size={24} color={canUndo ? "#555" : "#ccc"} />
    </button>
    <button
      type="button"
      aria-label="Redo"
      class="tool-button"
      title="Redo ({getShortcutDescription(keyboardShortcuts.redo)})"
      disabled={!canRedo}
      on:click={handleRedo}
    >
      <Redo size={24} color={canRedo ? "#555" : "#ccc"} />
    </button>
  </div>
</div>
