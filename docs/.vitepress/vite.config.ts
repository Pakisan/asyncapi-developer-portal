import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      // Define an alias for the vue3-json-viewer package
      'vue3-json-viewer': path.resolve(__dirname, '../../node_modules/vue3-json-viewer'),
      // Add alias for the icon.svg file
      './icon.svg': path.resolve(__dirname, './assets/icon.svg'),
    }
  },
  // Ensure CSS files are properly processed
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  // Explicitly include the CSS file in the build
  build: {
    rollupOptions: {
      external: [],
      // Make sure the CSS file is properly included
      output: {
        manualChunks: {
          'vue3-json-viewer': ['vue3-json-viewer']
        }
      }
    },
    // Improve CSS handling
    cssCodeSplit: true,
    assetsInlineLimit: 0
  },
  // Configure asset handling
  assetsInclude: ['**/*.svg'],
  optimizeDeps: {
    include: ['vue3-json-viewer']
  }
});
