import Config from 'webpack-config';
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line max-len
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

import pathApp from './pathApp';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const publicUrl = process.env.PUBLIC_URL || 'http://localhost:3000';

export default new Config().merge({
  entry: 'src/index.ts',
  output: {
    path: path.resolve(process.cwd(), 'dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx', '.css', '.json'],
    modules: ['node_modules', 'src'].map(p => path.resolve(p)),
    alias: pathApp.alias,
    plugins: []
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${publicUrl}/`
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              }
            }
          },
          {
            loader: 'postcss-loader',
            options:
              {
                postcssOptions: {
                  path: path.join(process.cwd(), 'postcss.config.js')
                }
              }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:7].[ext]'
            },
          },
        ],
      }
    ]
  },

  devtool: isProd ? /* shouldUseSourceMap
    ? 'source-map'
    : */false :
    isDev && 'cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(publicUrl)
    }),
    new ModuleFederationPlugin({
      name: 'appVTBlkAuto',
      library: {type: 'var', name: 'appVTBlkAuto'},
      filename: 'remoteEntry__[contenthash:12].js',
      remotes: {
      },
      exposes: {
        './PersAccModule': 'src/exposes'
      },
      shared: [{react: {singleton: true}}, 'styled-components']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin({
      path: '/dist'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: `${publicUrl}/`,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main
            .filter((fileName) => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/assets', to: 'assets'}
      ]})
  ]
});
