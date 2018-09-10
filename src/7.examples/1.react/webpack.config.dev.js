require('@babel/polyfill')

const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const opn = require('opn');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.common.js');

webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    index: [
        paths.appIndexJs
    ],
    download: [
        paths.downloadIndexJs
    ],
},
  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    // publicPath: paths.publicPath,
    // devtoolModuleFilenameTemplate: info =>
    // path
    //     .relative(paths.appSrc, info.absoluteResourcePath)
    //     .replace(/\\/g, '/'),
  },
  module: {},
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),

    hot: true,
    // 开启服务器的模块热替换（HMR）

    host: 'localhost',

    port: 3000,

    inline: true,
    // quiet: true,

    publicPath: '/',
    // 和上文output的"publicPath"值保持一致

    historyApiFallback: true,
    after() {
      opn('http://atest.yk.qq.com');
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
  ]
});

module.exports = webpackConfig;
