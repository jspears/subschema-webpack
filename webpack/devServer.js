var defaults = require('lodash/object/deepDefaults');
function devServer(path, conf, type) {
    var devServerConf = {
        contentBase: path("public"),
        info: true, //  --no-info option
        inline: true,
    };
    switch (type) {
        case 'hot':
        {
            devServerConf.hot = true;
            break;
        }

    }
    return defaults({
        contentBase: path("public" || conf.devServer.contentBase),
        info: true, //  --no-info option
        inline: true,
        port: conf.port
    }, conf.devServer)
}

module.exports = devServer;