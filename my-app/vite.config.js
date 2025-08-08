import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Only if using React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),          // only if React
    tailwindcss(),    // add Tailwind plugin
  ],
  preview: {
    allowedHosts: ['own-portfolio-hg6g.onrender.com']
  }
})


