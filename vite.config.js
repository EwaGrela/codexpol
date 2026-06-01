import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/react') || id.includes('/react-dom') || id.includes('/react-router')) {
            return 'vendor'
          }
          if (id.includes('/i18next') || id.includes('/react-i18next')) {
            return 'i18n'
          }
        },
      },
    },
  },
})
