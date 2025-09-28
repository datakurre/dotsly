import type { KeyboardShortcut } from "../types";

export const keyboardShortcuts: Record<string, KeyboardShortcut> = {
  // Selection tool
  select: { key: "v", action: "select" },

  // Drawing tools
  square: { key: "s", action: "square" },
  circle: { key: "c", action: "circle" },
  quarter: { key: "q", action: "quarter" },

  // Tools
  fill: { key: "f", action: "fill" },
  colorPicker: { key: "i", action: "colorPicker" },

  // Zoom
  zoomIn: { key: "+", action: "zoomIn" },
  zoomInAlt: { key: "=", action: "zoomIn" },
  zoomOut: { key: "-", action: "zoomOut" },

  // Edit actions
  undo: { key: "z", ctrl: true, action: "undo" },
  redo: { key: "z", ctrl: true, shift: true, action: "redo" },

  // Clipboard
  cut: { key: "x", ctrl: true, action: "cut" },
  copy: { key: "c", ctrl: true, action: "copy" },
  paste: { key: "v", ctrl: true, action: "paste" },

  // Selection actions
  selectAll: { key: "a", ctrl: true, action: "selectAll" },
  deselect: { key: "d", ctrl: true, action: "deselect" },

  // Transform
  rotateLeft: { key: "r", action: "rotateLeft" },
  rotateRight: { key: "r", shift: true, action: "rotateRight" },

  // Move selection
  moveUp: { key: "ArrowUp", action: "moveUp" },
  moveDown: { key: "ArrowDown", action: "moveDown" },
  moveLeft: { key: "ArrowLeft", action: "moveLeft" },
  moveRight: { key: "ArrowRight", action: "moveRight" },

  // Delete
  delete: { key: "Delete", action: "delete" },
  backspace: { key: "Backspace", action: "delete" },
};

export function matchesShortcut(
  event: KeyboardEvent,
  shortcut: KeyboardShortcut,
): boolean {
  let key = event.key === " " ? "Space" : event.key;

  // Normalize key to lowercase for comparison (Shift+r gives 'R', but we want to match 'r')
  const normalizedKey = key.toLowerCase();
  const shortcutKey = shortcut.key.toLowerCase();

  if (normalizedKey !== shortcutKey) return false;
  if (!!event.ctrlKey !== !!shortcut.ctrl) return false;
  if (!!event.altKey !== !!shortcut.alt) return false;

  // For + and - keys, ignore shift modifier since they naturally require shift on most keyboards
  if (shortcut.key === "+" || shortcut.key === "-" || shortcut.key === "=") {
    return true;
  }

  if (!!event.shiftKey !== !!shortcut.shift) return false;

  return true;
}

export function getShortcutDescription(shortcut: KeyboardShortcut): string {
  const parts = [];
  if (shortcut.ctrl) parts.push("Ctrl");
  if (shortcut.shift) parts.push("Shift");
  if (shortcut.alt) parts.push("Alt");

  let key = shortcut.key;
  if (key === " ") key = "Space";
  if (key === "=") key = "+";

  parts.push(key.toUpperCase());
  return parts.join("+");
}
