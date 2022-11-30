import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SvelteWebComponent',
      fileName: 'svelte-web-component',
    },
  },
  plugins: [svelte(), cssInjectedByJsPlugin(),]
})
