import type { Grid, HistoryState } from "../types";

export class UndoRedoManager {
  private history: HistoryState[] = [];
  private currentIndex = -1;
  private maxHistory = 50;

  constructor(initialGrid?: Grid) {
    if (initialGrid) {
      this.addState(initialGrid);
    }
  }

  addState(grid: Grid): void {
    // Remove any history after current index (when user undoes then makes new action)
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    // Add new state
    this.history.push({
      grid: JSON.parse(JSON.stringify(grid)), // Deep copy
      timestamp: Date.now(),
    });

    // Maintain max history size
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    } else {
      this.currentIndex++;
    }
  }

  undo(): Grid | null {
    if (this.canUndo()) {
      this.currentIndex--;
      return JSON.parse(JSON.stringify(this.history[this.currentIndex].grid));
    }
    return null;
  }

  redo(): Grid | null {
    if (this.canRedo()) {
      this.currentIndex++;
      return JSON.parse(JSON.stringify(this.history[this.currentIndex].grid));
    }
    return null;
  }

  canUndo(): boolean {
    return this.currentIndex > 0;
  }

  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }

  clear(): void {
    this.history = [];
    this.currentIndex = -1;
  }

  getCurrentState(): Grid | null {
    if (this.currentIndex >= 0 && this.currentIndex < this.history.length) {
      return JSON.parse(JSON.stringify(this.history[this.currentIndex].grid));
    }
    return null;
  }
}
