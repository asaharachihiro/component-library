import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@components\/(.*)$/,
        replacement: path.resolve(__dirname, "src/components/$1"),
      },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/components/**/*.{ts,tsx}"],
      exclude: [
        "**/*.stories.tsx",
        "**/*.stories.ts",
        "**/index.ts",
        "**/index.tsx",
        "**/sampleData.tsx",
        "**/sampleColumnsData.tsx",
      ],
    },
  },
});
