import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    assetsInlineLimit: (filePath) => !/sprite\.svg$/i.test(filePath),
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: {
      '~': resolve(import.meta.dirname, 'src'),
    },
  },
});
