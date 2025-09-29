import { converter, differenceEuclidean } from "culori";

const oklabConverter = converter("oklab");

export type PaletteColor = {
  hex: string;
  lab: ReturnType<typeof oklabConverter>;
};

/**
 * Finds the closest color in the palette using perceptual color difference in the Oklab color space.
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @param labPalette - The color palette with pre-converted Oklab values.
 * @returns The closest color from the palette.
 */
export function findClosestColor(
  r: number,
  g: number,
  b: number,
  labPalette: PaletteColor[],
): PaletteColor {
  const inputLab = oklabConverter({
    mode: "rgb",
    r: r / 255,
    g: g / 255,
    b: b / 255,
  });

  let minDistance = Infinity;
  let closestColor = labPalette[0];

  for (const paletteColor of labPalette) {
    const distance = differenceEuclidean("oklab")(inputLab, paletteColor.lab);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = paletteColor;
    }
  }

  return closestColor;
}
