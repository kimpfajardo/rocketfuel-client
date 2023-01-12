/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      'gray': '#CBDAE2',
      // LIGHT MODE COLORS
      // Label
      'l-label-primary': '#182734',
      'l-label-secondary': '#5A6A72',
      'l-label-disabled': '#A6BCC9',
      'l-label-reverse': '#F5F7F9',
      'l-label-link': '#2950FF',
      'l-label-success': '#0F764A',
      'l-label-dangerous': '#D02F55',
      'l-label-info': '#9336CE',
      // Interactive
      'l-int-default': '#001057',
      'l-int-hover': '#002EFA',
      'l-int-active': '#2950FF',
      'l-int-disabled': '#CBDAE2',
      // Surface
      'l-surface-default': '#FFFFFF',
      'l-surface-strong': '#D4E1E8',
      'l-surface-hover': '#EBF1F5',
      'l-surface-active': '#E4EAFC',
      'l-surface-disabled': '#F5F7F9',
      'l-surface-error-hover': '#FFF1F0',
      'l-surface-error-active': '#FDECEC',
      'l-surface-error-tooltip': '#30424F',
      // Outline
      'l-outline-default': '#CBDAE2',
      'l-outline-hover': '#9AB5F9',
      'l-outline-active': '#2950FF',
      'l-outline-error': '#D02F55',
      'l-outline-tooltip': '#768993',
      // Background
      'l-bg-primary': '#FFFFFF',
      'l-bg-secondary': '#F5F7F9',
      'l-bg-overlay': '#3A3E42',
      'l-bg-nudge': '#9336CE',
      // DARK MODE COLORS
      'd-label-primary': '#F5F7F9',
      'd-label-secondary': '#A6BCC9',
      'd-label-disabled': '#5A6A72',
      'd-label-reverse': '#182734',
      'd-label-link': '#9AB5F9',
      'd-label-success': '#57C269',
      'd-label-dangerous': '#F27892',
      'd-label-info': '#C3ABE8',
      // Interactive
      'd-int-default': '#EDF1FD',
      'd-int-hover': '#BFCDF7',
      'd-int-active': '#9AB5F9',
      'd-int-disabled': '#40525E',
      'd-int-default': '#EDF1FD',
      'd-int-default': '#EDF1FD',
      'd-int-default': '#EDF1FD',
      // Surface
      'd-surface-default': '#000000',
      'd-surface-strong': '#30424F',
      'd-surface-hover': '#263440',
      'd-surface-active': '#0026D1',
      'd-surface-disabled': '#182734',
      'd-surface-error-hover': '#3F0319',
      'd-surface-error-active': '#660018',
      'd-surface-tooltip': '#30424F',
      // Outline
      'd-outline-default': '#40525E',
      'd-outline-hover': '#2950FF',
      'd-outline-active': '#9AB5F9',
      'd-outline-error': '#F27892',
      'd-outline-tooltip': '#768993',
      // Background
      'd-bg-primary': '#000000',
      'd-bg-secondary': '#182734',
      'd-bg-overlay': '#131F2A',
      'd-bg-nudge': '#9336CE',
    },
    fontSize: {
      '4xl': ['64px', '72px'],
      '3xl': ['40px', '48px'],
      '2xl': ['32px', '40px'],
      'xl': ['24px', '32px'],
      'lg': ['16px', '24px'],
      'sm': ['14px', '24px'],
      'xs': ['12px', '16px'],
    },
    extend: {
      boxShadow: {
        'sm': '0 2px 4px 0 rgb(0 0 0 / 0.16)',
        DEFAULT: '0 5px 8px 0 rgb(0 0 0 / 0.16)',
        'md': '0 7px 12px 1px rgb(0 0 0 / 0.16)',
        'lg': '0 8px 24px 2px rgb(0 0 0 / 0.12)',
        'xl': '0 16px 38px 3px rgb(0 0 0 / 0.14)',
      },
      fontFamily: {
        'inter': ['var(--font-inter)']
      },
      borderRadius: {
        DEFAULT: '6px'
      },

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}