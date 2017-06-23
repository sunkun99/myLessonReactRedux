'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');

// Add needed plugins here
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = Object.assign({
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: '[name].js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles/app.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        removeScriptTypeAttributes: true
      }
    })
  ]
}, baseConfig);

// Add needed loaders
config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [
    path.join(__dirname, '/../src'),
    path.join(__dirname, '/../node_modules/pajk-ui')
  ]
});

module.exports = config;
