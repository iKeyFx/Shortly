/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'boost-mobile': "url('/src/assets/images/bg-boost-mobile.svg')",
        'boost-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
        'url-mobile': "url('/src/assets/images/bg-shorten-mobile.svg')",
        'url-desktop': "url('/src/assets/images/bg-shorten-desktop.svg')",
      },

      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          'dark-violet': 'hsl(257, 27%, 26%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 75%)',
          'grayish-violet': 'hsl(257, 7%, 63%)',
          'very-dark-blue': 'hsl(255, 11%, 22%)',
          'very-dark-violet': 'hsl(260, 8%, 14%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
