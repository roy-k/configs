const path = require('path');

const paths = require('./paths');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
    },
    output: {
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: [/\.ico$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[hash:8].[ext]'
                }
            }, 
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(css|styl)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: '../build'
                        }
                    },
                    // "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "stylus-loader",
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    resolve: {
        extensions: [
            '.js', '.json', '.styl', '.css'
        ],
        alias: {
            img: path.resolve(__dirname, '../src/common/img'),
            css: path.resolve(__dirname, '../src/common/css'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            favicon: '../public/favicon.ico',
            filename: 'index.html',
            chunks: ['index'],
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            favicon: '../public/favicon.ico',
            filename: 'download.html',
            chunks: ['download'],
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
    ]
}