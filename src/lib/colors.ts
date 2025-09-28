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
import chroma from "chroma-js";

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

// Helper: convert hex to HSL using chroma-js
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const hsl = chroma(hex).hsl();
  // chroma.js returns h as NaN for grayscale colors, we'll use 0
  // s and l are in [0, 1], we convert them to [0, 100]
  return { h: isNaN(hsl[0]) ? 0 : hsl[0], s: hsl[1] * 100, l: hsl[2] * 100 };
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
  Object.values(buckets).forEach((arr) =>
    arr.sort((a, b) => chroma(a.rgb).hcl()[2] - chroma(b.rgb).hcl()[2]),
  );
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

// Export 2D palette for UI display (6 colors per row)
export const palette2D: ColorHSL[][] = groupAndReflow(
  getFilteredColorHSLs(),
  15,
  6,
);

// Sort colors using chroma.js perceptual sort (by hue, luminance, chroma)
export function getSortedColorPalette(): Color[] {
  return [...colorPalette].sort((a, b) => {
    // chroma.sort expects array, so we use chroma.deltaE for perceptual diff
    // But for palette, sort by HCL (hue, chroma, luminance)
    const hclA = chroma(a.rgb).hcl();
    const hclB = chroma(b.rgb).hcl();
    // Sort by hue, then chroma, then luminance
    return hclB[0] - hclA[0] || hclB[1] - hclA[1] || hclB[2] - hclA[2];
  });
}
