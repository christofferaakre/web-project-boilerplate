const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

switch (process.env.NODE_ENV) {
  case 'test':
    require('dotenv').config({ path: '.env.test', });
    break;
  case 'development':
    require('dotenv').config({ path: '.env.dev', });
    break;
  default:
    break;
}

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry : [ 'babel-polyfill', './src/index.js', ],
    output: {
      path    : path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader : 'babel-loader',
          test   : /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
            'sass-loader'
          ]
        },
      ],
    },
    devtool  : isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase       : path.join(__dirname, 'public'),
      publicPath        : '/dist/',
      historyApiFallback: true,
    },
  };
};
