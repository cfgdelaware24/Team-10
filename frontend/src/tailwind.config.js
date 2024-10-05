/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
        colors: {
          'primary-link': '#646cff',
          'primary-link-hover': '#535bf2',
          'dark-bg': '#242424',
          'light-bg': '#ffffff',
        },
      },
    },
    plugins: [],
  };
  