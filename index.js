var webpack = require('webpack');
var subschemaCli = require('subschema-cli');

var webpackConf = {
    schema: {
        type: {
            type: 'Select',
            options: ['hot', 'demo', 'karma', 'app', 'server'],
            help: 'The type of schema to create'
        },
        host: {
            type: 'Text',
            help: 'The host of the webpack server'
        },
        port: {
            type: 'Number',
            help: 'The port number of the webpack server to listen to'
        },
        webpack: {
            type: 'Object',
            subSchema: 'WebpackSchema'
        }
    }
}

function subschemaWebpack(conf, type) {

}

function handleArgs(args) {
    subschemaCli({}, args);
}

if (module.root === module) {

}