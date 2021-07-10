import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path/posix'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src')}]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/components/styles/variables.scss";`
      }
    }
  },
  plugins: [vue()]
})
