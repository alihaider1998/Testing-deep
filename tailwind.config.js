module.exports = {
  content: [
     './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/details/**/*.html.js',

  ],
    theme: {
        extend: {
            colors: {
                primary: '#f15d22',
                greyish: '#808080'
            }
        }
    },
  plugins: [        require('@tailwindcss/typography'),
],
}
