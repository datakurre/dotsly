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

// Find closest color in palette with brightness-aware matching
export function findClosestColor(
  r: number,
  g: number,
  b: number,
  colorPalette: string[],
): string {
  const inputColor = chroma(r, g, b);
  const inputLab = inputColor.lab();
  const inputHcl = inputColor.hcl();
  const inputLightness = inputHcl[2];
  const inputHue = inputHcl[0];

  let closestHex = colorPalette[0];
  let minScore = Infinity;

  for (const hex of colorPalette) {
    const paletteColor = chroma(hex);
    const paletteHcl = paletteColor.hcl();
    const paletteLightness = paletteHcl[2];

    // Base color distance in LAB space
    const colorDistance = chroma.deltaE(inputLab, paletteColor.lab());

    // Brightness penalty: prefer darker colors for bright input colors
    let brightnessPenalty = 0;
    if (inputLightness > 60) {
      // If input is bright
      // Penalize colors that are brighter than input
      if (paletteLightness > inputLightness) {
        brightnessPenalty = (paletteLightness - inputLightness) * 2;
      }
      // Bonus for darker colors
      else if (paletteLightness < inputLightness * 0.8) {
        brightnessPenalty = -Math.min(15, inputLightness - paletteLightness);
      }
    }

    // Special handling for blue colors
    let blueBonus = 0;
    if (!isNaN(inputHue) && inputHue >= 200 && inputHue <= 280) {
      // Blue range
      const paletteHue = paletteHcl[0];
      if (!isNaN(paletteHue)) {
        // Bonus for Dark Bluish Gray and Dark Turquoise for blue inputs
        if (hex === "#6C6E68" || hex === "#008F9B") {
          // Dark Bluish Gray or Dark Turquoise
          blueBonus = -10;
        }
        // Bonus for colors in blue-cyan range
        else if (
          (paletteHue >= 180 && paletteHue <= 220) || // Cyan-blue
          (paletteHue >= 200 && paletteHue <= 280)
        ) {
          // Blue range
          blueBonus = -5;
        }
      }
    }

    const totalScore = colorDistance + brightnessPenalty + blueBonus;

    if (totalScore < minScore) {
      minScore = totalScore;
      closestHex = hex;
    }
  }

  return closestHex;
}

export function mapBrightnessToShape(
  brightness: number,
  isEdge: boolean,
): string {
  if (brightness < 51) return "quarter"; // 0-20%
  if (brightness < 102) return "circle"; // 20-40%
  if (brightness < 153) return "halfCircle"; // 40-60%
  if (brightness < 204) return "square"; // 60-80%
  return "empty"; // 80-100%
}
