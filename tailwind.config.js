// tailwind.config.js
const { nextui } = require('@nextui-org/react');
const keepPreset = require('keep-react/preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // Include Next UI styles
  ],
  theme: {
    extend: {
      colors: {
        red: '#dc143c',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
  presets: [keepPreset],
};
