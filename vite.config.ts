import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

// Simulação do __dirname para módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // O nome do repositório DEVE ser exatamente este (maiúsculas/minúsculas importam)
  base: '/Devolprodrigov/', 
  
  plugins: [
    react(), 
    tailwindcss()
  ],
  
  resolve: {
    alias: {
      // Isso permite que você use importações como '@/components/...'
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});