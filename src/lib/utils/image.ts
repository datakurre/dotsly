import chroma from "chroma-js";

// Convert hex color to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }
  // Handle short hex format
  const shortResult = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
  if (shortResult) {
    return {
      r: parseInt(shortResult[1] + shortResult[1], 16),
      g: parseInt(shortResult[2] + shortResult[2], 16),
      b: parseInt(shortResult[3] + shortResult[3], 16),
    };
  }
  throw new Error(`Invalid hex color: ${hex}`);
}

/**
 * Find the closest color in the palette using perceptual color matching.
 * Simplified approach with deltaE base + targeted bonuses for light colors and vibrancy.
 */
export function findClosestColor(
  r: number,
  g: number,
  b: number,
  colorPalette: string[],
): string {
  const inputColor = chroma(r, g, b);
  const inputLab = inputColor.lab();
  const [inputHue, inputChroma, inputLightness] = inputColor.hcl();

  let closestHex = colorPalette[0];
  let minDistance = Infinity;

  for (const hex of colorPalette) {
    const paletteColor = chroma(hex);
    const paletteLab = paletteColor.lab();
    const [paletteHue, paletteChroma, paletteLightness] = paletteColor.hcl();

    // Use deltaE as the base - it's perceptually accurate
    let distance = chroma.deltaE(inputLab, paletteLab);

    // Apply targeted bonuses for specific cases

    // Light color preservation - critical for the PNG colors
    if (inputLightness > 85 && paletteLightness > 75) {
      distance *= 0.6; // Strong bonus for very light colors
    } else if (inputLightness > 70 && paletteLightness > 65) {
      distance *= 0.8; // Moderate bonus for light colors
    }

    // Enhanced vibrancy preference - prefer vibrant colors when available
    if (inputChroma > 40) {
      if (paletteChroma > inputChroma * 0.7) {
        distance *= 0.6; // Strong bonus for maintaining high chroma
      } else if (paletteChroma > 30) {
        distance *= 0.8; // Moderate bonus for reasonably vibrant colors
      }
    } else if (inputChroma > 20 && paletteChroma > 25) {
      // Even moderately colorful inputs prefer vibrant palette colors
      distance *= 0.85; // Light bonus for vibrant options
    }

    // Avoid mapping grayscale to overly colorful unless very close
    const inputIsGray = inputChroma < 15;
    const paletteIsVibrant = paletteChroma > 45;
    if (inputIsGray && paletteIsVibrant && distance > 10) {
      distance *= 1.4; // Penalty for gray-to-vibrant unless very close match
    }

    if (distance < minDistance) {
      minDistance = distance;
      closestHex = hex;
    }
  }

  return closestHex;
}

/**
 * Determine if a position is on the edge of the grid for shape selection.
 */
export function isEdgePosition(
  x: number,
  y: number,
  width: number,
  height: number,
): boolean {
  return x === 0 || y === 0 || x === width - 1 || y === height - 1;
}

/**
 * Map brightness to LEGO DOTS shapes with edge-aware preferences.
 *
 * Strategy:
 * - Dark areas: quarters (minimal presence)
 * - Medium areas: circles (moderate presence)
 * - Bright areas: squares (maximum presence)
 * - Edges: prefer half-circles and quarters for better blending
 * - Interior: prefer squares and circles for maximum contrast
 */
export function mapBrightnessToShape(
  brightness: number,
  isEdge: boolean = false,
): string {
  // Convert RGB brightness (0-255) to normalized value (0-1)
  const normalizedBrightness = brightness / 255;

  if (isEdge) {
    // Edge tiles: use shapes that blend better with surroundings
    if (normalizedBrightness < 0.2) return "quarter";
    if (normalizedBrightness < 0.5) return "halfCircle";
    if (normalizedBrightness < 0.8) return "circle";
    return "square"; // Very bright edges still need visibility
  } else {
    // Interior tiles: strongly prefer squares for maximum visibility and contrast
    if (normalizedBrightness < 0.1) return "quarter"; // Only very dark areas
    if (normalizedBrightness < 0.25) return "circle"; // Dark-medium areas
    return "square"; // Default to square for most interior areas
  }
}

/**
 * Analyze color properties for debugging and optimization.
 */
export function analyzeColor(r: number, g: number, b: number) {
  const color = chroma(r, g, b);
  const [hue, chromaVal, lightness] = color.hcl();

  return {
    brightness: (r + g + b) / 3,
    lightness,
    chroma: chromaVal || 0,
    hue: hue || 0,
    isGrayscale: (chromaVal || 0) < 10,
    isLight: lightness > 70,
    isDark: lightness < 30,
    isVibrant: (chromaVal || 0) > 40,
  };
}

// Get color matching score breakdown for debugging
export function getColorMatchingDetails(
  inputR: number,
  inputG: number,
  inputB: number,
  targetHex: string,
): {
  distance: number;
  brightnessDiff: number;
  chromaDiff: number;
  hueDiff: number;
  isGrayscaleMatch: boolean;
} {
  const inputColor = chroma(inputR, inputG, inputB);
  const targetColor = chroma(targetHex);

  const [inputHue, inputChroma, inputLightness] = inputColor.hcl();
  const [targetHue, targetChroma, targetLightness] = targetColor.hcl();

  const inputBrightness = (inputR + inputG + inputB) / 3;
  const targetRgb = targetColor.rgb();
  const targetBrightness = (targetRgb[0] + targetRgb[1] + targetRgb[2]) / 3;

  const inputIsGrayscale = inputChroma < 15;
  const targetIsGrayscale = targetChroma < 15;

  const hueDiff = Math.min(
    Math.abs(inputHue - targetHue),
    360 - Math.abs(inputHue - targetHue),
  );

  return {
    distance: chroma.deltaE(inputColor.lab(), targetColor.lab()),
    brightnessDiff: Math.abs(inputBrightness - targetBrightness),
    chromaDiff: Math.abs(inputChroma - targetChroma),
    hueDiff: isNaN(hueDiff) ? 0 : hueDiff,
    isGrayscaleMatch: inputIsGrayscale && targetIsGrayscale,
  };
}
