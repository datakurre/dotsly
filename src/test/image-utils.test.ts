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
  });

  describe("mapBrightnessToShape", () => {
    it("should map dark colors to squares", () => {
      expect(mapBrightnessToShape(0)).toBe("square");
      expect(mapBrightnessToShape(50)).toBe("square");
      expect(mapBrightnessToShape(84)).toBe("square");
    });

    it("should map medium colors to arches", () => {
      expect(mapBrightnessToShape(85)).toBe("arch");
      expect(mapBrightnessToShape(100)).toBe("arch");
      expect(mapBrightnessToShape(169)).toBe("arch");
    });

    it("should map light colors to circles", () => {
      expect(mapBrightnessToShape(170)).toBe("circle");
      expect(mapBrightnessToShape(200)).toBe("circle");
      expect(mapBrightnessToShape(255)).toBe("circle");
    });
  });
});
