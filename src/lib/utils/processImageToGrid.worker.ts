import { processImageToGrid } from "./processImageToGrid";

self.onmessage = async (event) => {
  const { imageSrc, colorPalette, width, height } = event.data;
  try {
    const grid = await processImageToGrid(
      imageSrc,
      colorPalette,
      width,
      height,
    );
    self.postMessage({ grid });
  } catch (error) {
    self.postMessage({ error: (error as Error).message });
  }
};
