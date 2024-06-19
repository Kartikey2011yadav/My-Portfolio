import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import veauryVitePlugins from 'veaury/vite/index.js';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/My-Portfolio",
  plugins: [
    // react(),
    veauryVitePlugins({
      type: 'react',
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...}, 
      // Configuration of @vitejs/plugin-vue-jsx
      // vueJsxOptions: {...}
    })
  ],
  assetsInclude: ['**/*.obj','**/*.glb', '**/*.hdr', '**/*.glsl'],

})
