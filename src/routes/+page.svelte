<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import DrawingBoard from "$lib/components/DrawingBoard.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import { palette2D, colorPalette } from "$lib/colors";
  import { processImageToGrid } from "$lib/utils/processImageToGrid";
  import { UndoRedoManager } from "$lib/utils/undoRedo";
  import { ClipboardManager } from "$lib/utils/clipboard";
  import { keyboardShortcuts, matchesShortcut } from "$lib/utils/keyboard";
  import type { Selection, Grid, ShapeType } from "$lib/types";

  let selectedShape: ShapeType = "square";
  let selectedColor = colorPalette.length > 0 ? colorPalette[0].rgb : "#000000";
  let grid: Grid | null = null;
  let paintMode = false;
  let selectMode = false;
  let zoom = 1;
  let size = 32;
  let colorPickerMode = false;
  let quarterRotation = 0;
  let halfCircleRotation = 0;
  let currentFilename = "dotsly.json";

  // Selection state
  let selection: Selection = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    active: false,
  };

  // Undo/Redo and Clipboard managers
  let undoRedoManager: UndoRedoManager;
  let clipboardManager: ClipboardManager;
  let canUndo = false;
  let canRedo = false;

  function handleZoomIn() {
    zoom = Math.min(zoom + 0.1, 3);
  }
  function handleZoomOut() {
    zoom = Math.max(zoom - 0.1, 0.2);
  }

  // Color navigation functions - work with 2D palette grid
  function findColorPosition(
    color: string,
  ): { row: number; col: number } | null {
    for (let row = 0; row < palette2D.length; row++) {
      for (let col = 0; col < palette2D[row].length; col++) {
        if (palette2D[row][col].rgb === color) {
          return { row, col };
        }
      }
    }
    return null;
  }

  function navigateColorLeft() {
    const pos = findColorPosition(selectedColor);
    if (pos && pos.col > 0) {
      selectedColor = palette2D[pos.row][pos.col - 1].rgb;
    } else if (pos && pos.row > 0) {
      // Wrap to end of previous row
      const prevRow = pos.row - 1;
      const lastCol = palette2D[prevRow].length - 1;
      selectedColor = palette2D[prevRow][lastCol].rgb;
    }
  }

  function navigateColorRight() {
    const pos = findColorPosition(selectedColor);
    if (pos && pos.col < palette2D[pos.row].length - 1) {
      selectedColor = palette2D[pos.row][pos.col + 1].rgb;
    } else if (pos && pos.row < palette2D.length - 1) {
      // Wrap to start of next row
      selectedColor = palette2D[pos.row + 1][0].rgb;
    }
  }

  function navigateColorUp() {
    const pos = findColorPosition(selectedColor);
    if (pos && pos.row > 0) {
      // Stay in same column, but clamp to row length if needed
      const targetCol = Math.min(pos.col, palette2D[pos.row - 1].length - 1);
      selectedColor = palette2D[pos.row - 1][targetCol].rgb;
    }
  }

  function navigateColorDown() {
    const pos = findColorPosition(selectedColor);
    if (pos && pos.row < palette2D.length - 1) {
      // Stay in same column, but clamp to row length if needed
      const targetCol = Math.min(pos.col, palette2D[pos.row + 1].length - 1);
      selectedColor = palette2D[pos.row + 1][targetCol].rgb;
    }
  }

  function handleSave() {
    if (!grid) return;

    const data = {
      grid,
      size,
      version: "1.0",
    };

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = currentFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleLoad() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);

          if (data.grid && data.size) {
            grid = data.grid;
            size = data.size;
            currentFilename = file.name;
            if (grid) {
              addToHistory(grid);
            }
          } else {
            alert("Invalid file format");
          }
        } catch (error) {
          alert("Error loading file: " + error);
        }
      };
      reader.readAsText(file);
    };

    input.click();
  }
  // Initialize managers
  onMount(() => {
    undoRedoManager = new UndoRedoManager();
    clipboardManager = new ClipboardManager();

    // Initialize with empty grid if none exists
    if (!grid) {
      grid = Array(size * size).fill(null);
      undoRedoManager.addState(grid);
    }

    updateUndoRedoState();

    // Add keyboard event listener
    window.addEventListener("keydown", handleKeyDown);
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", handleKeyDown);
    }
  });

  function updateUndoRedoState() {
    canUndo = undoRedoManager?.canUndo() ?? false;
    canRedo = undoRedoManager?.canRedo() ?? false;
  }

  function addToHistory(newGrid: Grid) {
    if (undoRedoManager) {
      undoRedoManager.addState(newGrid);
      updateUndoRedoState();
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    // Don't trigger shortcuts when typing in input fields
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      return;
    }

    for (const [name, shortcut] of Object.entries(keyboardShortcuts)) {
      if (matchesShortcut(event, shortcut)) {
        event.preventDefault();
        handleShortcutAction(shortcut.action);
        break;
      }
    }
  }

  function handleShortcutAction(action: string) {
    switch (action) {
      case "select":
        selectMode = !selectMode;
        if (selectMode) {
          paintMode = false;
          colorPickerMode = false;
        }
        break;
      case "square":
        selectedShape = "square";
        break;
      case "circle":
        selectedShape = "circle";
        break;
      case "quarter":
        if (selectedShape === "quarter") {
          quarterRotation = (quarterRotation + 1) % 4;
        } else {
          selectedShape = "quarter";
          quarterRotation = 0;
        }
        break;
      case "halfCircle":
        if (selectedShape === "halfCircle") {
          halfCircleRotation = (halfCircleRotation + 1) % 4;
        } else {
          selectedShape = "halfCircle";
          halfCircleRotation = 0;
        }
        break;
      case "fill":
        paintMode = !paintMode;
        if (paintMode) {
          selectMode = false;
          colorPickerMode = false;
        }
        break;
      case "colorPicker":
        colorPickerMode = !colorPickerMode;
        if (colorPickerMode) {
          selectMode = false;
          paintMode = false;
        }
        break;
      case "zoomIn":
        handleZoomIn();
        break;
      case "zoomOut":
        handleZoomOut();
        break;
      case "undo":
        handleUndo();
        break;
      case "redo":
        handleRedo();
        break;
      case "cut":
        handleCut();
        break;
      case "copy":
        handleCopy();
        break;
      case "paste":
        handlePaste();
        break;
      case "selectAll":
        handleSelectAll();
        break;
      case "deselect":
        handleDeselect();
        break;
      case "delete":
        handleDelete();
        break;
      case "rotateLeft":
        if (selection.active) {
          handleRotateSelection(false);
        }
        break;
      case "rotateRight":
        if (selection.active) {
          handleRotateSelection(true);
        }
        break;
      case "moveUp":
        if (selection.active) {
          handleMoveSelection(0, -1);
        }
        break;
      case "moveDown":
        if (selection.active) {
          handleMoveSelection(0, 1);
        }
        break;
      case "moveLeft":
        if (selection.active) {
          handleMoveSelection(-1, 0);
        }
        break;
      case "moveRight":
        if (selection.active) {
          handleMoveSelection(1, 0);
        }
        break;
      case "colorLeft":
        navigateColorLeft();
        break;
      case "colorRight":
        navigateColorRight();
        break;
      case "colorUp":
        navigateColorUp();
        break;
      case "colorDown":
        navigateColorDown();
        break;
    }
  }

  function handleShapeSelected(event: CustomEvent) {
    selectedShape = event.detail.shape;
  }

  function handleQuarterRotationChanged(event: CustomEvent) {
    quarterRotation = event.detail.rotation;
  }

  function handleHalfCircleRotationChanged(event: CustomEvent) {
    halfCircleRotation = event.detail.rotation;
  }

  function handleColorSelected(event: CustomEvent) {
    selectedColor = event.detail.color;
  }

  async function handleImageUploaded(event: CustomEvent) {
    // Use the parsed color palette from CSV, passing only the hex values
    const paletteHex = colorPalette.map((c) => c.rgb);
    grid = await processImageToGrid(event.detail.src, paletteHex, size, size);
    addToHistory(grid);

    // Set filename based on uploaded image, replacing extension with .json
    if (event.detail.fileName) {
      const nameWithoutExt = event.detail.fileName.replace(/\.[^/.]+$/, "");
      currentFilename = `${nameWithoutExt}.json`;
    } else {
      currentFilename = "dotsly.json";
    }
  }

  function handleSizeChanged(event: CustomEvent) {
    size = event.detail.size;
    grid = null;
  }

  function handleColorPickerModeToggled(event: CustomEvent) {
    colorPickerMode = event.detail.colorPickerMode;
  }

  function handleSelectModeToggled(event: CustomEvent) {
    selectMode = event.detail.selectMode;
    if (selectMode) {
      paintMode = false;
      colorPickerMode = false;
    }
  }

  function handleUndo() {
    if (undoRedoManager) {
      const previousGrid = undoRedoManager.undo();
      if (previousGrid) {
        grid = previousGrid;
        updateUndoRedoState();
      }
    }
  }

  function handleRedo() {
    if (undoRedoManager) {
      const nextGrid = undoRedoManager.redo();
      if (nextGrid) {
        grid = nextGrid;
        updateUndoRedoState();
      }
    }
  }

  function handleSelectionChanged(event: CustomEvent) {
    selection = event.detail.selection;
  }

  function handleGridChanged(event: CustomEvent) {
    grid = event.detail.grid;
    if (grid) {
      addToHistory(grid);
    }
  }

  function handleCut() {
    if (selection.active && grid && clipboardManager) {
      const newGrid = clipboardManager.cut(grid, selection, size);
      grid = newGrid;
      addToHistory(grid);
      selection = { ...selection, active: false };
    }
  }

  function handleCopy() {
    if (selection.active && grid && clipboardManager) {
      clipboardManager.copy(grid, selection, size);
    }
  }

  function handlePaste() {
    if (grid && clipboardManager && clipboardManager.hasClipboardData()) {
      // Paste at center of current view or at (0,0) if no selection
      const pasteX = selection.active ? selection.startX : 0;
      const pasteY = selection.active ? selection.startY : 0;

      const newGrid = clipboardManager.paste(grid, pasteX, pasteY, size, size);
      grid = newGrid;
      addToHistory(grid);
    }
  }

  function handleDelete() {
    if (selection.active && grid && clipboardManager) {
      const newGrid = clipboardManager.deleteSelection(grid, selection, size);
      grid = newGrid;
      addToHistory(grid);
      selection = { ...selection, active: false };
    }
  }

  function handleSelectAll() {
    selection = {
      startX: 0,
      startY: 0,
      endX: size - 1,
      endY: size - 1,
      active: true,
    };
    selectMode = true;
    paintMode = false;
    colorPickerMode = false;
  }

  function handleDeselect() {
    selection = { ...selection, active: false };
  }

  function handleRotateSelection(clockwise: boolean = true) {
    if (selection.active && grid && clipboardManager) {
      const newGrid = clipboardManager.rotateSelection(
        grid,
        selection,
        size,
        clockwise,
      );
      grid = newGrid;
      addToHistory(grid);
    }
  }

  function handleMoveSelection(deltaX: number, deltaY: number) {
    if (selection.active && grid && clipboardManager) {
      const result = clipboardManager.moveSelection(
        grid,
        selection,
        deltaX,
        deltaY,
        size,
        size,
      );
      grid = result.grid;
      selection = result.selection;
      addToHistory(grid);
    }
  }

  function handleColorPicked(event: CustomEvent) {
    selectedColor = event.detail.color;
    colorPickerMode = false;
  }
