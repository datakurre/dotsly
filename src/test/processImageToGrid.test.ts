// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { processImageToGrid } from "../lib/utils/processImageToGrid";

describe("processImageToGrid", () => {
  beforeEach(() => {
    // Mock Canvas API
    const mockCanvas = {
      width: 0,
      height: 0,
      getContext() {
        return {
          drawImage: vi.fn(),
          getImageData: (
            x: number,
            y: number,
            width: number,
            height: number,
          ) => ({
            data: new Uint8ClampedArray(4 * width * height).fill(128), // Gray pixels
          }),
        };
      },
    };

    // Mock document.createElement for canvas
    vi.stubGlobal("document", {
      createElement: (tag: string) => {
        if (tag === "canvas") {
          return mockCanvas;
        }
        return null;
      },
    });
  });

  it("should process image to grid with correct dimensions", async () => {
    const mockImageSrc = "data:image/png;base64,mockdata";
    const colorPalette = ["#FF0000", "#00FF00", "#0000FF"];

    const result = await processImageToGrid(mockImageSrc, colorPalette, 2, 2);

    expect(result).toHaveLength(4); // 2x2 grid
    expect(result[0]).toHaveProperty("shape");
    expect(result[0]).toHaveProperty("color");
    expect(result[0]).toHaveProperty("rotation");
  });

  it("should map brightness to appropriate shapes", async () => {
    const mockImageSrc = "data:image/png;base64,mockdata";
    const colorPalette = ["#000000", "#808080", "#FFFFFF"];

    const result = await processImageToGrid(mockImageSrc, colorPalette, 1, 1);

    expect(result).toHaveLength(1);
    // With brightness 128 (medium gray), should map to circle (128/255 = 0.5, above 0.45 threshold)
    expect(result[0].shape).toBe("circle");
  });
});
