module.exports = {
    mode: 'development', // production process.env.NODE_ENV
    entry: {},
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [],
        alias: {},
    },
    plugins: [],
}