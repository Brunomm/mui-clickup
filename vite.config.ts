/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Path to setup file
    // Optional: configure coverage, etc.
    // coverage: {
    //   provider: 'v8',
    //   reporter: ['text', 'json', 'html'],
    // },
  },
});

