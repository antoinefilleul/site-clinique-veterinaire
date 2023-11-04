import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';
import progress from 'vite-plugin-progress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), { ...basicSsl(), apply: 'serve' }, progress()],
  server: {
    https: true,
    port: 3000
  },
  optimizeDeps: {},
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/assets/'),
      '@': path.resolve(__dirname, './src/'),
      './runtimeConfig': './runtimeConfig.browser'
    }
  }
});