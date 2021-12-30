import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://paulinoalbanez.github.io/gitActions/',
  plugins: [react()]
})
