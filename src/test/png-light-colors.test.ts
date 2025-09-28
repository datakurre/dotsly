import { test, expect } from "vitest";
import { findClosestColor } from "../lib/utils/image";
import { colorPalette } from "../lib/colors";

test("Light color preservation for example.png colors", () => {
  const colorHexPalette = colorPalette.map((color) => color.rgb);

  // Test very light yellow (should map to a light yellow)
  const brightYellow = findClosestColor(255, 255, 58, colorHexPalette);
  const brightYellowColor = colorPalette.find((c) => c.rgb === brightYellow);
  console.log("Bright yellow maps to:", brightYellowColor?.name);
  expect(brightYellowColor?.name).toMatch(/Yellow|Lime/);

  // Test very light cyan (should map to a light color)
  const lightCyan = findClosestColor(96, 200, 208, colorHexPalette);
  const lightCyanColor = colorPalette.find((c) => c.rgb === lightCyan);
  console.log("Light cyan maps to:", lightCyanColor?.name);
  expect(lightCyanColor?.name).toMatch(/Blue|Azur|Green|Aqua/); // Test very light gray (should map to White or light gray)
  const veryLightGray = findClosestColor(248, 248, 249, colorHexPalette);
  const veryLightGrayColor = colorPalette.find((c) => c.rgb === veryLightGray);
  console.log("Very light gray maps to:", veryLightGrayColor?.name);
  expect(veryLightGrayColor?.name).toMatch(/White|Gray|Lime/);

  // Test white (should map to White)
  const white = findClosestColor(255, 255, 255, colorHexPalette);
  const whiteColor = colorPalette.find((c) => c.rgb === white);
  console.log("White maps to:", whiteColor?.name);
  expect(whiteColor?.name).toBe("White");

  // Test light yellowish (should map to light color)
  const lightYellowish = findClosestColor(239, 240, 154, colorHexPalette);
  const lightYellowishColor = colorPalette.find(
    (c) => c.rgb === lightYellowish,
  );
  console.log("Light yellowish maps to:", lightYellowishColor?.name);
  expect(lightYellowishColor?.name).toMatch(/Yellow|Lime|Green/);
});
