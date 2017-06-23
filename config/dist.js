'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');

// Add needed plugins here
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({
  entry: {
    vendor: [
      'lodash/isEmpty',
      'es6-promise',
      'iscroll',
      'isomorphic-fetch',
      'md5',
      'pubsub-js',
      'react',
      'react-cookie',
      'react-dom',
      'react-image-gallery',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react/lib/ReactComponentWithPureRenderMixin',
      'redux',
      'redux-actions',
      'redux-promise-middleware'
    ],
    app: [
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'scripts/[name].[chunkhash:16].js',
    chunkFilename: 'scripts/[name].[chunkhash:16].js',
    publicPath: ''
  },
  cache: false,
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('styles/app.[contenthash:16].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'scripts/vendor.[chunkhash:16].js'
    }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require(path.join(__dirname, '../src/vendor.manifest.json'))
    // }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname, '../src/index.html'),
      minify: {
        minifyJS: true,
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true
      }
    }),
    function() {
      this.plugin('done', function(state) {
        let fs = require('fs');

        //提取index.html，按需要插入内容
        // let fileUri = path.join(__dirname, '../dist/index.html');
        // fs.readFile(fileUri, 'utf-8', function(err, data) {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     let html = data.replace(/<script src=\"config\.js\"><\/script>/, '<script src=\"config\.js\"><\/script><script src=\"vendor\.js\"><\/script>');
        //     fs.writeFile(fileUri, html, 'utf-8', function(err) {});
        //   }
        // });

        let configJs = './src/config.js',
          indexHtml = './dist/index.html',
          projectName = require('../package.json').name;
        fs.readFile(configJs, 'utf-8', function(err, jsData) {
          if (err) {
            throw err;
          }
          let logHost = /\s*LOG_HOST:\s*\'((\w*:)*\/\/\w+(\.\w+)+\/js\/beacon\.js)\'/.exec(jsData);
          fs.readFile(indexHtml, 'utf-8', function(err, htmlData) {
            if (err) {
              throw err;
            }
            let html = htmlData.replace('<\/body><\/html>', '<script>var b=document.getElementsByTagName("body")[0],c=document.createElement("script");c.setAttribute("id","log_js"),c.setAttribute("src","' + (logHost && logHost[1]) + '"),b.appendChild(c);window.beacon={"PROJECT": "' + projectName + '_h5"};<\/script><\/body><\/html>');
            fs.writeFile(indexHtml, html, 'utf-8', function(err) {});
          });
        });

      });
    },
    new webpack.NoErrorsPlugin()
  ]
}, baseConfig);

config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [
    path.join(__dirname, '/../src'),
    path.join(__dirname, '/../node_modules/pajk-ui')
  ]
});

module.exports = config;
