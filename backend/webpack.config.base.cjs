const path = require('path');

module.exports = {
  entry: './dist/api/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    "playwright-core": "commonjs playwright-core"
  },
  resolve: {
    fallback: {
      fs: require.resolve("fs-browserify"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
