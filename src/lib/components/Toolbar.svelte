<script lang="ts">
  import "./Toolbar.css";
  import { tick } from "svelte";
  let colorSearchInput: HTMLInputElement | null = null;
  // Focus color search input when dropdown opens
  $: if (colorDropdownOpen) {
    tick().then(() => {
      colorSearchInput?.focus();
    });
  }
  let paintMode = false;
  let colorPickerMode = false;

  function togglePaintMode() {
    paintMode = !paintMode;
    if (paintMode) colorPickerMode = false;
    dispatch("paintModeToggled", { paintMode });
  }

  function toggleColorPickerMode() {
    colorPickerMode = !colorPickerMode;
    if (colorPickerMode) paintMode = false;
    dispatch("colorPickerModeToggled", { colorPickerMode });
  }
  import { palette2D, colorPalette } from "../colors";

  function selectColorFromPalette(color: string) {
    selectedColor = color;
    dispatch("colorSelected", { color });
  }
  import Square from "./Square.svelte";
  import Circle from "./Circle.svelte";
  import Quarter from "./Quarter.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let selectedShape = "square";
  export let selectedColor =
    colorPalette.length > 0 ? colorPalette[0].rgb : "#000000";
  export { colorPickerMode };

  let quarterRotation = 0;
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

  function selectColor(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedColor = target.value;
    dispatch("colorSelected", { color: selectedColor });
  }

  function handleImageUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch("imageUploaded", { src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  let colorSearch = "";
  let colorDropdownOpen = false;
  let allColors = colorPalette; // Use only colors available in sets
  let filteredColors = allColors;

  $: filteredColors = colorSearch.trim()
    ? allColors.filter(
        (c) =>
          c.name.toLowerCase().includes(colorSearch.toLowerCase()) ||
          c.rgb.replace("#", "").includes(colorSearch.replace("#", "")),
      )
    : allColors;

  function selectColorFromDropdown(color) {
    selectedColor = color.rgb;
    colorDropdownOpen = false;
    colorSearch = "";
    dispatch("colorSelected", { color: color.rgb });
  }

  let toolbarPosition: "left" | "top" = "left";
  function toggleToolbarPosition() {
    toolbarPosition = toolbarPosition === "left" ? "top" : "left";
  }

  export let size: number = 32;
  function handleSizeInput(event: Event) {
    const target = event.target as HTMLInputElement;
    size = Math.max(1, Math.min(128, parseInt(target.value) || 1));
    dispatch("sizeChanged", { size });
  }
</script>

<div class="toolbar {toolbarPosition}">
  <button
    class="toolbar-toggle"
    on:click={toggleToolbarPosition}
    aria-label={toolbarPosition === "left"
      ? "Move toolbar to top"
      : "Move toolbar to left"}
  >
    {#if toolbarPosition === "left"}
      <!-- Icon: Arrow from left to top -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#555"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="vertical-align: middle;"
      >
        <polyline points="4 12 4 4 12 4" />
        <line x1="4" y1="4" x2="20" y2="20" />
      </svg>
    {:else}
      <!-- Icon: Arrow from top to left -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#555"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="vertical-align: middle;"
      >
        <polyline points="12 4 20 4 20 12" />
        <line x1="4" y1="4" x2="20" y2="20" />
      </svg>
    {/if}
  </button>

  <!-- Shape buttons group -->
  <div class="shape-group">
    <div class="group-label">Shapes</div>
    <div class="shape-grid">
      <button
        on:click={() => selectShape("square")}
        class:selected={selectedShape === "square"}
        class="shape-button"
        aria-label="Square"
        title="Square - Draw square shapes"
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
        title="Circle - Draw circular shapes"
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
        title="Quarter - Draw quarter tile shapes (click again to rotate)"
      >
        <div class="shape-icon">
          <Quarter color={selectedColor} rotation={quarterRotation} />
        </div>
      </button>
    </div>
  </div>

  <!-- Tool buttons group -->
  <div class="tool-group">
    <div class="group-label">Tools</div>
    <div class="tool-grid">
      <button
        type="button"
        aria-label="Zoom in"
        class="tool-button"
        title="Zoom In"
        on:click={() => dispatch("zoomIn")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#555"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Zoom out"
        class="tool-button"
        title="Zoom Out"
        on:click={() => dispatch("zoomOut")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#555"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="8" y1="11" x2="14" y2="11" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Paint roller tool"
        class:active={paintMode}
        on:click={togglePaintMode}
        class="tool-button"
        title="Fill Tool - Fill areas with selected color"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={paintMode ? "#333" : "#888"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <!-- Roller bar -->
          <rect
            x="6"
            y="4"
            width="10"
            height="4"
            rx="1.5"
            fill={paintMode ? "#f4d23e" : "#fff"}
            stroke={paintMode ? "#333" : "#888"}
          />
          <!-- Handle connector -->
          <path
            d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"
            stroke={paintMode ? "#333" : "#888"}
          />
          <!-- Handle -->
          <rect
            x="11"
            y="14"
            width="2"
            height="5"
            rx="1"
            fill={paintMode ? "#f4d23e" : "#fff"}
            stroke={paintMode ? "#333" : "#888"}
          />
          <path d="M12 12v2" stroke={paintMode ? "#333" : "#888"} />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Pick color from canvas"
        class:active={colorPickerMode}
        on:click={toggleColorPickerMode}
        class="tool-button"
        title="Color Picker - Click to pick colors from the canvas"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colorPickerMode ? "#333" : "#888"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle
            cx="12"
            cy="12"
            r="7"
            stroke-width="2"
            fill={colorPickerMode ? "#aef" : "#fff"}
          />
          <path d="M12 9v3l2 2" stroke-width="2" />
        </svg>
      </button>
    </div>
  </div>
  <div class="color-dropdown-container">
    <button
      type="button"
      class="dropdown-toggle"
      on:click={() => (colorDropdownOpen = !colorDropdownOpen)}
    >
      {selectedColor
        ? allColors.find((c) => c.rgb === selectedColor)?.name || selectedColor
        : "Select color..."}
      <span style="margin-left:0.5em;">▼</span>
    </button>
    {#if colorDropdownOpen}
      <div class="dropdown-menu">
        <input
          type="text"
          placeholder="Search color..."
          bind:value={colorSearch}
          class="dropdown-search"
          bind:this={colorSearchInput}
        />
        <div class="dropdown-list">
          {#each filteredColors as color}
            <button
              type="button"
              class="dropdown-item"
              on:click={() => selectColorFromDropdown(color)}
              aria-label={`Select color ${color.name}`}
              style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"
            >
              <span class="dropdown-swatch" style="background:{color.rgb}"
              ></span>
              <span>{color.name}</span>
              <span style="margin-left:auto; color:#888; font-size:0.9em"
                >{color.rgb}</span
              >
            </button>
          {/each}
          {#if filteredColors.length === 0}
            <div class="dropdown-item">No colors found</div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
  <div class="colors">
    <div class="palette2d">
      {#each palette2D as row}
        <div class="palette-row">
          {#each row as colorObj}
            <button
              type="button"
              on:click={() => selectColorFromPalette(colorObj.rgb)}
              style="width: 1.5rem; height: 1.5rem; background: {colorObj.rgb}; border: 2px solid {selectedColor ===
              colorObj.rgb
                ? '#333'
                : '#ccc'}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;"
              aria-label={colorObj.name}
              title={colorObj.name}
            ></button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div
    class="canvas-size-group"
    style="display:flex; justify-content:center; align-items:center; width:100%;"
  >
    <div class="group-label" style="margin-right: 1ex">Size</div>
    <div class="tool-grid">
      <label style="display:flex; flex-direction:column; align-items:center;">
        <input
          type="number"
          min="1"
          max="256"
          bind:value={size}
          on:input={handleSizeInput}
        />
      </label>
    </div>
  </div>
  <div class="image-upload">
    <label class="upload-label">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#555"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="vertical-align: middle;"
      >
        <path d="M12 16V4" />
        <polyline points="8 8 12 4 16 8" />
        <rect x="4" y="16" width="16" height="4" rx="2" />
      </svg>
      <span>Upload image</span>
      <input
        type="file"
        accept="image/png, image/jpeg"
        on:change={handleImageUpload}
      />
    </label>
  </div>
</div>
