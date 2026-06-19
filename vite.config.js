import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Use './' for relative paths — works whether deployed to root or subdirectory
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
