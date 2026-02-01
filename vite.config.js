import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: "/Luxury_Line_Perfumes/",
  plugins: [react(),tailwindcss(),],
})
