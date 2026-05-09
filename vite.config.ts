import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Ajustado para o nome do seu repositório no GitHub
    base: '/', 
    plugins: [
      react(), 
      tailwindcss()
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Mantendo a configuração de HMR original do seu arquivo
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Garante que o build seja gerado de forma limpa
      outDir: 'dist',
    }
  };
});
