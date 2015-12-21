module.exports = {
    type: 'Object',
    subSchema: {
        schema: {
            entry: {
                type: 'Mixed',
                valueType: {
                    type: 'Path',
                    help: 'The path to the entry'
                },
                help: 'The entry points to your app'
            },
            devServer: {
                type: 'Object',
                schema: {
                    contentBase: {
                        type: 'Path',
                        "help": '<file/directory/url/port>: base path for the content.'
                    },
                    quite: {
                        "type": "Checkbox",
                        "help": "Don’t output anything to the console."
                    },
                    noInfo: {
                        "type": "Checkbox",
                        "help": "Suppress boring information."
                    },
                    colors: {
                        type: "Checkbox",
                        help: "Add some colors to the output"
                    },
                    inline: {
                        type: 'Checkbox',
                        help: 'Embed the webpack-dev-server runtime into the bundle.'
                    },
                    hot: {
                        type: 'Checkbox',
                        help: 'Adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice.'
                    },
                    lazy: {
                        type: 'Checkbox',
                        help: 'no watching, compiles on request (cannot be combined with --hot).'
                    },
                    https: {
                        type: 'Checkbox',
                        help: 'serves webpack-dev-server over HTTPS Protocol. Includes a self-signed certificate that is used when serving the requests.'
                    },
                    cert: {
                        type: 'Path',
                        help: 'Paths the certificate files.'
                    },
                    cacert: {
                        type: 'Path',
                        help: 'Paths the certificate files.'
                    },
                    key: {
                        type: 'Path',
                        help: 'Paths the certificate files.'
                    }

                }
            }
        }
    }
}