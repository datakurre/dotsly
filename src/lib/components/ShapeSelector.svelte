<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Quarter from "./Quarter.svelte";
  import { keyboardShortcuts, getShortcutDescription } from "../utils/keyboard";

  const dispatch = createEventDispatcher();

  export let selectedShape = "square";
  export let selectedColor = "#000000";
  export let quarterRotation = 0;

  function selectShape(shape: string) {
    if (shape === "quarter") {
      if (selectedShape === "quarter") {
        quarterRotation = (quarterRotation + 1) % 4;
        dispatch("quarterRotationChanged", { rotation: quarterRotation });
        return;
      } else {
        quarterRotation = 0;
      }
    }
    selectedShape = shape;
    dispatch("shapeSelected", { shape });
    if (shape === "quarter") {
      dispatch("quarterRotationChanged", { rotation: quarterRotation });
    }
  }
</script>

<div class="shape-group">
  <div class="group-label">Shapes</div>
  <div class="shape-grid">
    <button
      on:click={() => selectShape("square")}
      class:selected={selectedShape === "square"}
      class="shape-button"
      aria-label="Square"
      title="Square ({getShortcutDescription(keyboardShortcuts.square)})"
    >
      <div class="shape-icon">
        <Square color={selectedColor} />
      </div>
    </button>
    <button
      on:click={() => selectShape("circle")}
      class:selected={selectedShape === "circle"}
      class="shape-button"
      aria-label="Circle"
      title="Circle ({getShortcutDescription(keyboardShortcuts.circle)})"
    >
      <div class="shape-icon">
        <Circle color={selectedColor} />
      </div>
    </button>
    <button
      on:click={() => selectShape("quarter")}
      class:selected={selectedShape === "quarter"}
      class="shape-button"
      aria-label="Quarter"
      title="Quarter ({getShortcutDescription(keyboardShortcuts.quarter)})"
    >
      <div class="shape-icon">
        <Quarter color={selectedColor} rotation={quarterRotation} />
      </div>
    </button>
  </div>
</div>
