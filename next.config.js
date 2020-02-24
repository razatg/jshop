const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack(config, options) {
    return config
  }
})
// module.exports = withCSS({
//     /* config options here */
//   })
//module.exports = withCSS();