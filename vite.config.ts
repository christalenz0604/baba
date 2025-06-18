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
  base: '/baba_test/', // Set to match gh-pages Pages repository name
  plugins: [react()],
  server: {
  },
});

