import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  server: {
    port: 3147,
    open: true,
    cors: true,
    host: '0.0.0.0',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/variable.scss" as *;
        `,
      },
    },
  },
})
