import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
// @ts-ignore
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-card-app',
      filename: 'remoteCards.js',
      // Modules to expose
      exposes: {
        './RemoteTemp': './src/components/Temp'
      },
      shared: {
        ...(<any>Object).entries(pkg.dependencies).reduce((acc, [key, version]) => { acc[key] = {version: version}; return acc;}, {})
      }
    })
  ],
  preview: {
    host: 'localhost',
    port: 5005,
    strictPort: true,
  },
  server: {
    port: 5005,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
