# AGENTS.md

This document provides instructions and context for AI agents interacting with the Dotsly codebase.

## Purpose

Dotsly is a web-based application for creating pixel art and mosaics, inspired by brick-based art forms like LEGO DOTS. The goal of this project is to provide a tool that can turn images into buildable mosaic designs and allow for freeform creation using a palette of real-world brick colors.

## Instructions

This is a SvelteKit project using TypeScript, Vite, and Vitest. All commands should be run from the project root.

### 1. Installation

Install dependencies using npm:

```bash
npm install
```

### 2. Development

To run the local development server:

```bash
npm run dev
```

### 3. Testing

Run the full test suite using Vitest:

```bash
npm test
```

### 4. Code Style & Quality

The project uses Prettier for code formatting and `svelte-check` for type checking. Ensure you run these commands before committing changes.

- **To format all files:**

  ```bash
  npm run format
  ```

- **To check for type errors:**
  ```bash
  npm run check
  ```

## Capabilities

As an agent, you can:

- **Read and analyze** the entire codebase.
- **Run and interpret** the results of the test suite.
- **Start the development server** to verify runtime behavior (though you cannot see the UI).
- **Modify existing code** and **add new features** or components, following the existing patterns.
- **Manage dependencies** via `package.json`.

## Limitations

- **Visual Confirmation**: You cannot visually inspect the application's UI. Changes to the frontend must be described textually or verified through component tests.
- **User Experience**: You cannot perform manual user acceptance testing.
