var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {entrys} = require('./pages')
const check = require('./checkEntry')
check();

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        ...entrys,
        vendor: ['jquery']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: 'url-loader?limit=8192&name=pc_[hash:8].[name].[ext]'
            }, {
                test: /\.pug$/,
                loader: 'pug-loader'
            }, {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.styl', '.css'],
        alias: {
            reset$: path.resolve(__dirname, '../src/common/css/reset.css'),
            common$: path.resolve(__dirname, '../src/common/css/common.css'),
            public$: path.resolve(__dirname, '../src/common/css/public.styl'),
            public_en$: path.resolve(__dirname, '../src/common/css/public_en.styl'),
            img: path.resolve(__dirname, '../src/common/images'),
            cjs: path.resolve(__dirname, '../src/common/js'),
            layout: path.resolve(__dirname, '../src/common/template/layout'),
            pages: path.resolve(__dirname, '../src/pagess'),
        }
    },
    plugins: []
}