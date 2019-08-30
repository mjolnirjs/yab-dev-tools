'use strict';
const path = require('path');

const rootPath = process.cwd();
const pkg = require(`${rootPath}/package.json`);

module.exports = {
  rootPath,
  srcPath: path.resolve('src'),
  distPath: path.resolve('dist'),
  publicPath: path.resolve('public'),
  libraryName: pkg.name,
};
