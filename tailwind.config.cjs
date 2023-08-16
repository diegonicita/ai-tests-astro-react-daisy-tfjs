/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
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
          marginTop: theme('spacing.2'),
          lineHeight: theme('lineHeight.7'),          
        },
        ul: {
          marginTop: theme('spacing.4'),                              
          listStyleType: 'disc',
          marginLeft: theme('spacing.4'),
        },
        ol: {
          marginTop: theme('spacing.4'),                              
          listStyleType: 'decimal',
          marginLeft: theme('spacing.4'),
        },
        li: {
          marginBottom: theme('spacing.2'),
        },
        '.markdown p + p': {
          marginTop: theme('spacing.4'), 
        },
      })
    }),
    require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'cyberpunk'],
  },
}
