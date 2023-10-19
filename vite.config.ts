/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  assetsInclude: ['**/*.svg', '**/*.png'],
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: 'dist',
    assetsDir: 'files',
  },
  publicDir: 'assets',
  server: {
    https: false,
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      // Also generate in dev builds
      devOptions: { enabled: true },

      // generates 'manifest.webmanifest' file on build
      manifest: {
        name: 'DaySnap',
        short_name: 'DaySnap',
        start_url: './index.html',
        display: 'standalone',
        background_color: '#333',
        theme_color: '#DE0',
        description: 'A photo app for documenting every day with a selfie.',
        icons: [
          {
            src: '/logo/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable monochrome any',
          },
          {
            src: '/logo/icon-512.png',
            sizes: '32x32 64x64 72x72 128x128 256x256 512x512',
            purpose: 'maskable monochrome any',
          },
          {
            src: '/logo/icon-192.png',
            sizes: '48x48 96x96 192x192',
            purpose: 'maskable monochrome any',
          },
        ],
        categories: ['lifestyle', 'photo'],
        file_handlers: [
          {
            action: '',
            accept: {
              'image/jpeg': ['.jpeg', '.jpg'],
              'image/png': ['.png'],
            },
          },
        ],
        // Shortcut URLs for the app
        shortcuts: [],
      },
      workbox: {
        // defining cached files formats
        globPatterns: ['**/*.{js,ts,tsx,css,html,scss,png,svg,webmanifest}'],
      },
    }),
  ],
});
