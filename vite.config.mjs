import { resolve } from 'path'
import preact from '@preact/preset-vite'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  },
  plugins: [
    preact()
  ]
}