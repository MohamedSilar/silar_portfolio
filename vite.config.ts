// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/silar_portfolio/',  // 👈 Must match your GitHub repo name
  plugins: [react()],
})
