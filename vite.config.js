import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio',
  server:{
    port: 5173
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.pdf', '**/*.PDF'],
})