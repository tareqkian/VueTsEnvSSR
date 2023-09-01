import { defineConfig } from 'vite'
import * as path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: { port: 3000 },
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@axios": path.resolve(__dirname, "src/helpers/axios"),
      "@modules": path.resolve(__dirname, "src/modules"),
    }
  }
})
