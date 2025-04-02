import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "huex",
      fileName: (format) => `huex.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "react", "angular"],
      output: {
        globals: {
          vue: "Vue",
          react: "React",
          angular: "Angular"
        }
      }
    }
  }
});
