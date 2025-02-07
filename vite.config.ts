import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "storybook-static",
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@storybook")) {
              return "storybook";
            }
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    fs: {
      allow: ["."],
    },
    hmr: {
      overlay: false,
    },
  },
});
