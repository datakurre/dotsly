<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let zoom = 1;
  export let panX = 0;
  export let panY = 0;

  let isPanning = false;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let didPan = false;
  let containerEl: HTMLDivElement;
  let prevZoom = zoom;

  // Handle mouse wheel for zooming
  function onGridWheel(e: WheelEvent) {
    // Only zoom if ctrl is NOT pressed (let browser handle ctrl+wheel for accessibility)
    if (e.ctrlKey) return;
    e.preventDefault();
    const zoomStep = 0.1;
    let newZoom = zoom;
    if (e.deltaY < 0) {
      newZoom = Math.min(zoom + zoomStep, 5);
    } else if (e.deltaY > 0) {
      newZoom = Math.max(zoom - zoomStep, 0.2);
    }
    if (newZoom !== zoom) {
      zoom = newZoom;
      dispatch("zoomChanged", { zoom });
    }
  }

  function onGridMouseDown(e: MouseEvent) {
    if (e.button !== 0) return;
    isPanning = true;
    didPan = false;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    window.addEventListener("mousemove", onGridMouseMove);
    window.addEventListener("mouseup", onGridMouseUp);
    e.preventDefault();
  }

  function onGridMouseMove(e: MouseEvent) {
    if (!isPanning) return;
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
      didPan = true;
    }
    panX += dx;
    panY += dy;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    dispatch("panChanged", { panX, panY });
  }

  function onGridMouseUp() {
    isPanning = false;
    window.removeEventListener("mousemove", onGridMouseMove);
    window.removeEventListener("mouseup", onGridMouseUp);
    dispatch("panEnd", { didPan });
    // Reset didPan after a short delay to allow clicks to be processed
    setTimeout(() => { didPan = false; }, 10);
  }

  // Keep canvas visually stable at viewport center on zoom
  $: if (zoom !== prevZoom && containerEl) {
    // Get container bounding rect and center
    const container = containerEl.parentElement;
    if (container) {
      const crect = container.getBoundingClientRect();
      const cx = crect.left + crect.width / 2;
      const cy = crect.top + crect.height / 2;
      // Compute grid center in screen coords before zoom
      const gridRect = containerEl.getBoundingClientRect();
      const gridCenterX = gridRect.left + gridRect.width / 2;
      const gridCenterY = gridRect.top + gridRect.height / 2;
      // Offset from container center to grid center
      const dx = cx - gridCenterX;
      const dy = cy - gridCenterY;
      // Adjust pan so grid center stays at container center after zoom
      panX += dx - dx * (zoom / prevZoom);
      panY += dy - dy * (zoom / prevZoom);
      dispatch("panChanged", { panX, panY });
    }
    prevZoom = zoom;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
      onGridMouseDown({
        button: 0,
        clientX: lastMouseX,
        clientY: lastMouseY,
        preventDefault: () => {},
      } as MouseEvent);
    }
  }

  function handleKeyup(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
      onGridMouseUp();
    }
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
  bind:this={containerEl}
  class="zoomable-container"
  role="application"
  aria-label="Zoomable and pannable container"
  tabindex="0"
  style="transform: translate({panX}px, {panY}px) scale({zoom}); cursor: {isPanning
    ? 'grabbing'
    : 'grab'}; user-select: none; touch-action: none;"
  on:mousedown={onGridMouseDown}
  on:keydown={handleKeydown}
  on:keyup={handleKeyup}
  on:wheel={onGridWheel}
>
  <slot {didPan} />
</div>

<style>
  .zoomable-container {
    display: contents;
  }
</style>