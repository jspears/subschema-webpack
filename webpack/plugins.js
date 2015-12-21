var defaults = require('lodash/object/deepDefaults');

function plugins(path, conf, type) {
    var plugins = [new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
        function () {
            this.plugin("done", function (stats) {
                stats = stats.toJson();
                console.error(JSON.stringify({
                    assetsByChunkName: stats.assetsByChunkName
                }));
            });
        }];

    switch (type) {
        case 'hot':
        {
            plugins.unshift(
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin());
            break;
        }
    }


    return defaults(plugins, conf.plugins);

}

module.exports = plugins;