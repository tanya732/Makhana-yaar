import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project path: https://tanya732.github.io/Makhana-yaar/
export default defineConfig({
  base: '/Makhana-yaar/',
  plugins: [react()],
})
