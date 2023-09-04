import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
        }),
      ],
    },
  },
});
