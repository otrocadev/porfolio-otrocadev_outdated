/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        otrocadev: {
          grey: '#0e2129',
          darkblue: '#001c3e',
          light: '#e4f2f9',
          lightblue: '#fc73fc',
          green: '#A8Fe5f',
        },
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 2s steps(8) forwards',
        'fade-in-out': 'fade 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
