import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), require('daisyui')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      layouts: `${path.resolve(__dirname, './src/layouts')}`,
      assets: `${path.resolve(__dirname, './src/assets')}`,
    },
  },
  server: {
    port: 3000,
  },
});
