module.exports = {
    entry : './index.js',
    output : {
        path : __dirname,
        filename : 'a.js'
    },
    module : {
        loaders : [
            { test : /\.css$/,loader : 'style!css!'}
        ]
    }
}