import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig(({ mode }) => {
  const commonConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  };

  if (mode === "storybook") {
    // Storybook用のビルド設定
    return {
      ...commonConfig,
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

  if (mode === "package") {
    // パッケージ用のビルド設定
    return {
      ...commonConfig,
      plugins: [
        ...commonConfig.plugins,
        dts({
          insertTypesEntry: true,
          outDir: "dist",
        }),
      ],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/components/index.ts"),
          name: "ComponentLibrary",
          formats: ["es", "cjs"],
          fileName: (format) => {
            if (format === "es") return "index.esm.js";
            if (format === "cjs") return "index.cjs.js";
            return `index.${format}.js`;
          },
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
        cssCodeSplit: true,
      },
    };
  }

  // デフォルト設定
  return {
    ...commonConfig,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/global.scss";`,
        },
      },
    },
  };
});
