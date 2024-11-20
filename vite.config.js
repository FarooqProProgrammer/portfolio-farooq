import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
     pluginPurgeCss(),
      // cssInjectedByJsPlugin(),
    ],
  build: {
    outDir: "build",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(name || '')) {
            return 'assets/images/[name]-[hash].[ext]';
          }
          if (/\.css$/.test(name || '')) {
            return 'assets/css/[name]-[hash].[ext]';
          }
          return 'assets/[ext]/[name]-[hash].[ext]';
        },
      },
    },
  },
});
