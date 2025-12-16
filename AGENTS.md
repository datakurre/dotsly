# AGENTS.md

This document provides instructions and context for AI agents interacting with the Dotsly codebase.

## Purpose

Dotsly is a web-based application for creating pixel art and mosaics using brick-inspired shapes and colors. The tool allows users to:
- Upload and convert images to dot patterns using authentic brick colors
- Create original designs with multiple shape types (squares, circles, quarter circles, half circles)
- Use drawing tools including paint mode, fill tool, and color picker
- Work with a color palette filtered by actual brick set availability
- Manage designs with undo/redo, copy/paste, and save/load functionality

The application is designed to help users create pixel art that can be built with real bricks.

## Migration Status

**Current Status**: In progress - migrating from SvelteKit to Elm

The project is currently being converted from a SvelteKit/TypeScript stack to Elm. See `TODO-elm-conversion.md` for detailed migration tasks.

### Legacy Stack (Being Replaced)
- **Framework**: SvelteKit 2.x with Svelte 5
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Testing**: Vitest with Testing Library
- **Styling**: Component-scoped CSS
- **Deployment**: Static site generation via `@sveltejs/adapter-static`
- **Key Dependencies**:
  - `culori` - Color manipulation and distance calculations
  - `canvas` - Server-side image processing
  - `lucide-svelte` - Icon components

### Target Stack (Elm)
- **Language**: Elm
- **Architecture**: The Elm Architecture (Model-View-Update)
- **Rendering**: SVG via elm/svg
- **Build Tool**: elm make / elm-live
- **Testing**: elm-test
- **Deployment**: Static site generation (optimized elm.js + index.html)
- **Key Dependencies**:
  - `elm/core` - Core language features
  - `elm/html` - HTML and SVG rendering
  - `elm/browser` - Browser interaction
  - `elm/file` - File operations
  - `elm/json` - JSON encoding/decoding
  - `avh4/elm-color` - Color manipulation
- **JavaScript Interop**: Ports for Canvas API and advanced File operations

## Project Structure

### Current (SvelteKit - Being Migrated)
```
src/
├── lib/
│   ├── components/        # Svelte UI components
│   │   ├── DrawingBoard.svelte
│   │   ├── Toolbar.svelte
│   │   ├── ColorPicker.svelte
│   │   ├── ImageUpload.svelte
│   │   ├── ShapeSelector.svelte
│   │   ├── ToolSelector.svelte
│   │   └── [shape components]
│   ├── utils/            # Utility functions
│   │   ├── image.ts           # Color matching algorithms
│   │   ├── processImageToGrid.ts  # Image-to-grid conversion
│   │   ├── undoRedo.ts        # History management
│   │   ├── clipboard.ts       # Copy/paste functionality
│   │   └── keyboard.ts        # Keyboard shortcuts
│   ├── colors.ts         # Color palette and parsing
│   ├── types.ts          # TypeScript type definitions
│   └── index.ts
├── routes/
│   ├── +layout.svelte
│   ├── +layout.ts
│   └── +page.svelte      # Main application page
└── test/
    ├── colors.test.ts
    ├── image.test.ts
    └── processImageToGrid.test.ts

data/
├── colors.csv            # Brick color definitions
└── sets/                 # Brick set inventory CSVs
```

### Target (Elm - In Development)
```
src/
├── Main.elm              # Application entry point
├── Model.elm             # Application state
├── Msg.elm               # Message types
├── Update.elm            # State update logic
├── View.elm              # Main view function
├── Types/                # Type definitions
│   ├── Shape.elm         # Shape types and GridCell
│   ├── Color.elm         # Color types
│   └── Tool.elm          # Tool types
├── Components/           # View components
│   ├── DrawingBoard.elm  # SVG grid and interactions
│   ├── Toolbar.elm       # Toolbar layout
│   ├── ToolSelector.elm  # Tool selection UI
│   ├── ShapeSelector.elm # Shape selection UI
│   ├── ColorPicker.elm   # Color palette UI
│   └── [other UI components]
├── Utils/                # Utility functions
│   ├── Color.elm         # Color matching and conversion
│   ├── History.elm       # Undo/redo management
│   ├── Clipboard.elm     # Copy/paste logic
│   ├── Fill.elm          # Flood fill algorithm
│   ├── Keyboard.elm      # Keyboard shortcuts
│   └── ImageProcessor.elm # Image to grid conversion
└── Ports.elm             # JavaScript interop

tests/
├── ColorTests.elm
├── HistoryTests.elm
└── [other test modules]

data/
├── colors.csv            # Brick color definitions
└── sets/                 # Brick set inventory CSVs
```

## Key Features & Implementation

### Color System
- Colors loaded from `data/colors.csv` with RGB values and transparency flags
- Filtered by availability in actual brick sets (CSV files in `data/sets/`)
- Color matching uses CIE76 distance algorithm via `culori` library
- Palette organized by hue/saturation for UI display

### Shape Types
- **Square**: Solid fill
- **Circle**: Dual-color with center dot
- **Quarter**: Diagonal split with rotation (0°, 90°, 180°, 270°)
- **Half Circle**: Vertical/horizontal split with rotation (0°, 90°, 180°, 270°)

### Drawing Tools
- **Draw Mode**: Click/drag to place shapes
- **Fill Tool**: Flood fill algorithm for contiguous areas
- **Color Picker**: Sample colors from canvas
- **Selection Tool**: Rectangle selection for copy/paste operations

### State Management
- Undo/Redo: `UndoRedoManager` class with 50-state history
- Clipboard: `ClipboardManager` for copy/cut/paste operations
- Keyboard shortcuts defined in `keyboard.ts`

