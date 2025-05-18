// / <reference types='vitest' />
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/store',
  envDir: path.resolve(__dirname, 'stripe-server'),
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/create-checkout-session': {
        target: 'http://localhost:4242',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 800,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
}))
