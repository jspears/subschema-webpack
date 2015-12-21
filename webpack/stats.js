var defaults = require('lodash/object/deepDefaults');

function stats(path, conf, type) {
    return defaults({
        colors: true,
        reasons: true
    }, conf.stats);
}