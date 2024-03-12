/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: '#141414',
      strong: '#171A1E',
      white: '#ffffff',
      ink: '#2F343C',
      weak: '#919AAA',
      link: '#4771FA',
      light: '#ECEFF3',
      ticket: '#F2F2F2',
      feedback: {
        success: '#29D884',
        fail: '#FF4242',
      },
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
};
