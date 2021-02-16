import Config from 'webpack-config';
import webpack from 'webpack';
import path from 'path';
import pathApp from './pathApp';

export default new Config().extend('conf/webpack.common.config.js').merge({
  output: {
    filename: 'js/bundle-[hash:8].js',
    publicPath: 'http://localhost:3000/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(pathApp.root),
    liveReload: true,
    port: 3000,
    hot: true,
    https: false,
    inline: true,
    historyApiFallback: true,
    proxy: [{
      context: ['/api/'],
      target: 'http://localhost:8080/', // 'http://declks01app01.corp.dev.vtb/',
      secure: false,
      // changeOrigin: true
    }],
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8081',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      // eslint-disable-next-line max-len
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
