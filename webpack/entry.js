var defaults = require('lodash/object/deepDefaults');
var map = require('lodash/object/map');


function entry(path, conf, type) {
    var entryConf = {
        entry: path(conf.index)
    };


    switch (type) {
        case 'hot':
        {
            var entry = entryConf.entry = [

                'webpack-dev-server/client?http://' + conf.host + ':' + conf.port,
                'webpack/hot/only-dev-server',
            ];
            map(conf.entry, function (v, k) {
                entry.push(path(v))
            });
        }
        default:
        {
            return defaults(entryConf, conf.entry)

        }
    }
}

module.exports = entry;