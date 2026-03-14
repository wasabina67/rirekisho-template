import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/rirekisho-template/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
