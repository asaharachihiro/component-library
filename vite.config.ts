import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  if (mode === "storybook") {
    // Storybook用のビルド設定
    return {
      plugins: [react()],
      base: "/",
      build: {
        outDir: "storybook-static",
        sourcemap: true,
        chunkSizeWarningLimit: 2000,
        logLevel: "silent",
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
    };
  }

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/components/index.ts"),
        name: "ComponentLibrary",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      outDir: "dist",
      sourcemap: true,
    },
  };
});
