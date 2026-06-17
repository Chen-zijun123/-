/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0f',
        'bg-card': '#14141f',
        'border-subtle': '#1e1e2e',
        'text-primary': '#e4e4e7',
        'text-secondary': '#71717a',
        'accent': '#60a5fa',
        'accent-glow': 'rgba(96, 165, 250, 0.15)',
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', '"Noto Serif SC"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      maxWidth: {
        'content': '1700px',
      },
    },
  },
  plugins: [],
}
