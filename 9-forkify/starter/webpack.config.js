const path = require('path'); //absolute path so have a node package to have access to it

module.exports = {
    entry: './src/js/index',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode: 'development'
};
//for webpack there are four core concepts: entry point, output, loaders, plugins
//output tells where to save the bundle file