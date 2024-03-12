/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background & Text
        'bg': '#2B2B2B',
        'bgsecondary': '#3B3B3B',
        'captiontext': '#858584',
        'textW': '#FFF',
        // Call to Action
        'callAcction': '#A259FF',
      },
      backgroundImage: {
        // Gradients
        'gradient1': 'linear-gradient(101deg, #A259FF 13.57%, #FF6250 97.65%)',
        'gradient2': 'linear-gradient(128deg, #A259FF 49.75%, #377DF7 136.56%)',
    },
    },
  },
  plugins: [],
}

