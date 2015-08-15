var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './thinkslow.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'thinkslow.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
