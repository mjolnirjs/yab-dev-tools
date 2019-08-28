'use strict';
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = require('../../env');

module.exports = {
  context: env.rootPath,
  entry: {
    index: ['./src'],
  },
  output: {
    path: env.distPath,
    filename: '[name].[hash:8].js',
    publicPath: '/',
    chunkFilename: '[name].[hash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.json'],
    alias: {
      '@': env.srcPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime.${entrypoint.name}`,
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: 30,
        },
        asyncVendors: {
          name: 'async-vendors',
          chunks: 'async',
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
        },
        asyncCommon: {
          name: 'async-common',
          chunks: 'async',
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
        },
        default: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new WebpackBar(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin(
      [
        {
          from: env.publicPath,
          to: env.distPath,
        },
      ],
      { ignore: ['**/.*'] },
    ),
    new HtmlWebpackPlugin({
      template: path.resolve(env.publicPath, 'index.html'),
    }),
  ],
};
