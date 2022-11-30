import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SvelteWebComponent',
      fileName: 'svelte-web-component',
    },
  },
  plugins: [svelte(), cssInjectedByJsPlugin()]
})
