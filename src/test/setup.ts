// Test setup for Dotsly
import "@testing-library/jest-dom";

// Mock window.Image for image processing tests
Object.defineProperty(window, "Image", {
  value: class {
    width = 0;
    height = 0;
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;

    set src(value: string) {
      setTimeout(() => {
        this.width = 100;
        this.height = 100;
        this.onload?.();
      }, 0);
    }
  },
});

// Mock FileReader for file upload tests
Object.defineProperty(window, "FileReader", {
  value: class {
    result: string | null = null;
    onload: ((event: any) => void) | null = null;

    readAsDataURL(file: File) {
      setTimeout(() => {
        this.result = "data:image/png;base64,mockImageData";
        this.onload?.({ target: { result: this.result } });
      }, 0);
    }
  },
});

// Mock Canvas for image processing tests
Object.defineProperty(window.HTMLCanvasElement.prototype, "getContext", {
  value: (type: string) => {
    if (type === "2d") {
      return {
        drawImage: () => {},
        getImageData: () => ({
          data: new Uint8ClampedArray(4 * 32 * 32).fill(255), // Mock RGBA data
        }),
      };
    }
    return null;
  },
});
