import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base set to root for custom domain deployment
export default defineConfig({
  base: '/',
  plugins: [react()],
})
