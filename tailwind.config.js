const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            '2xl': '1200px',
          },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms')],
};
