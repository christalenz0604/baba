import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });
// define js
export default defineConfig({
  base: '/', // ← 這個是你 repo 名稱
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});

