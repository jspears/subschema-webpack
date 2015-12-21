var defaults = require('lodash/object/defaults');
var devServer = require('./devServer');
var output = require('./output');
var stats = require('./stats');
var resolve = require('./resolve');
var plugins = require('./plugins');
var _module = require('./module');


function configure(path, conf, type) {
    var indexConf = {
        devTool: 'eval',
        autoprefixer: 'autoprefixer-loader?{browsers:[' +
        '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
        '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}',
        port: 8000,
        host: 'localhost',
        devServer: devServer(path, conf, type),
        output: output(path, conf, type),
        stats: stats(path, conf, type),
        module: _module(path, conf, type),
        resolve: resolve(path, conf, type),
        plugins: plugins(path, conf, type),
        postcss: [
            require('autoprefixer'),
            require('postcss-color-rebeccapurple')
        ]
    };


    return defaults(indexConf, conf);
}

module.exports = configure