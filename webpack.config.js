    var path = require('path');
    var webpack = require('webpack');
    module.exports = {
        entry: './src/index.es6',
        output: {
            path: __dirname + '/dist',
            publicPath: '/dist',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname + '/src', 'es6'),
                  loader: 'babel-loader' },
                {
                  test: /\.scss$/,
                  use: [{
                      loader: "style-loader" // creates style nodes from JS strings
                  }, {
                      loader: "css-loader" // translates CSS into CommonJS
                  }, {
                      loader: "sass-loader" // compiles Sass to CSS
                  }]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            hot: true,
            inline: true,
            open:true,
            stats: 'minimal',
            port: 8000
        }
    };