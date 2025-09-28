# Testing Setup for Dotsly

This directory contains the test configuration and test files for the Dotsly application.

## Test Structure

- `setup.ts` - Global test setup with DOM mocks for Image, FileReader, and Canvas APIs
- `vitest-setup.ts` - Vitest-specific setup for Jest DOM matchers
- `*.test.ts` - Individual test files

## Test Categories

### Unit Tests

- `colors.test.ts` - Tests for color parsing and management functions
- `image-utils.test.ts` - Tests for image processing utilities

### Component Tests

- `Square.test.ts` - Tests for the Square SVG component
- `page.test.ts` - Integration tests for the main page

### Integration Tests

- `processImageToGrid.test.ts` - Tests for image-to-grid conversion functionality

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Dependencies

- **Vitest** - Fast unit test framework
- **@testing-library/svelte** - Utilities for testing Svelte components
- **@testing-library/jest-dom** - Custom Jest matchers for DOM testing
- **jsdom** - DOM implementation for testing

## Mocks

The test setup includes mocks for browser APIs commonly used in the application:

- `window.Image` - For image loading tests
- `FileReader` - For file upload tests
- `HTMLCanvasElement.getContext` - For canvas-based image processing tests

These mocks ensure tests run consistently in the Node.js environment without requiring a real browser.
