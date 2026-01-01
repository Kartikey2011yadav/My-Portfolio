// module.exports = {
//   plugins: [
//     require('postcss-nesting'),
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// };
// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

export default {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
  }
}

