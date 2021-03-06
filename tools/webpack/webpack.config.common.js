/** Common configuration for webpack bundles **/

const path = require('path');
const appRootPath = require('app-root-dir').get();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  outputPath: path.resolve(appRootPath),
  commonRules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {},
      },
    },
  ],
  commonPlugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  ],
};
