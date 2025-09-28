/**
 * Type definitions for Dotsly application
 */

export interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
}

export interface ColorHSL extends Color {
  h: number;
  s: number;
  l: number;
}

export type ShapeType = "square" | "circle" | "quarter";

export type ToolbarPosition = "left" | "top";

export interface GridCell {
  shape: ShapeType;
  color: string;
  rotation: number;
}

export type Grid = (GridCell | null)[];

export interface DrawingBoardProps {
  grid?: Grid | null;
  width: number;
  height: number;
  selectedShape: ShapeType;
  selectedColor: string;
  paintMode?: boolean;
  colorPickerMode?: boolean;
  toolbarPosition?: ToolbarPosition;
}

export interface ToolbarProps {
  selectedShape?: ShapeType;
  selectedColor?: string;
  toolbarPosition?: ToolbarPosition;
}

// Event detail types
export interface ShapeSelectedEvent {
  shape: ShapeType;
}

export interface ColorSelectedEvent {
  color: string;
}

export interface ImageUploadedEvent {
  src: string;
}

export interface PaintModeToggledEvent {
  paintMode: boolean;
}

export interface ColorPickerModeToggledEvent {
  colorPickerMode: boolean;
}

export interface ColorPickedEvent {
  color: string;
}
