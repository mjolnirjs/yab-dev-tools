const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const env = require('../../env');

const productionConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: `${env.libraryName}.production.js`,
    path: path.resolve(env.distPath, 'umd'),
    library: env.libraryName,
    libraryTarget: 'umd',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});

module.exports = productionConfig;
