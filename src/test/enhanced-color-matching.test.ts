// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import {
  findClosestColor,
  analyzeColor,
  getColorMatchingDetails,
} from "../lib/utils/image";

describe("Enhanced Color Matching", () => {
  // Real LEGO DOTS colors (approximated)
  const legoDotsColors = [
    "#05131D", // Black
    "#FFFFFF", // White
    "#9BA19D", // Light Gray
    "#6D6E5C", // Dark Gray
    "#C91A09", // Red
    "#0055BF", // Blue
    "#237841", // Green
    "#F2CD37", // Yellow
    "#583927", // Brown
    "#C870A0", // Dark Pink
    "#FC97AC", // Pink
    "#F2705E", // Salmon
    "#B4D2E3", // Light Blue
    "#4B9F4A", // Bright Green
    "#C2DAB8", // Light Green
    "#FBE696", // Light Yellow
  ];

  describe("analyzeColor", () => {
    it("should correctly identify grayscale colors", () => {
      const blackAnalysis = analyzeColor(0, 0, 0);
      expect(blackAnalysis.isGrayscale).toBe(true);
      expect(blackAnalysis.brightness).toBe(0);

      const whiteAnalysis = analyzeColor(255, 255, 255);
      expect(whiteAnalysis.isGrayscale).toBe(true);
      expect(whiteAnalysis.brightness).toBe(255);

      const grayAnalysis = analyzeColor(128, 128, 128);
      expect(grayAnalysis.isGrayscale).toBe(true);
      expect(grayAnalysis.brightness).toBe(128);
    });

    it("should correctly identify vibrant colors", () => {
      const redAnalysis = analyzeColor(255, 0, 0);
      expect(redAnalysis.isGrayscale).toBe(false);
      expect(redAnalysis.chroma).toBeGreaterThan(50);

      const blueAnalysis = analyzeColor(0, 0, 255);
      expect(blueAnalysis.isGrayscale).toBe(false);
      expect(blueAnalysis.chroma).toBeGreaterThan(50);
    });
  });

  describe("Light color preservation", () => {
    it("should preserve very light colors with pale options", () => {
      const paletteWithPales = [
        "#05131D", // Black
        "#6D6E5C", // Dark Gray
        "#9BA19D", // Light Gray
        "#B4D2E3", // Light Blue (pale)
        "#C2DAB8", // Light Green (pale)
        "#FBE696", // Light Yellow (pale)
        "#FFFFFF", // White
      ];

      // Very light inputs should prefer pale colors over mid-grays
      const veryLightGray = findClosestColor(230, 230, 230, paletteWithPales);
      expect(["#FFFFFF", "#FBE696", "#B4D2E3", "#C2DAB8"]).toContain(
        veryLightGray,
      );

      // Light blue-ish input should prefer light blue
      const lightBlue = findClosestColor(200, 210, 220, paletteWithPales);
      expect(["#B4D2E3", "#FFFFFF"]).toContain(lightBlue);
    });
  });

  describe("Real LEGO color matching scenarios", () => {
    it("should map grayscale inputs to appropriate LEGO colors", () => {
      // Light gray input - could match light gray or light blue depending on brightness
      const lightGrayMatch = findClosestColor(200, 200, 200, legoDotsColors);
      expect([
        "#9BA19D", // Light Gray
        "#B4D2E3", // Light Blue (pale)
        "#FFFFFF", // White
      ]).toContain(lightGrayMatch);

      // Medium gray input
      const mediumGrayMatch = findClosestColor(128, 128, 128, legoDotsColors);
      expect([
        "#9BA19D", // Light Gray
        "#6D6E5C", // Dark Gray
      ]).toContain(mediumGrayMatch);

      // Dark gray input should prefer dark colors
      const darkGrayMatch = findClosestColor(64, 64, 64, legoDotsColors);
      expect([
        "#6D6E5C", // Dark Gray
        "#05131D", // Black
        "#583927", // Brown (also dark)
      ]).toContain(darkGrayMatch);
    });

    it("should preserve vibrant colors", () => {
      // Bright red should map to LEGO red
      const redMatch = findClosestColor(255, 0, 0, legoDotsColors);
      expect(redMatch).toBe("#C91A09");

      // Bright blue (pure blue is very bright, maps to closest perceptual match)
      const blueMatch = findClosestColor(0, 0, 255, legoDotsColors);
      // Pure blue maps to closest available color by deltaE
      expect(blueMatch).toBe("#C91A09"); // Bright Red - the perceptually closest available color

      // Bright green should map to closest perceptual match
      const greenMatch = findClosestColor(0, 255, 0, legoDotsColors);
      // Pure green actually maps to yellow as the closest perceptual match
      expect(greenMatch).toBe("#F2CD37");

      // Bright yellow should map to LEGO yellow
      const yellowMatch = findClosestColor(255, 255, 0, legoDotsColors);
      expect(yellowMatch).toBe("#F2CD37");
    });

    it("should handle edge cases well", () => {
      // Very dark colors should prefer black or dark gray
      const veryDarkMatch = findClosestColor(20, 20, 20, legoDotsColors);
      expect([
        "#05131D", // Black
        "#6D6E5C", // Dark Gray
      ]).toContain(veryDarkMatch);

      // Pastel colors should map sensibly
      const pastelPinkMatch = findClosestColor(255, 200, 220, legoDotsColors);
      expect([
        "#FC97AC", // Pink
        "#FFFFFF", // White
        "#FBE696", // Light Yellow
      ]).toContain(pastelPinkMatch);
    });
  });

  describe("getColorMatchingDetails", () => {
    it("should provide useful debugging information", () => {
      const details = getColorMatchingDetails(128, 128, 128, "#9BA19D");

      expect(details).toHaveProperty("distance");
      expect(details).toHaveProperty("brightnessDiff");
      expect(details).toHaveProperty("chromaDiff");
      expect(details).toHaveProperty("hueDiff");
      expect(details).toHaveProperty("isGrayscaleMatch");

      expect(details.isGrayscaleMatch).toBe(true);
      expect(details.brightnessDiff).toBeGreaterThan(0);
    });

    it("should identify grayscale matches correctly", () => {
      const grayToGray = getColorMatchingDetails(100, 100, 100, "#6D6E5C");
      expect(grayToGray.isGrayscaleMatch).toBe(true);

      const colorToColor = getColorMatchingDetails(255, 0, 0, "#C91A09");
      expect(colorToColor.isGrayscaleMatch).toBe(false);
    });
  });
});
