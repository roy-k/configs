require('@babel/polyfill')

var path = require('path');
const paths = require('./paths');
var webpack = require('webpack');

var merge = require('webpack-merge');

var CleanWebpackPlugin = require('clean-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// var ImageminPlugin = require('imagemin-webpack-plugin').default

var baseWebpackConfig = require('./webpack.common.js');


webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',    
    entry: {
      index: paths.appIndexJs,
      download: [
          paths.downloadIndexJs
      ],
    },
    output: {
        publicPath: '//static.yk.qq.com/tyopen/site/',
    },
    module: {
       
    },
    devtool: false,
    optimization: {
      splitChunks: {
        chunks: "all",
        // cacheGroups: {
        //   commons: {
        //     chunks: "initial",
        //     minChunks: 2,
        //     maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //     minSize: 0,// This is example is too small to create commons chunks,
        //   },
        //   'react': {
        //     test: /react|react-dom|react-router-dom/, // 直接使用 test 来做路径匹配
        //     chunks: "initial",
        //     enforce: true,
        //   },
        //   'cos-js-sdk-v5': {
        //     test: /cos-js-sdk-v5/, // 直接使用 test 来做路径匹配
        //     chunks: "initial",
        //     name: "cos-js-sdk-v5",
        //     enforce: true,
        //   },
        // }
      },
    },

    plugins: [
      
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../')
        }),
        new BundleAnalyzerPlugin(
          {
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
              }
        ),
        // new ImageminPlugin({
        //     disable: process.env.NODE_ENV !== 'production',
        //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        //     pngquant: {
        //         quality: '95-100'
        //     }
        // })
    ]
});

module.exports = webpackConfig;
