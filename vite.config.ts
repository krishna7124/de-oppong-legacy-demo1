import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/de-oppong-legacy-demo1/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  assetsInclude: ["**/*.ico"],
});
