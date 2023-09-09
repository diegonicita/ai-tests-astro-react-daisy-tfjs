/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      animation: {
        enter: 'enter .25s ease-out',
        leave: 'leave .25s ease-in forwards',
      },
      keyframes: {
        enter: {
          '0%': {
            opacity: '0',
            transform: 'scale(.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        leave: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(.9)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl'),
          marginTop: theme('spacing.4'),
        },
        h2: {
          fontSize: theme('fontSize.xl'),
          marginTop: theme('spacing.4'),
        },
        h3: {
          fontSize: theme('fontSize.lg'),
          marginTop: theme('spacing.4'),
        },
        p: {
          marginTop: theme('spacing.4'),
          lineHeight: theme('lineHeight.7'),
        },
      })
    }),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'cyberpunk', 'valentine'],
  },
}
