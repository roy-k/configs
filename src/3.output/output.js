module.exports = {
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        // This does not produce a real file. It's just the virtual path that is served
        // by WebpackDevServer in development. This is the JS bundle containing code
        // from all our entry points, and the Webpack runtime.
        filename: 'static/js/[name].bundle.js',
        // There are also additional JS chunk files if you use code splitting.
        chunkFilename: 'static/js/[name].chunk.js',
        // This is the URL that app is served from. We use "/" in development.
        publicPath: '/',
        // Point sourcemap entries to original disk location (format as URL on Windows)
        devtoolModuleFilenameTemplate: info => path
            .resolve(info.absoluteResourcePath)
            .replace(/\\/g, '/')
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash:8].main.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        publicPath: '//...'
    }
}