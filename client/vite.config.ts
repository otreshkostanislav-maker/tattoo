import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Убедись, что это есть

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'public',
  base: '/',
  
  // --- ДОБАВЬ ЭТОТ БЛОК ---
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ------------------------

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'), // Проверь, правильно ли указан путь к main
      },
    },
  },
});

