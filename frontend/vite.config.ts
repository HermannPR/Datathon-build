import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: false, // Deshabilitar PostCSS para evitar conflictos
  },
  server: {
    hmr: {
      overlay: false // Opcional: deshabilitar overlay de errores
    }
  }
})
