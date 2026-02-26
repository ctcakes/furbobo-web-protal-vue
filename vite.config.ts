import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置 @ 指向 src 目录的绝对路径
      '@': path.resolve(__dirname, './src')
    }
  },
  assetsInclude: ['**/*.svg']
})
