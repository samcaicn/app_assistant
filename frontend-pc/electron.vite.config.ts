import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'
import wasm from 'vite-plugin-wasm'

const envDir = resolve('../..')

export default defineConfig({
  main: {
    envDir,
    plugins: [
      externalizeDepsPlugin({
        exclude: ['playwright-core'],
      }),
    ],
  },

  preload: {
    envDir,
    plugins: [externalizeDepsPlugin()],
  },

  renderer: {
    envDir,
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        // '.prisma/client/index-browser': '../../node_modules/.prisma/client/index-browser.js', // ref: https://github.com/prisma/prisma/issues/12504#issuecomment-1285883083
      },
    },
    plugins: [
      react(),
      wasm(), // for tiktoken@llm
    ],
  },
})
