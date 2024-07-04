import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/liza",
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
  })], server: {
  }, registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },

})
