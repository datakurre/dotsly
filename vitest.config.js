/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts", "./src/test/vitest-setup.ts"],
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  resolve: {
    alias: {
      $lib: new URL("./src/lib", import.meta.url).pathname,
    },
  },
});
