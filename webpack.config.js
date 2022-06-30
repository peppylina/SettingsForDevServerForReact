const path = require('path');

module.exports = {
    entry: './src/main/resources/templates/index.js',
    cache: true,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        static : [
            {
                directory :  "./src/main/resources/templates",
            }
        ],
        compress : true,
        port : 8081,
        allowedHosts : [
            'localhost:8080',
            'http://localhost:8080'
        ]
    },
    output: {
        path : path.resolve(__dirname, 'src/main/resources/static'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src', 'main', 'resources', 'templates'),
            path.join(__dirname, 'node_modules')
        ]
    }
};