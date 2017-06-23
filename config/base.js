'use strict';

let port = 1102;
let path = require('path');
let srcPath = path.join(__dirname, '/../src');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');

module.exports = {
  devServer: {
    // https: true,
    // publicPath: '',
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: port,
    noInfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: srcPath + '/components/',
      containers: srcPath + '/containers/',
      lib: srcPath + '/lib/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/'
    }
  },
  // sassLoader: {
  //   includePaths: [srcPath + '/styles/']
  // },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      include: srcPath,
      loader: 'eslint-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: 'css-loader',
        publicPath: '../'
      })
    }, {
      test: /\.(sass|scss)/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function() {
              return [
                require('autoprefixer')
              ];
            }
          }
        }, 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              srcPath + '/styles/_ui_variables.scss',
              srcPath + '/styles/_mixins.scss'
            ]
          }
        }],
        publicPath: '../'
      })
    }, {
      test: /\.(png|jpg|gif)\??.*$/,
      loader: 'url-loader',
      query: {
        limit: '8192',
        name: 'images/[name].[hash:16].[ext]'
      }
    }, {
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      loader: 'url-loader',
      query: {
        limit: '8192',
        name: 'fonts/[name].[hash:16].[ext]'
      }
    }, {
      test: /\.(json)\??.*$/,
      loader: 'url-loader',
      query: {
        limit: '1',
        name: 'jsons/[name].[hash:16].[ext]'
      }
    }, {
      test: /\.(mp4)\??.*$/,
      loader: 'url-loader',
      query: {
        limit: '1',
        name: 'videos/[name].[hash:16].[ext]'
      }
    }]
  }
};
