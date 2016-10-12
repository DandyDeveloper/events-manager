var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'routes.js');

var config = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8888',
    mainPath],
  output: {
    //Server build path and build configuration file
    path: buildPath,
    filename: 'bundle.js',

    //Define publicPath for proxying
    publicPath: '/build/'
  },
  module: {

    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }
   ]},
  //HotModuleReplacementPlugin for hot replacing
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;