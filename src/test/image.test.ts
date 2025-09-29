import { describe, it, expect } from "vitest";
import { findClosestColor, type PaletteColor } from "$lib/utils/image";
import { converter } from "culori";

const oklabConverter = converter("oklab");

const palette: PaletteColor[] = [
  { hex: "#000000", lab: oklabConverter("#000000") },
  { hex: "#FFFFFF", lab: oklabConverter("#FFFFFF") },
  { hex: "#FF0000", lab: oklabConverter("#FF0000") },
  { hex: "#00FF00", lab: oklabConverter("#00FF00") },
  { hex: "#0000FF", lab: oklabConverter("#0000FF") },
];

describe("findClosestColor", () => {
  it("should find the exact color if it exists in the palette", () => {
    const result = findClosestColor(255, 0, 0, palette);
    expect(result.hex).toBe("#FF0000");
  });

  it("should find the closest color for a color not in the palette", () => {
    // A dark red should map to red
    const result = findClosestColor(128, 0, 0, palette);
    expect(result.hex).toBe("#FF0000");
  });

  it("should distinguish between colors", () => {
    // A light gray should map to white
    const result = findClosestColor(240, 240, 240, palette);
    expect(result.hex).toBe("#FFFFFF");
  });

  it("should handle a very dark color", () => {
    // A very dark blue should map to black
    const result = findClosestColor(1, 1, 20, palette);
    expect(result.hex).toBe("#000000");
  });
});
