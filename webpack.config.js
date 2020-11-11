const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
