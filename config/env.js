'use strict';
const path = require('path');

const rootPath = process.cwd();

module.exports = {
  rootPath,
  srcPath: path.resolve(rootPath, 'src'),
  distPath: path.resolve(rootPath, 'dist'),
  publicPath: path.resolve(rootPath, 'public'),
};
