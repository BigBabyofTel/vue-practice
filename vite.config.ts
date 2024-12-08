import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import { fileURLToPath } from "node:url";
import commonjs from "@rollup/plugin-commonjs";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), commonjs()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
});
