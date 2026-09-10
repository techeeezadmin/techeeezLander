import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { prerender } from "./scripts/prerender.mjs";

function seoPrerender() {
  return {
    name: "seo-prerender",
    closeBundle() {
      if (process.env.VITEST) return;
      prerender();
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPrerender()],
});