### Image Processing
- Converts uploaded images to grid using shape detection algorithm
- Analyzes pixel patterns to determine optimal shape type per cell
- Runs in worker thread for performance (`processImageToGrid.worker.ts`)

## Development Workflow

### SvelteKit (Legacy)

#### Installation
```bash
npm install
```

#### Development Server
```bash
npm run dev                # Start dev server
npm run dev -- --open      # Start and open browser
```

#### Testing
```bash
npm test                   # Run all tests
npm run test:watch         # Watch mode
npm run test:ui            # Interactive UI
npm run test:coverage      # Coverage report
```

**Test Coverage**:
- Unit tests for color parsing and matching
- Integration tests for image-to-grid conversion
- Tests use mocked Canvas API via jsdom

#### Code Quality
```bash
npm run format             # Format with Prettier
npm run check              # Type check with svelte-check
npm run check:watch        # Type check in watch mode
```

#### Building
```bash
npm run build              # Production build
npm run preview            # Preview production build
```

### Elm (Target)

#### Installation
```bash
# Using Nix (recommended)
nix develop

# Or install Elm tools manually:
npm install -g elm elm-test elm-format elm-live
```

#### Development Server
```bash
elm-live src/Main.elm --open -- --output=elm.js
```

#### Testing
```bash
elm-test                   # Run all tests
elm-test --watch           # Watch mode
```

#### Code Quality
```bash
elm-format src/ --validate # Check formatting
elm-format src/ --yes      # Auto-format code
elm-review                 # Run linter
```

#### Building
```bash
elm make src/Main.elm --optimize --output=elm.js  # Production build
```

## Deployment

- Configured for GitHub Pages deployment at `/dotsly` base path
- CI/CD via `.github/workflows/gh-pages.yml`
- Builds on push to `main` branch
- Static site output to `build/` directory

## Agent Capabilities

As an AI agent, you can:

1. **Read and analyze** the entire codebase including:
   - Svelte 5 components with runes API (legacy)
   - TypeScript utilities and type definitions (legacy)
   - Elm modules and type definitions (target)
   - Test suites and configuration files
   
2. **Run tests** to verify functionality:
   - Execute vitest test suite for legacy code
   - Execute elm-test for Elm code
   - Interpret test results and coverage reports
   
3. **Start the development server** to validate builds (UI not visible)
   - `npm run dev` for SvelteKit (legacy)
   - `elm-live` for Elm (target)

4. **Modify code** following project patterns:
   - Convert Svelte components to Elm modules
   - Convert TypeScript utilities to Elm functions
   - Create new Elm type definitions
   - Add new tests (vitest or elm-test)
   - Update configuration files
   
5. **Manage dependencies** via:
   - `package.json` for Node.js tools
   - `elm.json` for Elm packages
   - `flake.nix` for Nix development environment

6. **Review and update** data files (colors.csv, set inventories)

## Agent Limitations

- **No visual inspection**: Cannot see rendered UI or verify visual appearance
- **No manual testing**: Cannot perform user interaction testing
- **No browser debugging**: Cannot inspect browser dev tools
- **Worker thread execution**: Cannot directly execute web workers outside browser context

## Important Notes

### Current Migration Context
- The project is actively being converted from SvelteKit to Elm
- Follow TODO-elm-conversion.md for detailed migration tasks
- Legacy SvelteKit code will be removed once Elm version is complete
- Nix flake already provides Elm development environment

### SvelteKit (Legacy)
- The project uses Svelte 5 syntax with runes (`$state`, `$derived`, `$effect`)
- All file paths in imports use `$lib` alias
- Canvas operations require Node.js `canvas` package for server-side processing
- Tests require jsdom environment for DOM APIs
- Base path `/dotsly` is required for GitHub Pages deployment

### Elm (Target)
- Follow The Elm Architecture pattern (Model-View-Update)
- All types must be explicitly defined
- Use ports for JavaScript interop (Canvas API, File API)
- SVG rendering via elm/svg for shapes
- Immutable data structures simplify undo/redo
- No runtime exceptions - all errors handled at compile time

## Common Tasks

### SvelteKit (Legacy)

**Adding a new shape type**:
1. Create shape component in `src/lib/components/`
2. Update `ShapeType` union in `types.ts`
3. Add rendering logic to `DrawingBoard.svelte`
4. Update `ShapeSelector.svelte` to include new option
5. Add test cases if needed

**Modifying color palette**:
1. Update `data/colors.csv` for new colors
2. Add/update set CSV files in `data/sets/`
3. Run application to verify filtering logic

**Adding keyboard shortcuts**:
1. Define shortcut in `keyboard.ts` `keyboardShortcuts` object
2. Add handler in `+page.svelte` keyboard event listener
3. Update UI tooltips if applicable

### Elm (Target)

**Adding a new shape type**:
1. Add variant to `ShapeType` custom type in `src/Types/Shape.elm`
2. Create rendering function in `src/Components/DrawingBoard.elm`
3. Update pattern matches in `src/Update.elm`
4. Add shape button to `src/Components/ShapeSelector.elm`
5. Add test cases in `tests/`

**Modifying color palette**:
1. Update `data/colors.csv` for new colors
2. Add/update set CSV files in `data/sets/`
3. Update color loading logic in `src/Utils/Color.elm` or data loading

**Adding keyboard shortcuts**:
1. Define shortcut decoder in `src/Utils/Keyboard.elm`
2. Add message variant in `src/Msg.elm`
3. Handle message in `src/Update.elm`
4. Subscribe to keyboard events in `src/Main.elm` subscriptions
5. Update UI tooltips if applicable

**Creating new Elm modules**:
1. Define module with proper exports: `module MyModule exposing (..)`
2. Add type signatures for all functions
3. Document with `{-| ... -}` comments
4. Import required dependencies
5. Write corresponding test module in `tests/`
