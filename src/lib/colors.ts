/**
 * Color management module for Dotsly.
 *
 * This module loads colors from `data/colors.csv` and filters them based on
 * availability in the brick sets located in `data/sets/*.csv`. It provides
 * different color palette formats for the UI and for image processing.
 */

import type { Color, ColorHSL } from "./types";
import colorsCsv from "../../data/colors.csv?raw";
import { converter } from "culori";

// Import all CSVs under data/sets (Vite's import.meta.glob)
const setsCsvModules = import.meta.glob("../../data/sets/*.csv", {
  query: "?raw",
  import: "default",
  eager: true,
});

/**
 * Parses a CSV string of color data into an array of Color objects.
 * @param csv The raw CSV string.
 * @returns An array of Color objects.
 */
export function parseColorsCsv(csv: string): Color[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [id, name, rgb, is_trans] = line.split(",");
    return {
      id: Number(id),
      name,
      rgb: `#${rgb}`,
      is_trans: is_trans === "True",
    };
  });
}

/**
 * Extracts all unique color IDs from the available brick sets.
 * @returns A Set of numeric color IDs.
 */
function getAvailableColorIds(): Set<number> {
  const colorIds = new Set<number>();
  for (const path in setsCsvModules) {
    const csv = setsCsvModules[path] as string;
    const lines = csv.trim().split("\n");
    for (const line of lines.slice(1)) {
      const colorId = Number(line.split(",")[1]);
      if (!isNaN(colorId)) {
        colorIds.add(colorId);
      }
    }
  }
  return colorIds;
}

const hslConverter = converter("hsl");

/**
 * Converts a HEX color to an HSL object.
 * @param hex The hex color string.
 * @returns An object with h, s, l properties.
 */
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const hsl = hslConverter(hex);
  return {
    h: hsl.h ?? 0, // Handle undefined hue for grayscale
    s: hsl.s * 100,
    l: hsl.l * 100,
  };
}

/**
 * Groups colors into a 2D array for UI display.
 * Colors are bucketed by hue and then sorted by lightness.
 * @param colors An array of colors with HSL values.
 * @param bucketSize The hue range for each bucket.
 * @param maxPerRow The maximum number of colors per row in the output array.
 * @returns A 2D array of ColorHSL objects.
 */
function groupColorsForUI(
  colors: ColorHSL[],
  bucketSize = 15,
  maxPerRow = 6,
): ColorHSL[][] {
  const buckets: Record<number, ColorHSL[]> = {};
  const seen = new Set<string>();

  for (const color of colors) {
    if (seen.has(color.rgb)) continue;
    seen.add(color.rgb);

    const bucket = color.s < 10 ? 999 : Math.floor(color.h / bucketSize);
    if (!buckets[bucket]) {
      buckets[bucket] = [];
    }
    buckets[bucket].push(color);
  }

  Object.values(buckets).forEach((bucket) => bucket.sort((a, b) => a.l - b.l));

  const sortedBuckets = Object.keys(buckets)
    .map(Number)
    .sort((a, b) => a - b)
    .flatMap((key) => buckets[key]);

  const rows: ColorHSL[][] = [];
  for (let i = 0; i < sortedBuckets.length; i += maxPerRow) {
    rows.push(sortedBuckets.slice(i, i + maxPerRow));
  }
  return rows;
}

// Main logic to build the color palettes
const allColors = parseColorsCsv(colorsCsv);
const availableColorIds = getAvailableColorIds();

/**
 * The primary color palette, containing only colors available in the sets.
 * Filters out transparent colors as they are not typically used for mosaics.
 */
export const colorPalette: Color[] = allColors.filter(
  (c) => availableColorIds.has(c.id) && !c.name.includes("Trans"),
);

/**
 * A 2D color palette for the UI, grouped by hue and sorted by lightness.
 */
export const palette2D: ColorHSL[][] = groupColorsForUI(
  colorPalette.map((c) => ({ ...c, ...hexToHsl(c.rgb) })),
);

/**
 * A color palette sorted perceptually by Oklch values (Luminance, Chroma, Hue).
 * This is optimized for image processing tasks to find the closest color.
 */
const oklchConverter = converter("oklch");
export const imageColorPalette: Color[] = [...colorPalette].sort((a, b) => {
  const oklchA = oklchConverter(a.rgb);
  const oklchB = oklchConverter(b.rgb);
  const hA = oklchA.h ?? 0;
  const hB = oklchB.h ?? 0;
  if (Math.round(hA) !== Math.round(hB)) return hA - hB;
  if (Math.round(oklchA.c * 100) !== Math.round(oklchB.c * 100))
    return oklchA.c - oklchB.c;
  return oklchA.l - oklchB.l;
});
