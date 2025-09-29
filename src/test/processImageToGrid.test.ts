import { describe, it, expect, vi } from 'vitest';
import { processImageToGrid } from '$lib/utils/processImageToGrid';

const MOCK_IMAGE_WIDTH = 2;
const MOCK_IMAGE_HEIGHT = 2;

// Mock the global Image object
vi.stubGlobal('Image', class {
    src: string = '';
    onload: () => void = () => {};
    onerror: () => void = () => {};
    width: number = MOCK_IMAGE_WIDTH;
    height: number = MOCK_IMAGE_HEIGHT;

    constructor() {
        // Simulate async loading
        setTimeout(() => {
            this.onload();
        }, 5);
    }
});

// Mock canvas context
const mockGetImageData = vi.fn();
const mockGetContext = vi.fn(() => ({
    drawImage: vi.fn(),
    getImageData: mockGetImageData,
}));

vi.stubGlobal('document', {
    createElement: vi.fn((tag) => {
        if (tag === 'canvas') {
            return {
                getContext: mockGetContext,
                width: 0,
                height: 0,
            };
        }
        return {};
    }),
});

const colorPalette = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF'];

/**
 * Creates mock image data for a given color grid.
 * @param colors - A 2D array of RGB colors with optional alpha.
 */
function createMockImageData(colors: ([number, number, number] | [number, number, number, number])[][]) {
    const height = colors.length;
    const width = colors[0].length;
    const data = new Uint8ClampedArray(width * height * 4);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            const color = colors[y][x];
            data[i] = color[0];     // R
            data[i + 1] = color[1]; // G
            data[i + 2] = color[2]; // B
            data[i + 3] = color.length > 3 ? color[3] : 255; // A
        }
    }
    return { data, width, height };
}

describe('processImageToGrid', () => {
    it('should return a square for a homogenous image', async () => {
        const imageData = createMockImageData([
            [[255, 0, 0], [255, 0, 0]],
            [[255, 0, 0], [255, 0, 0]],
        ]);
        mockGetImageData.mockReturnValue(imageData);

        const result = await processImageToGrid('mock.png', colorPalette, 1, 1);
        expect(result).toHaveLength(1);
        expect(result[0].shape).toBe('square');
        expect(result[0].color).toBe('#FF0000');
    });

    it('should return a halfCircle for a vertical split', async () => {
        const imageData = createMockImageData([
            [[255, 0, 0], [0, 0, 255]],
            [[255, 0, 0], [0, 0, 255]],
        ]);
        mockGetImageData.mockReturnValue(imageData);

        const result = await processImageToGrid('mock.png', colorPalette, 1, 1);
        expect(result[0].shape).toBe('halfCircle');
        // The main color is ambiguous, let's not test it, but rotation is key.
        // The code correctly determines the feature is on the left, so the
        // half-circle should point left.
        expect(result[0].rotation).toBe(3); // Pointing left
    });

    it('should return a quarter for a corner outlier', async () => {
        const imageData = createMockImageData([
            [[255, 0, 0], [255, 255, 255]],
            [[255, 255, 255], [255, 255, 255]],
        ]);
        mockGetImageData.mockReturnValue(imageData);

        const result = await processImageToGrid('mock.png', colorPalette, 1, 1);
        expect(result[0].shape).toBe('quarter');
        expect(result[0].color).toBe('#FFFFFF');
        expect(result[0].rotation).toBe(2); // Top-Left
    });

    it('should return a circle for a noisy/detailed image', async () => {
        const imageData = createMockImageData([
            [[255, 0, 0], [0, 255, 0]],
            [[0, 0, 255], [255, 255, 255]],
        ]);
        mockGetImageData.mockReturnValue(imageData);

        const result = await processImageToGrid('mock.png', colorPalette, 1, 1);
        expect(result[0].shape).toBe('circle');
    });

    it('should return an empty shape for a transparent image', async () => {
        const imageData = createMockImageData([
            [[0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 0, 0], [0, 0, 0, 0]],
        ]);
        mockGetImageData.mockReturnValue(imageData);

        const result = await processImageToGrid('mock.png', colorPalette, 1, 1);
        expect(result[0].shape).toBe('empty');
    });
});