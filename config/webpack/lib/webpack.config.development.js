const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
const env = require('../../env');

const developmentConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    filename: `${env.libraryName}.development.js`,
    path: path.resolve(env.distPath, 'umd'),
    library: env.libraryName,
    libraryTarget: 'umd',
  },
});

module.exports = developmentConfig;
