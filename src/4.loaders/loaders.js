const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.css|styl$/,
                use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"]
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it use publicPath in webpackOptions.output
                      publicPath: '../'
                    }
                  },
                  "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: 'url-loader?limit=8192&name=pc_[hash:8].[name].[ext]'
            }, 
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }, 
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}