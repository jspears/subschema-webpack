var defaults = require('lodash/object/deepDefaults');

function output(path, conf, type) {
    var outputConf = {
        filename: 'app.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    };
    switch (type) {
        case 'hot':
        {
            outputConf.conf = path(".hot");
            outputConf.publicPath = 'http://' + conf.host + ':' + conf.port + '/'
            break;
        }

    }
    return defaults(outputConf, conf.devServer)
}

module.exports = output;