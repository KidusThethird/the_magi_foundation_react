/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm':'460px',
        'sm': '640px',
        'smd':'600px',
        'md': '768px',
        'slg':'900px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

