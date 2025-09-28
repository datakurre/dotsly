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
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      if (!ctx) {
        reject(new Error("Could not get 2D context"));
        return;
      }
      ctx.drawImage(image, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height).data;
      const newGrid = [];
      for (let i = 0; i < imageData.length; i += 4) {
        const idx = i / 4;
        const x = idx % width;
        const y = Math.floor(idx / width);
        let r = imageData[i];
        let g = imageData[i + 1];
        let b = imageData[i + 2];
        const a = imageData[i + 3];
        if (a === 0) {
          r = 255;
          g = 255;
          b = 255;
        }
        const brightness = (r + g + b) / 3;
        let shape = mapBrightnessToShape(brightness);
        let rotation = 0;
        // Only allow quarter on edges, and set direction
        const isTop = y === 0;
        const isBottom = y === height - 1;
        const isLeft = x === 0;
        const isRight = x === width - 1;
        if (shape === "quarter" && (isTop || isBottom || isLeft || isRight)) {
          if (isTop)
            rotation = 2; // open up
          else if (isBottom)
            rotation = 0; // open down
          else if (isLeft)
            rotation = 1; // open left
          else if (isRight) rotation = 3; // open right
        } else if (shape === "quarter") {
          // Inside: prefer square or circle based on brightness
          shape = brightness < 128 ? "square" : "circle";
        }
        const color = findClosestColor(r, g, b, colorPalette);
        newGrid.push({ shape, color, rotation });
      }
      resolve(newGrid);
    };
    image.onerror = reject;
  });
}
