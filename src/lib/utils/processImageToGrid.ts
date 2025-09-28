import { mapBrightnessToShape, findClosestColor } from "$lib/utils/image";

export function processImageToGrid(
  imageSrc: string,
  colorPalette: string[],
  width = 32,
  height = 32,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.src = imageSrc;
    image.onload = () => {
      const originalWidth = image.width;
      const originalHeight = image.height;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
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

          let totalR = 0;
          let totalG = 0;
          let totalB = 0;
          let totalBrightness = 0;
          let pixelCount = 0;

          let topHalfBrightness = 0;
          let topHalfPixelCount = 0;
          let bottomHalfBrightness = 0;
          let bottomHalfPixelCount = 0;
          let leftHalfBrightness = 0;
          let leftHalfPixelCount = 0;
          let rightHalfBrightness = 0;
          let rightHalfPixelCount = 0;

          for (let j = startY; j < endY; j++) {
            for (let i = startX; i < endX; i++) {
              const idx = (j * originalWidth + i) * 4;
              const r = imageData[idx];
              const g = imageData[idx + 1];
              const b = imageData[idx + 2];
              const a = imageData[idx + 3];

              if (a > 0) {
                const brightness = (r + g + b) / 3;
                totalR += r;
                totalG += g;
                totalB += b;
                totalBrightness += brightness;
                pixelCount++;

                if (j < startY + (endY - startY) / 2) {
                  topHalfBrightness += brightness;
                  topHalfPixelCount++;
                } else {
                  bottomHalfBrightness += brightness;
                  bottomHalfPixelCount++;
                }

                if (i < startX + (endX - startX) / 2) {
                  leftHalfBrightness += brightness;
                  leftHalfPixelCount++;
                } else {
                  rightHalfBrightness += brightness;
                  rightHalfPixelCount++;
                }
              }
            }
          }

          if (pixelCount === 0) {
            newGrid.push({ shape: "empty", color: "#FFFFFF", rotation: 0 });
            continue;
          }

          const avgR = totalR / pixelCount;
          const avgG = totalG / pixelCount;
          const avgB = totalB / pixelCount;
          const avgBrightness = totalBrightness / pixelCount;

          const isTop = y === 0;
          const isBottom = y === height - 1;
          const isLeft = x === 0;
          const isRight = x === width - 1;
          const isEdge = isTop || isBottom || isLeft || isRight;

          let shape = mapBrightnessToShape(avgBrightness, isEdge);
          let rotation = 0;

          if (shape === "halfCircle" || shape === "quarter") {
            const avgTop =
              topHalfPixelCount > 0
                ? topHalfBrightness / topHalfPixelCount
                : 128;
            const avgBottom =
              bottomHalfPixelCount > 0
                ? bottomHalfBrightness / bottomHalfPixelCount
                : 128;
            const avgLeft =
              leftHalfPixelCount > 0
                ? leftHalfBrightness / leftHalfPixelCount
                : 128;
            const avgRight =
              rightHalfPixelCount > 0
                ? rightHalfBrightness / rightHalfPixelCount
                : 128;

            const gradX = avgRight - avgLeft;
            const gradY = avgBottom - avgTop;

            if (shape === "halfCircle") {
              if (Math.abs(gradX) > Math.abs(gradY)) {
                rotation = gradX < 0 ? 3 : 1; // Left/Right
              } else {
                rotation = gradY < 0 ? 2 : 0; // Up/Down
              }
            } else if (shape === "quarter") {
              if (gradX > 0 && gradY > 0) {
                rotation = 0; // Bottom-right
              } else if (gradX <= 0 && gradY > 0) {
                rotation = 1; // Bottom-left
              } else if (gradX <= 0 && gradY <= 0) {
                rotation = 2; // Top-left
              } else {
                rotation = 3; // Top-right
              }
            }
          }

          const color = findClosestColor(avgR, avgG, avgB, colorPalette);
          newGrid.push({ shape, color, rotation });
        }
      }
      resolve(newGrid);
    };
    image.onerror = reject;
  });
}
