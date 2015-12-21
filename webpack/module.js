var defaults = require('lodash/objects/defaults');


function _module(path, conf, type) {
    var modConf = {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: [
                    /babel-core/
                ],
                loaders: ['babel-loader?stage=0']
            },
            {test: /\.(png|jpe?g|mpe?g|gif)$/, loader: 'url-loader?limit=100000'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"},
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
    switch (type) {
        case 'hot':
        {
            modConf.loaders.unshift({
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                //do this to prevent babel from translating everything.
                include: [
                    path('src'),
                    path('public')
                ],
                loaders: ['react-hot', 'babel-loader?stage=0&ignore=buffer']
            });
            modConf.loaders[0].exclude.push(path('src'), path('public'))
        }
    }
    return defaults(modConf, conf.module);
}

module.exports = conf;