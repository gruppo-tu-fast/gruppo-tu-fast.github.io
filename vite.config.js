import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name for GitHub Pages project sites
export default defineConfig({
  base: '/complaint-hotline/',
  plugins: [react()],
})
