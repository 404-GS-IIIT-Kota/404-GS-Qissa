import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  routes: [
    {
      src: '/signin',
      dest: '/404-gs-qissa.vercel.app/signin'
    },
    {
      src: '/signup',
      dest: '/404-gs-qissa.vercel.app/signup'
    },
  ],
})



