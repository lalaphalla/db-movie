/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'lime': ['Limelight'],
      'press': ['"Press Start 2P"'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
          'primary':'#080F2C',
          'secondary': '#245C86',
          'green-custom':'#4E7970',
        }
    },
  },
  plugins: [require("flowbite/plugin")],
};
