import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/protflioreact/',  // ✅ use your repo name
  plugins: [react()],
});
