/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        synthik: {
          bg: '#0a0a0a',
          card: '#141414',
          surface: '#1a1a1a',
          border: '#2a2a2a',
          accent: '#8b5cf6',
          'accent-hover': '#7c3aed',
          text: '#f5f5f5',
          muted: '#a3a3a3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
