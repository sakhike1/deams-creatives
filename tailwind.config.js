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
    extend: {},
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
