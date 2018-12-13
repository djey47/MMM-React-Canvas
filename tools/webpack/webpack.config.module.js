/** Configuration for client-side webpack bundle **/

const { outputPath, commonRules, commonPlugins } = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EditJsonFile = require('edit-json-file');
const appRootPath = require('app-root-dir').get();

const isDevMode = process.env.NODE_ENV !== 'production';
const packageFile = EditJsonFile(`${appRootPath}/package.json`);

module.exports = {
  entry: './src/client/module.js',
  output: {
    filename: `${packageFile.get('name')}.js`,
    path: outputPath,
  },
  module: {
    rules: commonRules.concat([{
      test: /\.(css|scss)$/,
      exclude: /(node_modules)/,
      use: [
        isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],      
    }]),
  },
  plugins: commonPlugins.concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isDevMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
    }),
  ]),
};
