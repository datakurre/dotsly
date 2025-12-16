# Dotsly

**Bricks-inspired pixel art and mosaic design tool**

Dotsly is a web-based application built with Elm that allows you to create pixel art and mosaics using bricks-inspired shapes and colors. Upload images to convert them to dot patterns, or create original designs with squares, circles, and quarter shapes.

## Features

- 🎨 **Interactive Drawing Board** - Create pixel art with customizable grid sizes using SVG
- 🎯 **Shape Tools** - Use squares, circles, quarter, and half-circle shapes with rotation support
- 🎨 **Bricks Color Palette** - Use authentic brick colors loaded from CSV data
- 🖌️ **Drawing Tools** - Draw, fill, select, and color picker tools
- ⌨️ **Keyboard Shortcuts** - Undo (Ctrl+Z), Redo (Ctrl+Shift+Z), Copy/Paste (Ctrl+C/V)
- 💾 **Save/Load** - Save and load designs as JSON files
- 📱 **Responsive Design** - Moveable toolbar (left/top positions)

## Technology Stack

- **Language**: Elm 0.19.1
- **Architecture**: The Elm Architecture (Model-View-Update)
- **Rendering**: SVG via elm/svg
- **Build Tool**: elm make / elm-live
- **Deployment**: Static site generation

## Color System

Colors are loaded from `data/colors.csv` and filtered to exclude transparent colors. This ensures you can work with authentic brick colors in your designs!

## Development

### Prerequisites

- Elm 0.19.1
- Node.js (for elm-live and development)
- Or use Nix: `nix develop` (recommended)

### Getting Started

1. **Using Nix (recommended)**

   ```bash
   nix develop
   ```

2. **Or install Elm tools manually**

   ```bash
   npm install -g elm elm-test elm-format elm-live
   ```

3. **Start development server**

   ```bash
   elm-live src/Main.elm --open -- --output=elm.js
   ```

4. **Build for production**

   ```bash
   elm make src/Main.elm --optimize --output=elm.js
   ```

5. **Format code**

   ```bash
   elm-format src/ --yes
   ```

### Testing

```bash
# Run all tests
elm-test

# Run tests in watch mode
elm-test --watch
```

### Code Quality

```bash
# Format code with elm-format
elm-format src/ --yes

# Validate formatting
elm-format src/ --validate
```

## Building & Deployment

```bash
# Create optimized production build
elm make src/Main.elm --optimize --output=elm.js

# The build includes:
# - elm.js (compiled Elm application)
# - index.html (HTML wrapper)
# - data/ directory (color CSV files)
```

The app is configured for static site deployment with GitHub Pages at the `/dotsly` base path.

## Project Structure

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
│   └── ColorPicker.elm   # Color palette UI
├── Utils/                # Utility functions
│   ├── Color.elm         # Color matching and conversion
│   ├── History.elm       # Undo/redo management
│   ├── Clipboard.elm     # Copy/paste logic
│   ├── Fill.elm          # Flood fill algorithm
│   └── Keyboard.elm      # Keyboard shortcuts
└── Data/                 # Data loading
    ├── Colors.elm        # CSV color loading
    └── Design.elm        # Save/load designs

data/
├── colors.csv            # Brick color definitions
└── sets/                 # Brick set inventory CSVs
```

## Keyboard Shortcuts

- **Ctrl+Z**: Undo
- **Ctrl+Shift+Z** or **Ctrl+Y**: Redo
- **Ctrl+C**: Copy selection
- **Ctrl+X**: Cut selection
- **Ctrl+V**: Paste
- **Delete/Backspace/Esc**: Clear selection

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
