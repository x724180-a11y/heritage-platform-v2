/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1D4ED8', // 深蓝作为主题色
        'secondary-gray': '#F3F4F6', // 浅灰作为背景色
      },
    },
  },
  plugins: [],
}