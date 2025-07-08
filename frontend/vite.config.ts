import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../backend/wwwroot",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "static/[name]-[hash][extname]",
        chunkFileNames: "static/[name]-[hash].js",
        entryFileNames: "static/[name]-[hash].js",
      },
    },
  },
});
