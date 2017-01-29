var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    library: 'tUtils',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['syntax-decorators']
        },
        include: path.resolve(__dirname, 'src/')
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
};
