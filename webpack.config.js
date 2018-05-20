const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

switch (process.env.NODE_ENV) {
    case 'test':
        require('dotenv').config({ path: '.env.test' });
    case 'development':
        require('dotenv').config({ path: '.env.dev' });
    default:
        break;

module.exports = env => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry     : [ 'babel-polyfill', './src/index.js' ],
        output    : {
            path     : path.join(__dirname, 'public', 'dist'),
            filename : 'bundle.js'
        },
        module    : {
            rules : [
                {
                    loader  : 'babel-loader',
                    test    : /\.js$/,
                    exclude : /node_modules/
                },
                {
                    test : /\.s?css$/,
                    use  : CSSExtract.extract({
                        use : [
                            {
                                loader  : 'css-loader',
                                options : {
                                    sourceMap : true
                                }
                            },
                            {
                                loader  : 'sass-loader',
                                options : {
                                    sourceMap : true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins   : [
            CSSExtract
        ],
        devtool   : isProduction ? 'source-map' : 'inline-source-map',
        devServer : {
            contentBase        : path.join(__dirname, 'public'),
            publicPath         : '/dist/',
            historyApiFallback : true
        }
    };
};
