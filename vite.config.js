import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mom-bus-diary/', // 반드시 프로젝트명과 일치
  plugins: [react()],
});