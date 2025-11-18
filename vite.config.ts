import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rick-and-morty-challenge/',
  resolve: {
    alias: { '@': path.resolve(__dirname, './src'), },
  },
})