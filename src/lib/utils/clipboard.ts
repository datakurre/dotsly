import type { Grid, GridCell, ClipboardData, Selection } from "../types";

export class ClipboardManager {
  private clipboardData: ClipboardData | null = null;

  copy(grid: Grid, selection: Selection, gridWidth: number): void {
    const { startX, startY, endX, endY } = this.normalizeSelection(selection);
    const width = endX - startX + 1;
    const height = endY - startY + 1;
    const cells: (GridCell | null)[] = [];

    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const index = y * gridWidth + x;
        cells.push(
          grid[index] ? JSON.parse(JSON.stringify(grid[index])) : null,
        );
      }
    }

    this.clipboardData = { cells, width, height };
  }

  cut(grid: Grid, selection: Selection, gridWidth: number): Grid {
    this.copy(grid, selection, gridWidth);
    return this.deleteSelection(grid, selection, gridWidth);
  }

  paste(
    grid: Grid,
    x: number,
    y: number,
    gridWidth: number,
    gridHeight: number,
  ): Grid {
    if (!this.clipboardData) return grid;

    const newGrid = [...grid];
    const { cells, width, height } = this.clipboardData;

    for (let dy = 0; dy < height; dy++) {
      for (let dx = 0; dx < width; dx++) {
        const targetX = x + dx;
        const targetY = y + dy;

        if (
          targetX >= 0 &&
          targetX < gridWidth &&
          targetY >= 0 &&
          targetY < gridHeight
        ) {
          const sourceIndex = dy * width + dx;
          const targetIndex = targetY * gridWidth + targetX;
          newGrid[targetIndex] = cells[sourceIndex]
            ? JSON.parse(JSON.stringify(cells[sourceIndex]))
            : null;
        }
      }
    }

    return newGrid;
  }

  deleteSelection(grid: Grid, selection: Selection, gridWidth: number): Grid {
    const { startX, startY, endX, endY } = this.normalizeSelection(selection);
    const newGrid = [...grid];

    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const index = y * gridWidth + x;
        newGrid[index] = null;
      }
    }

    return newGrid;
  }

  rotateSelection(
    grid: Grid,
    selection: Selection,
    gridWidth: number,
    clockwise: boolean = true,
  ): Grid {
    const { startX, startY, endX, endY } = this.normalizeSelection(selection);
    const width = endX - startX + 1;
    const height = endY - startY + 1;

    // Extract selection
    const cells: (GridCell | null)[] = [];
    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const index = y * gridWidth + x;
        cells.push(grid[index]);
      }
    }

    // Rotate cells
    const rotatedCells: (GridCell | null)[] = new Array(width * height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const sourceIndex = y * width + x;
        let targetIndex: number;

        if (clockwise) {
          targetIndex = x * height + (height - 1 - y);
        } else {
          targetIndex = (width - 1 - x) * height + y;
        }

        const cell = cells[sourceIndex];
        rotatedCells[targetIndex] = cell
          ? {
              ...cell,
              rotation: (cell.rotation + (clockwise ? 1 : -1) + 4) % 4,
            }
          : null;
      }
    }

    // Put rotated cells back (for square selections only)
    if (width === height) {
      const newGrid = [...grid];
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const targetIndex = (startY + y) * gridWidth + (startX + x);
          const sourceIndex = y * width + x;
          newGrid[targetIndex] = rotatedCells[sourceIndex];
        }
      }
      return newGrid;
    }

    return grid; // Can't rotate non-square selections in place
  }

  moveSelection(
    grid: Grid,
    selection: Selection,
    deltaX: number,
    deltaY: number,
    gridWidth: number,
    gridHeight: number,
  ): { grid: Grid; selection: Selection } {
    const { startX, startY, endX, endY } = this.normalizeSelection(selection);
    const width = endX - startX + 1;
    const height = endY - startY + 1;

    const newStartX = Math.max(0, Math.min(gridWidth - width, startX + deltaX));
    const newStartY = Math.max(
      0,
      Math.min(gridHeight - height, startY + deltaY),
    );
    const newEndX = newStartX + width - 1;
    const newEndY = newStartY + height - 1;

    // If no actual movement, return unchanged
    if (newStartX === startX && newStartY === startY) {
      return { grid, selection };
    }

    // Extract cells
    const cells: (GridCell | null)[] = [];
    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const index = y * gridWidth + x;
        cells.push(grid[index]);
      }
    }

    // Clear original area
    let newGrid = this.deleteSelection(grid, selection, gridWidth);

    // Place in new location
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const sourceIndex = y * width + x;
        const targetIndex = (newStartY + y) * gridWidth + (newStartX + x);
        newGrid[targetIndex] = cells[sourceIndex];
      }
    }

    const newSelection: Selection = {
      ...selection,
      startX: newStartX,
      startY: newStartY,
      endX: newEndX,
      endY: newEndY,
    };

    return { grid: newGrid, selection: newSelection };
  }

  hasClipboardData(): boolean {
    return this.clipboardData !== null;
  }

  getClipboardSize(): { width: number; height: number } | null {
    return this.clipboardData
      ? { width: this.clipboardData.width, height: this.clipboardData.height }
      : null;
  }

  private normalizeSelection(selection: Selection): {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } {
    return {
      startX: Math.min(selection.startX, selection.endX),
      startY: Math.min(selection.startY, selection.endY),
      endX: Math.max(selection.startX, selection.endX),
      endY: Math.max(selection.startY, selection.endY),
    };
  }
}
