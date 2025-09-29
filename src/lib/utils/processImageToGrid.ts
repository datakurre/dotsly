import { converter } from "culori";
import { findClosestColor, type PaletteColor } from "$lib/utils/image";

const oklabConverter = converter("oklab");

export function processImageToGrid(
  imageSrc: string,
  colorPalette: string[],
  width = 32,
  height = 32,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.crossOrigin = "Anonymous"; // Allow processing of cross-origin images
    image.src = imageSrc;

    const labPalette: PaletteColor[] = colorPalette.map((hex) => ({
      hex,
      lab: oklabConverter(hex),
    }));

    image.onload = () => {
      const originalWidth = image.width;
      const originalHeight = image.height;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        reject(new Error("Could not get 2D context"));
        return;
      }
      canvas.width = originalWidth;
      canvas.height = originalHeight;
      ctx.drawImage(image, 0, 0, originalWidth, originalHeight);
      const imageData = ctx.getImageData(
        0,
        0,
        originalWidth,
        originalHeight,
      ).data;

      const newGrid = [];
      const blockWidth = originalWidth / width;
      const blockHeight = originalHeight / height;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const startX = Math.floor(x * blockWidth);
          const startY = Math.floor(y * blockHeight);
          const endX = Math.floor((x + 1) * blockWidth);
          const endY = Math.floor((y + 1) * blockHeight);

          const quadrants = [
            { r: 0, g: 0, b: 0, count: 0, transparent: 0 }, // Top-Left
            { r: 0, g: 0, b: 0, count: 0, transparent: 0 }, // Top-Right
            { r: 0, g: 0, b: 0, count: 0, transparent: 0 }, // Bottom-Left
            { r: 0, g: 0, b: 0, count: 0, transparent: 0 }, // Bottom-Right
          ];
          let totalTransparent = 0;
          const totalPixelsInBlock = (endX - startX) * (endY - startY);

          for (let j = startY; j < endY; j++) {
            for (let i = startX; i < endX; i++) {
              const idx = (j * originalWidth + i) * 4;
              const r = imageData[idx];
              const g = imageData[idx + 1];
              const b = imageData[idx + 2];
              const a = imageData[idx + 3];

              if (a < 128) {
                totalTransparent++;
              }

              const quadrantX = i < startX + blockWidth / 2 ? 0 : 1;
              const quadrantY = j < startY + blockHeight / 2 ? 0 : 1;
              const quadrantIndex = quadrantY * 2 + quadrantX;
              const q = quadrants[quadrantIndex];

              if (a > 128) {
                q.r += r;
                q.g += g;
                q.b += b;
                q.count++;
              } else {
                q.transparent++;
              }
            }
          }

          if (totalTransparent / totalPixelsInBlock > 0.95) {
            newGrid.push({ shape: "empty", color: "#FFFFFF", rotation: 0 });
            continue;
          }

          const totalR = quadrants.reduce((sum, q) => sum + q.r, 0);
          const totalG = quadrants.reduce((sum, q) => sum + q.g, 0);
          const totalB = quadrants.reduce((sum, q) => sum + q.b, 0);
          const totalCount = quadrants.reduce((sum, q) => sum + q.count, 0);

          const avgBlockColor = {
            r: totalR / totalCount,
            g: totalG / totalCount,
            b: totalB / totalCount,
          };

          const avgQuadrantColors = quadrants.map((q) => {
            const qCount = q.count || 1;
            const r = q.count > 0 ? q.r / qCount : avgBlockColor.r;
            const g = q.count > 0 ? q.g / qCount : avgBlockColor.g;
            const b = q.count > 0 ? q.b / qCount : avgBlockColor.b;
            return { r, g, b };
          });

          const mainColor = findClosestColor(
            avgBlockColor.r,
            avgBlockColor.g,
            avgBlockColor.b,
            labPalette,
          );
          const quadrantColors = avgQuadrantColors.map((c) =>
            findClosestColor(c.r, c.g, c.b, labPalette),
          );

          const [tl, tr, bl, br] = quadrantColors;

          let shape = "square";
          let rotation = 0;
          let color = mainColor.hex;

          const uniqueQuadrantColors = [
            ...new Set(quadrantColors.map((c) => c.hex)),
          ];

          if (uniqueQuadrantColors.length === 1) {
            shape = "square";
          } else if (uniqueQuadrantColors.length === 2) {
            const colorA = uniqueQuadrantColors[0];
            const countA = quadrantColors.filter(
              (c) => c.hex === colorA,
            ).length;

            if (countA === 1 || countA === 3) {
              shape = "quarter";
              const outlierColorHex =
                countA === 1 ? colorA : uniqueQuadrantColors[1];
              const mainAreaColorHex =
                countA === 3 ? colorA : uniqueQuadrantColors[1];
              const outlierIndex = quadrantColors.findIndex(
                (c) => c.hex === outlierColorHex,
              );
              color = mainAreaColorHex;
              // Rotation: 0=BR, 1=BL, 2=TL, 3=TR (based on old code's corner logic)
              const rotationMap = [2, 3, 1, 0]; // TL, TR, BL, BR -> rotation
              rotation = rotationMap[outlierIndex];
            } else {
              // countA === 2
              if (tl.hex === tr.hex && bl.hex === br.hex) {
                shape = "halfCircle";
                // Point towards the minority color
                rotation = tl.hex === mainColor.hex ? 2 : 0;
              } else if (tl.hex === bl.hex && tr.hex === br.hex) {
                shape = "halfCircle";
                rotation = tl.hex === mainColor.hex ? 1 : 3;
              } else {
                // Diagonal or complex, fallback to square
                shape = "square";
              }
            }
          } else {
            // 3 or 4 unique colors, high detail area
            shape = "circle";
          }

          newGrid.push({ shape, color, rotation });
        }
      }
      resolve(newGrid);
    };
    image.onerror = (err) => {
      console.error("Failed to load image:", image.src, err);
      reject(
        new Error(
          `Failed to load image. Check if the URL is correct and accessible.`,
        ),
      );
    };
  });
}
