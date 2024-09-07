/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'merriweather':['Merriweather', 'sans-serif'],
        'kronaone':['Krona One', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      boxShadow: {
        '3xl': '0 60px 60px -15px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
  darkMode:"class"
}
