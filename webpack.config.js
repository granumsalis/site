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
      },
      {
        test: /\.html$/,
        loader: 'ng-cache'
      },
      { test: /\.png$/, loader: 'url-loader?limit=10000' },
      { test: /\.gif$/, loader: 'url-loader?limit=10000' },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'url-loader?limit=10000' }
    ]
  }
};
