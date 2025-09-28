// Simple test to verify color consistency
import { colorPalette, palette2D } from "./src/lib/colors.ts";

console.log("Available colors in palette:");
console.log("Total colors:", colorPalette.length);
console.log("First few colors:", colorPalette.slice(0, 5));

console.log("\nPalette2D structure:");
console.log("Number of rows:", palette2D.length);
console.log("Colors in first row:", palette2D[0]?.length || 0);

// Verify both sources have the same colors
const palette1DFromPalette2D = palette2D.flat();
const colorsInPalette = new Set(colorPalette.map((c) => c.rgb));
const colorsInPalette2D = new Set(palette1DFromPalette2D.map((c) => c.rgb));

console.log("\nConsistency check:");
console.log("Colors in colorPalette:", colorsInPalette.size);
console.log("Colors in palette2D:", colorsInPalette2D.size);

const missingInPalette2D = [...colorsInPalette].filter(
  (rgb) => !colorsInPalette2D.has(rgb),
);
const extraInPalette2D = [...colorsInPalette2D].filter(
  (rgb) => !colorsInPalette.has(rgb),
);

if (missingInPalette2D.length > 0) {
  console.log("Colors missing in palette2D:", missingInPalette2D);
}
if (extraInPalette2D.length > 0) {
  console.log("Extra colors in palette2D:", extraInPalette2D);
}

console.log(
  "✓ Color sources are consistent:",
  missingInPalette2D.length === 0 && extraInPalette2D.length === 0,
);
