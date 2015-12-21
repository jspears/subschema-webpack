var defaults = require('lodash/object/deepDefaults');

function resolve(path, conf, type) {
    var resolveConf = {
        extensions: ['', '.jsx', '.js'],
        alias: {
            'Subschema': path('node_modules/subschema/src'),
            'subschema-styles': path('node_modules/subschema/src'),
            'react': path('node_modules/react')
        }
    }

    return defaults(resolveConf, conf.resolve);
}

module.exports = resolve;