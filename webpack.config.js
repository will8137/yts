var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        flight: 'core/js/app.js'
    },
    output: {
        path: './public/',
        filename: "build/yts.js"
    },
    module: {
        loaders: [{
            test: /\.hbs$/, 
            loader: 'handlebars-loader', 
            query: {
                helperDirs: [
                    path.resolve('public/core/js/helpers')
                ]
            }
        }, {
            //tell webpack to use jsx-loader for all *.jsx files
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    resolveLoader: {                                                                                
        root: path.join(__dirname, 'node_modules')                                                  
    }, 
    resolve: {
        root: './public',
        alias: {
            _: 'core/js/libraries/underscore',
            jquery: 'core/js/libraries/jquery',
            jQueryUI: 'core/js/libraries/jquery-ui',
            underscore: 'core/js/libraries/underscore',
            backbone: 'core/js/libraries/backbone',
            backboneForms: 'core/js/libraries/backbone-forms',
            backboneFormsLists: 'core/js/libraries/backbone-forms-lists',
            evolve: 'core/js/evolve.js',
            helpers: 'core/js/helpers',
            router: 'core/js/router',
            sockets: 'core/js/sockets',
            scrollTo:'core/js/libraries/scrollTo',
            velocity:'core/js/libraries/velocity',
            spectrum:'core/js/libraries/spectrum',
            moment: 'core/js/libraries/moment',
            imageReady:'libraries/imageReady',
            interact:'libraries/interact',
            dateFormat: 'core/js/libraries/dateFormat',
            fileUpload: 'core/js/libraries/jquery.fileupload',
            fileUploadFrame: 'core/js/libraries/jquery.iframe-transport',
            modules: 'modules',
            plugins: 'plugins'
        },
        extensions: ['', '.js', '.jsx']
    },
    plugins: [ 
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                _: 'underscore',
                Backbone: 'backbone'
        }) 
    ]
};