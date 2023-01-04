/** @type {import('tailwindcss').Config} */

  module.exports = {
    darkMode: 'class',
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    
    ],
    // ...
  theme: {
    extend: {
      animation: {
        'linethrough': 'linethrough 4s linear forwards',
      },
      keyframes: {
        linethrough: {
          '100%': {
            'transform': 'translateX(0)'
          },
        },
      },
      fontFamily: {
        'newsreader': ['Newsreader', 'cursive'],
      },
      fontSize: {
        '10xl': ['12rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        extra: '0.5em',
      },
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
  blocklist: [
    'container',
    'collapse',
  ],
}
