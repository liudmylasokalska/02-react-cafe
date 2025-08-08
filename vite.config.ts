import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/02-react-cafe/', 
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  define: {
    __DEFINES__: JSON.stringify({
      SOME_FLAG: true
    })
  }
})
