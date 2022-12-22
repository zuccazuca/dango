module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  plugins: [],
  variants: {
    backgroundColor: ['responsive', 'hover'],
    extend: {
      borderRadius: ['hover', 'focus'],
      fontWeight: ['hover', 'focus']
    }
  }
};
