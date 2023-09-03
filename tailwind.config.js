/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm':'460px',
        'sm': '600px',
        'smd':'640px',
        'md': '768px',
        'slg':'900px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

