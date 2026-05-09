import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente (como a GEMINI_API_KEY)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // IMPORTANTE: Altere para o nome exato do seu repositório no GitHub
    // Se o seu repositório for https://github.com/Devolprodrigov/rodrigo-dev-portfolio
    // O base deve ser '/rodrigo-dev-portfolio/'
    base: mode === 'production' ? '/rodrigo-dev-portfolio/' : '/',

    plugins: [
      react(),
      tailwindcss()
    ],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        // Permite usar importações como '@/components/...'
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      port: 3000,
      host: '0.0.0.0',
      // Desabilita HMR se estiver em ambientes restritos, caso contrário mantém ativo
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
      // Garante que os assets sejam gerados com nomes consistentes
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  };
});
