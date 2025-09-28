// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import {
  hexToRgb,
  findClosestColor,
  mapBrightnessToShape,
} from "../lib/utils/image";

describe("Image utilities", () => {
  describe("hexToRgb", () => {
    it("should convert hex colors to RGB", () => {
      expect(hexToRgb("#FF0000")).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb("#00FF00")).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb("#0000FF")).toEqual({ r: 0, g: 0, b: 255 });
      expect(hexToRgb("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
    });

    it("should handle short hex colors", () => {
      expect(hexToRgb("#F00")).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb("#0F0")).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb("#00F")).toEqual({ r: 0, g: 0, b: 255 });
    });

    it("should handle hex colors without #", () => {
      expect(hexToRgb("FF0000")).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb("F00")).toEqual({ r: 255, g: 0, b: 0 });
    });
  });

  describe("findClosestColor", () => {
    const palette = ["#FF0000", "#00FF00", "#0000FF", "#FFFFFF", "#000000"];

    it("should find exact matches", () => {
      expect(findClosestColor(255, 0, 0, palette)).toBe("#FF0000");
      expect(findClosestColor(0, 255, 0, palette)).toBe("#00FF00");
      expect(findClosestColor(0, 0, 255, palette)).toBe("#0000FF");
    });

    it("should find closest color for approximate matches", () => {
      expect(findClosestColor(250, 5, 5, palette)).toBe("#FF0000");
      expect(findClosestColor(5, 250, 5, palette)).toBe("#00FF00");
      expect(findClosestColor(5, 5, 250, palette)).toBe("#0000FF");
    });

    it("should handle single color palette", () => {
      expect(findClosestColor(255, 0, 0, ["#FF0000"])).toBe("#FF0000");
    });

    it("should prefer grayscales for grayscale input", () => {
      const paletteWithGrays = [
        "#FF0000",
        "#808080",
        "#404040",
        "#C0C0C0",
        "#000000",
      ];

      // Light gray should match light gray, not red
      expect(findClosestColor(200, 200, 200, paletteWithGrays)).toBe("#C0C0C0");

      // Medium gray should match medium gray
      expect(findClosestColor(128, 128, 128, paletteWithGrays)).toBe("#808080");

      // Dark gray should match dark gray
      expect(findClosestColor(64, 64, 64, paletteWithGrays)).toBe("#404040");
    });

    it("should preserve vibrant colors better", () => {
      const vibrantPalette = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#808080",
      ];

      // Bright red should stay red, not become gray
      expect(findClosestColor(255, 0, 0, vibrantPalette)).toBe("#FF0000");

      // Bright yellow should stay yellow
      expect(findClosestColor(255, 255, 0, vibrantPalette)).toBe("#FFFF00");

      // Bright magenta should stay magenta
      expect(findClosestColor(255, 0, 255, vibrantPalette)).toBe("#FF00FF");
    });

    it("should handle mixed grayscale and vibrant color scenarios", () => {
      const mixedPalette = [
        "#FF0000",
        "#FFFFFF",
        "#808080",
        "#000000",
        "#00FF00",
      ];

      // Pure grayscale input should prefer grayscale colors
      expect(findClosestColor(127, 127, 127, mixedPalette)).toBe("#808080");

      // Vibrant input should prefer vibrant colors
      expect(findClosestColor(200, 50, 50, mixedPalette)).toBe("#FF0000");
    });

    it("should strongly prefer more vibrant colors", () => {
      const paletteWithVibrancy = ["#800000", "#FF0000", "#FF6666", "#CCCCCC"];

      // Bright red input should prefer the most vibrant red
      expect(findClosestColor(255, 0, 0, paletteWithVibrancy)).toBe("#FF0000");

      // Should prefer vibrant over muted even with slight hue difference
      expect(findClosestColor(220, 20, 20, paletteWithVibrancy)).toBe(
        "#FF0000",
      );
    });

    it("should preserve light colors better", () => {
      const lightPalette = [
        "#000000",
        "#808080",
        "#E0E0E0",
        "#F0F0F0",
        "#FFFFFF",
      ];

      // Very light input should map to light colors, not mid-grays
      expect(findClosestColor(240, 240, 240, lightPalette)).toBe("#F0F0F0");
      expect(findClosestColor(220, 220, 220, lightPalette)).toBe("#E0E0E0");
    });
  });

  describe("mapBrightnessToShape", () => {
    it("should map darkest colors to quarters", () => {
      expect(mapBrightnessToShape(0)).toBe("quarter");
      expect(mapBrightnessToShape(25)).toBe("quarter");
      expect(mapBrightnessToShape(50)).toBe("circle"); // Above 38 threshold
    });
    it("should map low brightness with edge-aware logic", () => {
      // Interior: circles in lower medium range, squares preferred for most cases
      expect(mapBrightnessToShape(51, false)).toBe("circle"); // 51/255 = 0.2, in circle range
      // Edge: quarter at low brightness, halfCircle at medium
      expect(mapBrightnessToShape(51, true)).toBe("halfCircle");
      expect(mapBrightnessToShape(100, false)).toBe("square"); // 100/255 = 0.39, above 0.25 threshold
    });
    it("should map brightness based on edge status with new preferences", () => {
      expect(mapBrightnessToShape(75, true)).toBe("halfCircle");
      expect(mapBrightnessToShape(125, true)).toBe("halfCircle");
      expect(mapBrightnessToShape(175, true)).toBe("circle");
      expect(mapBrightnessToShape(225, true)).toBe("square");
    });

    it("should map high brightness appropriately", () => {
      // Non-edge tiles above circle range get squares
      expect(mapBrightnessToShape(175, false)).toBe("square");
      // Edge tiles in high range get circles, very high get squares
      expect(mapBrightnessToShape(175, true)).toBe("circle");
      expect(mapBrightnessToShape(225, true)).toBe("square");
    });

    it("should prefer squares/circles for interior, halfCircles for edges", () => {
      // Interior tiles maximize visibility with squares/circles
      expect(mapBrightnessToShape(60, false)).toBe("circle");
      expect(mapBrightnessToShape(150, false)).toBe("square");

      // Edge tiles blend better with halfCircles in medium range
      expect(mapBrightnessToShape(75, true)).toBe("halfCircle");
      expect(mapBrightnessToShape(150, true)).toBe("circle");
    });
    it("should map very bright colors to visible shapes (squares)", () => {
      // Very bright colors should remain visible, not be mapped to 'empty'
      // Only truly transparent/background areas should be 'empty'
      expect(mapBrightnessToShape(204)).toBe("square");
      expect(mapBrightnessToShape(230)).toBe("square");
      expect(mapBrightnessToShape(255)).toBe("square");
    });
  });
});
