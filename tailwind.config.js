/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind')
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1220px',
      xl: '1280px',
      mxl: '1470px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
        strokedark: '#2E3A47',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        primary: {
          DEFAULT: '#218af5',
          light: '#223FA1',
          'dark-light': 'rgb(128,93, 202, 0.15)',
          800: '#223FA1',
          700: '#217AF8',
          600: '#2CA2FD',
          500: '#6E83C4',
          400: '#8899CF',
          300: '#A1B0DB',
          200: '#BAC7E7',
          100: '#F6FAFF',
        },
        secondary: {
          DEFAULT: '#d72435',
          light: '#DB3B4A',
          'dark-light': 'rgba(67,97,238,.15)',
          800: '#DB3B4A',
          700: '#E0515F',
          600: '#E46873',
          500: '#E97E88',
          400: '#ED959D',
          300: '#F1ABB2',
          200: '#F6C2C7',
          100: '#FFF1F2',
        },
        success: {
          DEFAULT: '#077d55',
          light: '#ddf5f0',
          'dark-light': 'rgba(0,171,85,.15)',
          800: '#308a63',
          700: '#499871',
          600: '#60a580',
          500: '#75b38f',
          400: '#8ac19f',
          300: '#9ecfaf',
          200: '#b3ddc0',
          100: '#c7ebd1',
        },
        grey: {
          DEFAULT: '#5b7282',
          light: '#dce3e8',
          'dark-light': 'rgba(0,25,21,.15)',
          800: '#6a7f8e',
          700: '#7a8d9a',
          600: '#8a9ba7',
          500: '#9aa9b4',
          400: '#aab7c0',
          300: '#bac6cd',
          200: '#cbd4db',
          100: '#dce3e8',
        },
        danger: {
          DEFAULT: '#d91f11',
          light: '#fff5f5',
          'dark-light': 'rgba(231,81,90,.15)',
          800: '#e3412d',
          700: '#eb5a47',
          600: '#f1715f',
          500: '#f78778',
          400: '#fa9d90',
          300: '#fcb2a9',
          200: '#fcc7c1',
          100: '#fadcd9',
        },
        warning: {
          DEFAULT: '#f5c518',
          light: '#fff9ed',
          'dark-light': 'rgba(226,160,63,.15)',
          800: '#f4cc3b',
          700: '#f4d354',
          600: '#f4d96a',
          500: '#f5e07f',
          400: '#f5e693',
          300: '#f6eba7',
          200: '#f8f1bb',
          100: '#faf6cf',
        },
        info: {
          DEFAULT: '#186ade',
          light: '#e7f7ff',
          'dark-light': 'rgba(33,150,243,.15)',
          800: '#3979e3',
          700: '#5289e8',
          600: '#6898ec',
          500: '#7da8ef',
          400: '#92b7f2',
          300: '#a7c6f5',
          200: '#bdd5f8',
          100: '#d4e4fa',
        },
        dark: {
          DEFAULT: '#0D0F52',
          light: '#eaeaec',
          'dark-light': 'rgba(59,63,92,.15)',
          blue: '#6B7788',
          800: '#383b3f',
          700: '#505357',
          600: '#6a6c6f',
          500: '#848789',
          400: '#a0a2a4',
          300: '#bcbebf',
          200: '#dadadb',
          100: '#f8f8f8',
        },
        black: {
          DEFAULT: '#0e1726',
          light: '#e3e4eb',
          'dark-light': 'rgba(14,23,38,.15)',
          200: 'rgba(0,0,0,.15)',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#e0e6ed',
          dark: '#888ea8',
          200: 'rgba(256,256,256,.15)',
        },
      },
      fontSize: {
        xxs: '0.625rem',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Almarai: ['Almarai', 'sans-serif'],
      },
      spacing: {
        5.5: '1.375rem',
      },
      boxShadow: {
        '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-invert-headings': theme('colors.white.dark'),
            '--tw-prose-invert-links': theme('colors.white.dark'),
            h1: { fontSize: '2.429rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h2: { fontSize: '1.929rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h3: { fontSize: '1.571rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h4: { fontSize: '1.286rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h5: { fontSize: '1rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h6: { fontSize: '0.625rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            p: { fontSize: '1rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            li: { margin: 0 },
            img: { margin: 0 },
          },
        },
      }),
    },
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`,
        )
      })
    }),
  ],
}
