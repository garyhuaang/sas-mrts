// / <reference types='vitest' />
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  base: '/sas-mrts/',
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/store',
  envDir: path.resolve(__dirname, 'stripe-server'),
  resolve: {
    alias: {
      '@libs': path.resolve(__dirname, '../../libs'),
    },
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
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}))
