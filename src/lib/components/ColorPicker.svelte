<script lang="ts">
  import { tick } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { palette2D, getSortedColorPalette } from "../colors";

  const colorPalette = getSortedColorPalette();
  const dispatch = createEventDispatcher();

  export let selectedColor =
    colorPalette.length > 0 ? colorPalette[0].rgb : "#000000";

  let colorSearch = "";
  let colorDropdownOpen = false;
  let colorSearchInput: HTMLInputElement | null = null;
  let allColors = colorPalette;
  let filteredColors = allColors;

  // Focus color search input when dropdown opens
  $: if (colorDropdownOpen) {
    tick().then(() => {
      colorSearchInput?.focus();
    });
  }

  $: filteredColors = colorSearch.trim()
    ? allColors.filter(
        (c) =>
          c.name.toLowerCase().includes(colorSearch.toLowerCase()) ||
          c.rgb.replace("#", "").includes(colorSearch.replace("#", "")),
      )
    : allColors;

  function selectColorFromPalette(color: string) {
    selectedColor = color;
    dispatch("colorSelected", { color });
  }

  function selectColorFromDropdown(color: any) {
    selectedColor = color.rgb;
    colorDropdownOpen = false;
    colorSearch = "";
    dispatch("colorSelected", { color: color.rgb });
  }
</script>

<div class="color-picker">
  <!-- Color Dropdown -->
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

  <!-- 2D Color Palette -->
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
</div>
