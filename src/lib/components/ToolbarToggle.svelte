<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let toolbarPosition: "left" | "top" = "left";

  function toggleToolbarPosition() {
    toolbarPosition = toolbarPosition === "left" ? "top" : "left";
    dispatch("positionToggled", { position: toolbarPosition });
  }
</script>

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
