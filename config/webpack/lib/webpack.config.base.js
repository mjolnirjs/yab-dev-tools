'use strict';

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const env = require('../../env');

module.exports = {
  entry: env.srcPath,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new CaseSensitivePathsPlugin()],
};
