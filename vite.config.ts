import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    lib: {
      entry: "./source/index.tsx",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: {
        index: "./source/index.tsx",
      },
      output: {
        entryFileNames: "[name].[format].js",
      },
    },
  },
});
