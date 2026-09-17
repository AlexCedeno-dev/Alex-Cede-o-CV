import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Repo se sirve en GitHub Pages bajo /Alex-Cede-o-CV/, no en la raíz del dominio.
export default defineConfig({
  base: '/Alex-Cede-o-CV/',
  plugins: [react()],
})
