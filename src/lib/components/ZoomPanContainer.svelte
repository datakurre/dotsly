<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let zoom = 1;
  export let panX = 0;
  export let panY = 0;

  import { onMount } from "svelte";
  let isPanning = false;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let didPan = false;
  let containerEl: HTMLDivElement;
  let contentEl: HTMLDivElement;

  let initialized = false;

  onMount(() => {
    // Center grid (first child of contentEl) both horizontally and vertically on first mount if not already panned
    if (containerEl && contentEl && !initialized) {
      const containerW = containerEl.clientWidth;
      const containerH = containerEl.clientHeight;
      let gridW = 0;
      let gridH = 0;
      if (contentEl.firstElementChild instanceof HTMLElement) {
        gridW = contentEl.firstElementChild.offsetWidth;
        gridH = contentEl.firstElementChild.offsetHeight;
      } else {
        gridW = contentEl.offsetWidth;
        gridH = contentEl.offsetHeight;
      }
      panX = (containerW - gridW * zoom) / 2;
      panY = (containerH - gridH * zoom) / 2;
      initialized = true;
      dispatch("panChanged", { panX, panY });
    }
  });

  // Handle mouse wheel for zooming
  function onWheel(e: WheelEvent) {
    e.preventDefault();

    const rect = containerEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.2, Math.min(5, zoom * zoomFactor));

    if (newZoom !== zoom) {
      // Adjust pan to zoom towards mouse position
      const zoomRatio = newZoom / zoom;
      panX = mouseX - (mouseX - panX) * zoomRatio;
      panY = mouseY - (mouseY - panY) * zoomRatio;

      zoom = newZoom;
      dispatch("zoomChanged", { zoom, panX, panY });
    }
  }

  function onMouseDown(e: MouseEvent) {
    // Start panning with left mouse button - we'll handle grid clicks in the Grid component
    if (e.button === 0) {
      isPanning = true;
      didPan = false;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      e.preventDefault();
    }
  }

  function onMouseMove(e: MouseEvent) {
    if (isPanning) {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;

      // Lower threshold for better responsiveness
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        didPan = true;
      }

      panX += dx;
      panY += dy;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      dispatch("panChanged", { panX, panY });
    }
  }

  function onMouseUp() {
    if (isPanning) {
      isPanning = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      dispatch("panEnd", { didPan });

      // Reset didPan after a short delay to allow grid clicks to be processed
      setTimeout(() => {
        didPan = false;
      }, 50);
    }
  }

  // Handle keyboard shortcuts for spacebar pan
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
      // Space bar panning is handled by changing cursor and enabling pan mode
    }
  }

  function onKeyUp(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }
</script>

<style>
  .zoom-pan-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .zoom-pan-content {
    transform-origin: 0 0;
    user-select: none;
    touch-action: none;
  }
</style>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
  bind:this={containerEl}
  class="zoom-pan-container"
  role="application"
  aria-label="Zoomable and pannable container"
  tabindex="0"
  on:wheel={onWheel}
  on:mousedown={onMouseDown}
  on:keydown={onKeyDown}
  on:keyup={onKeyUp}
>
  <div
    bind:this={contentEl}
    class="zoom-pan-content"
    style="transform: translate({panX}px, {panY}px) scale({zoom}); cursor: {isPanning
      ? 'grabbing'
      : 'grab'};"
  >
    <slot {didPan} />
  </div>
</div>
