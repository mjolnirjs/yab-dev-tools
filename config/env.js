'use strict';
const path = require('path');

const rootPath = process.cwd();
const pkg = require(`${rootPath}/package.json`);

module.exports = {
  rootPath,
  srcPath: path.resolve(rootPath, 'src'),
  distPath: path.resolve(rootPath, 'dist'),
  publicPath: path.resolve(rootPath, 'public'),
  libraryName: process.env.LIBRARY_NAME || pkg.name,
};