</script>

<style>
  main {
    display: flex;
    height: 100vh;
  }
</style>

<svelte:head>
  <title>Dotsly</title>
</svelte:head>

<main>
  <Toolbar
    on:shapeSelected={handleShapeSelected}
    on:colorSelected={handleColorSelected}
    on:imageUploaded={handleImageUploaded}
    on:paintModeToggled={(e) => (paintMode = e.detail.paintMode)}
    on:colorPickerModeToggled={handleColorPickerModeToggled}
    on:selectModeToggled={handleSelectModeToggled}
    on:undo={handleUndo}
    on:redo={handleRedo}
    on:zoomIn={handleZoomIn}
    on:zoomOut={handleZoomOut}
    on:quarterRotationChanged={handleQuarterRotationChanged}
    on:halfCircleRotationChanged={handleHalfCircleRotationChanged}
    on:sizeChanged={handleSizeChanged}
    on:save={handleSave}
    on:load={handleLoad}
    bind:selectedColor
    bind:selectedShape
    bind:paintMode
    bind:selectMode
    bind:colorPickerMode
    bind:quarterRotation
    bind:halfCircleRotation
    bind:size
    bind:canUndo
    bind:canRedo
  />
  {#if grid}
    <DrawingBoard
      width={size}
      height={size}
      {selectedShape}
      {selectedColor}
      {selectMode}
      {grid}
      {paintMode}
      {colorPickerMode}
      {zoom}
      {quarterRotation}
      {halfCircleRotation}
      {selection}
      on:colorPicked={handleColorPicked}
      on:selectionChanged={handleSelectionChanged}
      on:gridChanged={handleGridChanged}
    />
  {:else}
    <DrawingBoard
      width={size}
      height={size}
      {selectedShape}
      {selectedColor}
      {selectMode}
      {paintMode}
      {colorPickerMode}
      {zoom}
      {quarterRotation}
      {halfCircleRotation}
      {selection}
      on:colorPicked={handleColorPicked}
      on:selectionChanged={handleSelectionChanged}
      on:gridChanged={handleGridChanged}
    />
  {/if}
</main>
