const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ['./src/app.scss','./src/app.js','./src/index.html'],
        vendor: ["jquery", "lodash"],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'],
                    plugins: ['transform-decorators-legacy'],
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[sha512:hash:base64:6]-[name].[ext]'
                }
            },
            {
                test: /\.(html)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ], // rules
        

    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
    
    
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            test: 'vendor',
            enforce: true
          },
        }
      }
    }
    
    
};


