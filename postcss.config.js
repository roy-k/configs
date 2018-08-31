module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        // https://github.com/browserslist/browserslist#best-practices
        // 'autoprefixer': {browsers: 'last 5 version'}
        // 'autoprefixer': {browsers: [
        //     '>1%',
        //     'last 5 versions',
        //     'Firefox ESR',
        //     'not ie < 9',
        // ]},
        'postcss-cssnext': {
            browserslist: [
                '>1%',
                'last 5 versions',
                'Firefox ESR',
                'not ie < 9',
            ]
        }
    }
}