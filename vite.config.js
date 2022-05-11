import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src", "components"),
      "~": resolve(__dirname, "node_modules"),
      "+": resolve(__dirname, "src", "assets"),
      "-": resolve(__dirname, "src", "store"),
    },
  },
});
