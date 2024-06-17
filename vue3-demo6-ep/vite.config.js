import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/api-dev': {
        target: 'http://139.198.34.216:8201/',
        changeOrigin: true,
      }
    }
  }
})
