const path = require('path');
const webpack = require('webpack');

const entries = [

  {
    filename: 'index',
    library: 'DataFormatter',
    src: path.join(__dirname, 'src'),
    path: path.join(__dirname, 'lib')
  },

  {
    filename: 'ru-RU',
    library: 'DataFormatter_ruRU',
    src: path.join(__dirname, 'src', 'locales', 'ru-RU'),
    path: path.join(__dirname, 'lib', 'locales')
  },

  {
    filename: 'en-US',
    library: 'DataFormatter_enUS',
    src: path.join(__dirname, 'src', 'locales', 'en-US'),
    path: path.join(__dirname, 'lib', 'locales')
  },

  {
    filename: 'de-DE',
    library: 'DataFormatter_deDE',
    src: path.join(__dirname, 'src', 'locales', 'de-DE'),
    path: path.join(__dirname, 'lib', 'locales')
  }

];

module.exports = entries.map((entry) => ({
  entry: entry.src,
  devtool: 'source-map',
  output: {
    library: entry.library,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: entry.filename + '.js',
    path: entry.path
  },
  bail: true,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}));
