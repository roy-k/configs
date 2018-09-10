require('@babel/polyfill')

var path = require('path');
const paths = require('./paths');
var webpack = require('webpack');

var merge = require('webpack-merge');

var CleanWebpackPlugin = require('clean-webpack-plugin');

// var ImageminPlugin = require('imagemin-webpack-plugin').default

var baseWebpackConfig = require('./webpack.common.js');

// function recursiveIssuer(m) {
//   if (m.issuer) {
//     return recursiveIssuer(m.issuer);
//   } else if (m.name) {
//     return m.name;
//   } else {
//     return false;
//   }
// }

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
        path: paths.appBuild,
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        // publicPath: paths.publicPath,
        // devtoolModuleFilenameTemplate: info =>
        // path
        //     .relative(paths.appSrc, info.absoluteResourcePath)
        //     .replace(/\\/g, '/'),
    },
    module: {
       
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {chunks: 'all'}
      // splitChunks: {
        // chunks: "all",
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
          // styles: {
          //   name: 'styles',
          //   test: /\.css|styl$/,
          //   chunks: 'all',
          //   enforce: true
          // }
          // indexStyles: {
          //   name: 'index',
          //   test: (m,c,entry = 'index') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          //   chunks: 'all',
          //   enforce: true
          // },
          // downloadStyles: {
          //   name: 'download',
          //   test: (m,c,entry = 'download') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          //   chunks: 'all',
          //   enforce: true
          // }
        // }
      // },
    },

    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
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
