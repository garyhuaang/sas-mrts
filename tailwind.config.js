/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
    './{src,pages,components,app}/**/*.{ts,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-motion'),
    require('tailwindcss-animate'),
  ]
};
