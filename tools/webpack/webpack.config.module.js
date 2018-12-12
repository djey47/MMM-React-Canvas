/** Configuration for client-side webpack bundle **/

const { outputPath, commonRules, commonPlugins } = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/client/module.js',
  output: {
    filename: 'MMM-React-Canvas.js',
    path: outputPath,
  },
  module: {
    rules: commonRules.concat([{
      test: /\.(css|scss)$/,
      exclude: /(node_modules)/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],      
    }]),
  },
  plugins: commonPlugins.concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ]),
};
