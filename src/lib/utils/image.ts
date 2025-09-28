import chroma from "chroma-js";

// Find closest color in palette
export function findClosestColor(
  r: number,
  g: number,
  b: number,
  colorPalette: string[],
): string {
  const lab = chroma(r, g, b).lab();
  let closestHex = colorPalette[0];
  let minDistance = Infinity;
  for (const hex of colorPalette) {
    const distance = chroma.deltaE(lab, chroma(hex).lab());
    if (distance < minDistance) {
      minDistance = distance;
      closestHex = hex;
    }
  }
  return closestHex;
}

// Map brightness to shape
export function mapBrightnessToShape(
  brightness: number,
): "circle" | "quarter" | "square" {
  if (brightness < 85) {
    return "square";
  } else if (brightness < 170) {
    return "circle";
  } else {
    return "quarter";
  }
}
