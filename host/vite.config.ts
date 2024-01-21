import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-host-app',
      remotes: {
          remote_cards: "http://localhost:5005/assets/remoteCards.js",
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5000,
  },
  build: {
    modulePreload: true,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
