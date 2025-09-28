# Color Mapping Enhancements for Dotsly

## Overview

This document describes the improvements made to the color mapping system in Dotsly to address issues with grayscale and vibrant color mapping.

## Problems Identified

### 1. Brightness Mapping Issues

- **Problem**: The brightness thresholds in `mapBrightnessToShape()` were misaligned with test expectations
- **Impact**: Incorrect shape assignment based on image brightness
- **Solution**: Updated thresholds to match expected behavior:
  - Quarter: ≤ 50 (was ≤ 60)
  - Circle: ≤ 101 (was ≤ 120)
  - Half-circle: ≤ 152 (was ≤ 181)
  - Square: ≤ 203 (was ≤ 250)
  - Empty: > 203 (was > 250)

### 2. Color Matching Algorithm Issues

- **Problem**: Grayscales were mapped to darker/colored tiles instead of appropriate gray LEGO pieces
- **Problem**: Vibrant colors were being mapped to muted/darker tones
- **Root Cause**: The previous algorithm used complex weighted scoring that didn't adequately handle the distinction between grayscale and chromatic colors

## Enhancements Implemented

### 1. Enhanced Vibrant Color Preference

#### Latest Improvements:

- **Vibrancy Bonus**: Added a -5 distance bonus for palette colors that maintain high chroma when the input is vibrant (>30 chroma and palette >80% of input chroma)
- **Reduced Weights**: Lowered chroma weight from 0.4 to 0.3 and brightness weight from 0.3 to 0.2 to allow more color variation
- **Better Vibrant Preservation**: Ensures vibrant input colors map to equally vibrant palette colors when available

### 2. Shape Preference for Non-Edge Tiles

#### New Shape Logic:

- **Non-edge tiles** in brightness range 60-180 prefer **squares and circles**:
  - Brightness 60-120: Circle
  - Brightness 121-180: Square
- **Edge tiles** continue using traditional brightness mapping
- **Rationale**: Interior tiles can use more stable shapes (squares/circles) while edge tiles use varied shapes for better visual definition

### 3. Improved Color Matching Algorithm (`findClosestColor`)

#### Key Improvements:

- **Separate logic paths** for different color scenarios:
  - Grayscale to grayscale matching
  - Grayscale to colored palette
  - Colored to grayscale palette
  - Colored to colored matching

#### Grayscale Detection:

- Uses chroma threshold < 10 (tightened from previous informal thresholds)
- Avoids misclassifying pale colors (like light blue) as grayscale

#### Matching Strategies:

1. **Grayscale-to-Grayscale**: Prioritizes brightness similarity with lightness as secondary factor
2. **Grayscale-to-Color**: Heavily penalizes high-chroma palette colors
3. **Color-to-Grayscale**: Uses brightness matching with penalty for color loss
4. **Color-to-Color**: Enhanced perceptual matching using LAB deltaE + weighted hue/chroma/brightness

### 2. Enhanced Image Processing

#### Perceptual Color Averaging:

- Improved color averaging in `processImageToGrid.ts`
- Uses rounded RGB values to prevent color drift
- Maintains color relationships better during block averaging

### 3. New Utility Functions

#### `analyzeColor(r, g, b)`:

Returns color analysis including:

- Brightness (simple RGB average)
- Grayscale detection (chroma < 10)
- Chroma value
- Hue and lightness values

#### `getColorMatchingDetails(inputR, inputG, inputB, targetHex)`:

Provides debugging information for color matching:

- Distance metrics
- Brightness, chroma, and hue differences
- Grayscale match indication

### 4. Comprehensive Test Suite

#### Enhanced Test Coverage:

- Real LEGO DOTS color scenarios
- Grayscale preservation testing
- Vibrant color preservation testing
- Edge case handling
- Color analysis verification

## Results and Benefits

### 1. Better Grayscale Handling

- Light grays now map to appropriate light LEGO colors (light gray, white, pale colors)
- Medium grays map to medium gray LEGO pieces
- Dark grays map to dark colors (dark gray, black, brown)

### 2. Improved Vibrant Color Preservation

- Bright reds stay red instead of becoming gray/brown
- Bright blues maintain their vibrancy
- Yellow colors are preserved better
- Hue matching is prioritized for high-chroma inputs

### 3. More Predictable Behavior

- Clear separation between grayscale and colored scenarios
- Consistent color matching logic
- Better debugging capabilities

### 4. Real-World LEGO Color Compatibility

- Algorithm tested with actual LEGO DOTS color palette
- Handles edge cases like pale blues and browns appropriately
- Accounts for limited color palette constraints

## Technical Details

### Color Spaces Used:

- **LAB**: For perceptual color distance (deltaE)
- **HCL**: For hue, chroma, lightness analysis
- **RGB**: For simple brightness calculations

### Thresholds:

- **Grayscale detection**: Chroma < 10
- **Vibrant color detection**: Chroma > 40
- **Brightness mapping**: Updated to provide better distribution

### Performance Considerations:

- Efficient color space conversions using chroma.js
- Minimal computational overhead added
- Maintains real-time image processing capability

## Usage

The enhancements are automatically applied when using the existing `findClosestColor()` and `processImageToGrid()` functions. No API changes were made, ensuring backward compatibility.

For debugging color matching issues, use the new utility functions:

```typescript
import { analyzeColor, getColorMatchingDetails } from "$lib/utils/image";

// Analyze color properties
const analysis = analyzeColor(128, 128, 128);
console.log(analysis.isGrayscale); // true for gray colors

// Debug color matching
const details = getColorMatchingDetails(255, 0, 0, "#C91A09");
console.log(details.distance, details.isGrayscaleMatch);
```

## Future Improvements

### Potential Enhancements:

1. **Adaptive thresholds** based on available palette
2. **Perceptual color averaging** using LAB space instead of RGB
3. **User-configurable color matching preferences**
4. **Advanced dithering techniques** for better color approximation
5. **Machine learning-based** color matching optimization

### Performance Optimizations:

1. **Color palette pre-processing** and caching
2. **Spatial color coherence** considerations
3. **Multi-threaded processing** for large images
