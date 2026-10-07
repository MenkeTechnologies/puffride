import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Generates build/service-worker.js (precache of build output), which
    // src/registerServiceWorker.js registers in production.
    VitePWA({
      injectRegister: false,
      manifest: false,
      filename: 'service-worker.js',
    }),
  ],
  build: { outDir: 'build' },
  test: { environment: 'jsdom', globals: true },
});
