/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        surfaceHover: '#F1F5F9',
        primary: '#4F46E5', // Indigo
        primaryHover: '#4338CA',
        secondary: '#0EA5E9', // Sky blue
        textMain: '#0F172A', // Very dark slate
        textMuted: '#64748B', // Muted slate
        border: '#E2E8F0', // Light slate border
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
