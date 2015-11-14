'use strict'

var webpack = require('webpack');

var argv = require('minimist')(process.argv.slice(2));

var src = './src';
var dest = './build'

module.exports = {
  watch: !!(argv.w),
  dirs: {
    src: src,
    dest: dest
  },
  cssnext: {
    src: src + '/style/index.css',
    dest: dest
  },
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel?presets[]=es2015'
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  }
};
