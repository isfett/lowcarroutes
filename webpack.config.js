var Encore = require('@symfony/webpack-encore');
var Webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var WebpackShellPlugin = require('webpack-shell-plugin');

var isProd = Encore.isProduction();

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .autoProvidejQuery()
    .autoProvideVariables({
        "window.jQuery": "jquery",
        "window.Bloodhound": require.resolve('bloodhound-js'),
        "jQuery.tagsinput": "bootstrap-tagsinput"
    })
    .enableSassLoader()
    .enableVersioning(false)
    .createSharedEntry('js/common', ['jquery'])
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/login', './assets/js/login.js')
    .addEntry('js/admin', './assets/js/admin.js')
    .addEntry('js/search', './assets/js/search.js')
    .addEntry('js/propeller', './assets/js/propeller.js')
    .addStyleEntry('css/app', ['./assets/scss/app.scss','./assets/css/propeller.css'])
    .addStyleEntry('css/admin', ['./assets/scss/admin.scss'])
    .addPlugin(new WebpackNotifierPlugin({'title':'LowCarRoutes Webpack Build'}))
    .addPlugin(new UglifyJSPlugin({
        'comments': isProd===false,
        'compress': {
            'warnings': false,
            'drop_console': isProd===true,
        }
    }))
;

var config = Encore.getWebpackConfig();
config.watchOptions = {poll: true, ignored: ['./node/modules/','./web/'], aggregateTimeout: 3000};

module.exports = config;
