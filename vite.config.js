import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/My-Portfolio",
  plugins: [react()],
  assetsInclude: ['**/*.obj','**/*.glb', '**/*.hdr', '**/*.glsl'],
})
