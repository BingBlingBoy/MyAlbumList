import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      watch: {
          usePolling: true
      },
      proxy: {
          '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,  
          },
      }
  }
})

