import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Gzip compression for all assets > 1kb
    viteCompression({ algorithm: 'gzip',   ext: '.gz',  threshold: 1024 }),
    // Brotli compression (smaller than gzip, supported by all modern browsers)
    viteCompression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
  ],
  build: {
    // Code obfuscation — minify with esbuild (default), removes names/comments
    minify: 'esbuild',
    // Further obfuscation: mangle all internal identifiers
    target: 'es2015',
    rollupOptions: {
      output: {
        // Split vendor chunks so app code changes don't bust CDN cache for libs
        manualChunks: {
          react:  ['react', 'react-dom'],
          motion: ['framer-motion'],
          router: ['react-router-dom'],
        },
        // Obfuscate chunk filenames with content hash
        chunkFileNames:  'assets/[hash].js',
        entryFileNames:  'assets/[hash].js',
        assetFileNames:  'assets/[hash][extname]',
      },
    },
    // Remove console.log/debug in production
    esbuildOptions: {
      drop: ['debugger'],
      pure: ['console.debug', 'console.info'],   // keep warn/error, drop debug/info
    },
  },
})
