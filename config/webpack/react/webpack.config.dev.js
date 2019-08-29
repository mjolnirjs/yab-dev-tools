'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const developmentConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    quiet: false,
    compress: true,
    stats: {
      children: false,
      colors: true,
      modules: false,
    },
    staticOptions: {
      cacheControl: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              quiet: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new TypedCssModulesPlugin({
      globPattern: 'src/**/*.less',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
  ],
});

module.exports = developmentConfig;
