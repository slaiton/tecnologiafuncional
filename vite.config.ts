import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    // El build de servidor solo se usa para pre-renderizar; no necesita /public
    copyPublicDir: !isSsrBuild,
  },
  server: {
    // En desarrollo, /api se redirige al servidor de correo local
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
}))
