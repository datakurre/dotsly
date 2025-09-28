/**
 * Color management module for Dotsly
 *
 * This module loads colors from colors.csv and filters them based on availability
 * in the bricks sets (data/sets/*.csv). It ensures that all components (toolbar,
 * palette, image processing) use the same consistent set of colors.
 *
 * Exports:
 * - colorPalette: Array of available colors { id, name, rgb, is_trans }
 * - palette2D: 2D array of colors organized by hue and lightness for UI display
 * - getFilteredColorHSLs(): Function to get colors with HSL values
 */

import type { Color, ColorHSL } from "./types";
import colorsCsv from "../../data/colors.csv?raw";

// Import all CSVs under data/sets (Vite import.meta.glob)
const setsCsvModules = import.meta.glob("../../data/sets/*.csv", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function parseColorsCsv(csv: string): Color[] {
  const lines = csv.trim().split("\n");
  const header = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const cols = line.split(",");
    return {
      id: Number(cols[0]),
      name: cols[1],
      rgb: `#${cols[2]}`,
      is_trans: cols[3] === "True",
    };
  });
}

// Helper: convert hex to HSL
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Group by main color (hue, Y axis), sort by tone (lightness, X axis, dark to light)

// Group colors by hue buckets (e.g. 24 buckets, 15deg each), then reflow to max 5 per row, no duplicates
function groupAndReflow(
  colors: ColorHSL[],
  bucketSize = 15,
  maxPerRow = 5,
): ColorHSL[][] {
  const buckets: { [bucket: number]: ColorHSL[] } = {};
  const seen = new Set<string>();
  for (const color of colors) {
    // Gray/white/black: treat as special bucket (hue undefined, low sat)
    const bucket = color.s < 10 ? 999 : Math.floor(color.h / bucketSize);
    if (!buckets[bucket]) buckets[bucket] = [];
    // Avoid duplicates by rgb
    if (!seen.has(color.rgb)) {
      buckets[bucket].push(color);
      seen.add(color.rgb);
    }
  }
  // Sort each bucket by lightness (dark to light)
  Object.values(buckets).forEach((arr) => arr.sort((a, b) => a.l - b.l));
  // Flatten buckets in hue order (grays last)
  const sortedKeys = Object.keys(buckets)
    .map(Number)
    .sort((a, b) => a - b);
  const allColors: ColorHSL[] = sortedKeys.flatMap((k) => buckets[k]);
  // Reflow into rows of maxPerRow
  const rows: ColorHSL[][] = [];
  for (let i = 0; i < allColors.length; i += maxPerRow) {
    rows.push(allColors.slice(i, i + maxPerRow));
  }
  return rows;
}

// Helper: get all color IDs used in any set
function getUsedColorIdsFromSets(): Set<number> {
  const colorIds = new Set<number>();
  for (const key in setsCsvModules) {
    const csv: string = setsCsvModules[key] as string;
    const lines = csv.trim().split("\n");
    for (const line of lines.slice(1)) {
      // skip header
      const cols = line.split(",");
      if (cols.length > 1) {
        const colorId = Number(cols[1]);
        if (!isNaN(colorId)) colorIds.add(colorId);
      }
    }
  }
  return colorIds;
}

const usedColorIds = getUsedColorIdsFromSets();

// Export filtered color palette (only colors available in sets and not containing 'Trans-Clear')
export const colorPalette: Color[] = parseColorsCsv(colorsCsv).filter(
  (c) => usedColorIds.has(c.id) && !c.name.includes("Trans-Clear"),
);

// Export filtered color palette with HSL values
export function getFilteredColorHSLs(): ColorHSL[] {
  return colorPalette.map((c) => {
    const hsl = hexToHsl(c.rgb);
    return { ...c, ...hsl };
  });
}

// Export 2D palette for UI display (only colors available in sets)
export const palette2D: ColorHSL[][] = groupAndReflow(getFilteredColorHSLs());
