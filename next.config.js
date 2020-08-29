const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack(config, options) {
    return config
  }
})

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
}
// module.exports = withCSS({
//     /* config options here */
//   })
//module.exports = withCSS();

module.exports = {
    compress: false,
}

module.exports = withOptimizedImages({
    webpack(config) {
        return config;
    }

});