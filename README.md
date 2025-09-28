# Dotsly

**Bricks-inspired pixel art and mosaic design tool**

Dotsly is a web-based application built with SvelteKit that allows you to create pixel art and mosaics using bricks-inspired shapes and colors. Upload images to convert them to dot patterns, or create original designs with squares, circles, and arch shapes.

## Features

- 🎨 **Interactive Drawing Board** - Create pixel art with customizable grid sizes
- 🖼️ **Image Processing** - Upload images and convert them to dot patterns
- 🎯 **Shape Tools** - Use squares, circles, and arch shapes with rotation support
- 🎨 **Bricks Color Palette** - Use authentic brick colors filtered by set availability
- 🖌️ **Paint Tools** - Fill areas and pick colors from the canvas
- 📱 **Responsive Design** - Moveable toolbar (left/top positions)

## Color System

Colors are loaded from `data/colors.csv` and filtered based on availability in actual brick sets (found in `data/sets/*.csv`). This ensures you can actually build your designs with real bricks!

## Development

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   # or with auto-open browser
   npm run dev -- --open
   ```

3. **Type checking**
   ```bash
   npm run check
   # or with watch mode
   npm run check:watch
   ```

### Testing

The project includes a comprehensive test suite using Vitest and Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage report
npm run test:coverage

# Run with UI interface
npm run test:ui
```

**Test Categories:**

- **Unit Tests** - Color parsing, image utilities
- **Integration Tests** - Image-to-grid conversion
- **Component Tests** - Individual Svelte components (planned)

### Code Quality

```bash
# Format code with Prettier
npm run format

# Type check with svelte-check
npm run check
```

## Building & Deployment

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The app is configured with `@sveltejs/adapter-static` for static site deployment and includes GitHub Actions CI/CD pipeline.

## Project Structure

```
src/
├── lib/
│   ├── components/     # Svelte components
│   ├── utils/          # Utility functions
│   ├── colors.ts       # Color management
│   └── types.ts        # TypeScript interfaces
├── routes/             # SvelteKit pages
├── test/               # Test files and setup
└── app.html            # HTML template

data/                   # CSV data files
├── colors.csv          # Available brick colors
└── sets/              # Brick set inventories
```
