import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// org root site (gruppo-tu-slow.github.io) serves from /
export default defineConfig({
  base: '/',
  plugins: [react()],
})
