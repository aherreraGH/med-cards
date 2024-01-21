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
      name: 'remote-menu-app',
      filename: 'remoteMenu.js',
      // Modules to expose
      exposes: {
        './RemoteMenu': './src/components/Hello'
      },
      shared: {
        ...(<any>Object).entries(pkg.dependencies).reduce((acc, [key, version]) => { acc[key] = {version: version}; return acc;}, {})
      }
    })
  ],
  preview: {
    host: 'localhost',
    port: 5004,
    strictPort: true,
  },
  server: {
    port: 5004,
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
