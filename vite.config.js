import { defineConfig } from "vite"

export default defineConfig({
    root: './',      // корневая папка проекта (где index.html)
  base: './public',      // относительные пути для сборки
  server: {
    port: 3000,    // порт локального сервера
    open: true,    // открывать браузер автоматически
  },
  build: {
    outDir: 'dist',   // папка для сборки
    sourcemap: true,  // чтобы видеть исходники при дебаге
    rollupOptions: {
      input: 'index.html', // входной файл
    },
  },
  css: {
    devSourcemap: true, // source map для CSS
  },
})
