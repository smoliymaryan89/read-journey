import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@store": "/src/store",
      "@layouts": "/src/layouts",
      "@guards": "/src/guards",
      "@service": "/src/service",
    },
  },
});
