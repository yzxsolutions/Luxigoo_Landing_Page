import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : "/Luxigoo_Landing_Page/",
  plugins: [react()],
})
