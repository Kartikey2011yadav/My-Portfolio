import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import veauryVitePlugins from 'veaury/vite/index.js';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/My-Portfolio",
  plugins: [
    // react(),
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
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
