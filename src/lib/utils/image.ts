// Utility to convert hex color to RGB
export function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

// Find closest color in palette
export function findClosestColor(
  r: number,
  g: number,
  b: number,
  colorPalette: string[],
): string {
  let closestHex = colorPalette[0];
  let minDistance = Infinity;
  for (const hex of colorPalette) {
    const color = hexToRgb(hex);
    const distance = Math.sqrt(
      Math.pow(r - color.r, 2) +
        Math.pow(g - color.g, 2) +
        Math.pow(b - color.b, 2),
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestHex = hex;
    }
  }
  return closestHex;
}

// Map brightness to shape
export function mapBrightnessToShape(brightness: number): string {
  if (brightness < 85) {
    return "square";
  } else if (brightness < 170) {
    return "quarter";
  } else {
    return "circle";
  }
}
