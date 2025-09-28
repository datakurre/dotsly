<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function toggleToolbar() {
    dispatch("toggle");
  }
</script>

<button
  class="toolbar-toggle"
  on:click={toggleToolbar}
  aria-label="Show/hide toolbar"
>
  <!-- Icon: Hamburger menu -->
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
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>
