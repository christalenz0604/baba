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
  base: '/', // Set to match Playbaba.tw Pages repository name
  plugins: [react()],
  server: {
  },
});

