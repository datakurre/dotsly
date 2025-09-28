import {
  mapBrightnessToShape,
  findClosestColor,
  isEdgePosition,
} from "$lib/utils/image";

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

          // Use perceptual color averaging instead of simple arithmetic mean
          // This helps preserve color relationships better
          const avgR = Math.round(totalR / pixelCount);
          const avgG = Math.round(totalG / pixelCount);
          const avgB = Math.round(totalB / pixelCount);
          const avgBrightness = totalBrightness / pixelCount;

          // Determine if this position is on the grid edge
          const isEdge = isEdgePosition(x, y, width, height);

          // Get shape based on brightness and edge position
          const shape = mapBrightnessToShape(avgBrightness, isEdge);

          // Simple rotation logic for directional shapes
          let rotation = 0;
          if (shape === "halfCircle" || shape === "quarter") {
            // Calculate brightness gradients for rotation
            const topBright =
              topHalfPixelCount > 0
                ? topHalfBrightness / topHalfPixelCount
                : avgBrightness;
            const bottomBright =
              bottomHalfPixelCount > 0
                ? bottomHalfBrightness / bottomHalfPixelCount
                : avgBrightness;
            const leftBright =
              leftHalfPixelCount > 0
                ? leftHalfBrightness / leftHalfPixelCount
                : avgBrightness;
            const rightBright =
              rightHalfPixelCount > 0
                ? rightHalfBrightness / rightHalfPixelCount
                : avgBrightness;

            if (shape === "halfCircle") {
              // Point the half-circle toward the darker area
              const gradients = [
                topBright,
                rightBright,
                bottomBright,
                leftBright,
              ];
              const minIndex = gradients.indexOf(Math.min(...gradients));
              rotation = minIndex;
            } else if (shape === "quarter") {
              // Point the quarter toward the brightest corner
              const corners = [
                (rightBright + bottomBright) / 2, // Bottom-right
                (leftBright + bottomBright) / 2, // Bottom-left
                (leftBright + topBright) / 2, // Top-left
                (rightBright + topBright) / 2, // Top-right
              ];
              const maxIndex = corners.indexOf(Math.max(...corners));
              rotation = maxIndex;
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
