var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, '..', 'app', 'routes.js');

module.exports = function () {
  //Start Webpack
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  //Compiler logging at start
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  //Logging completion
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {
    //Define proxying 
    publicPath: '/build/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  //Assuming the server is working and everything is running - This should in theory start the server!
  bundler.listen(8080, 'localhost', function () {
    console.log('Bundling project, please wait...');
  });

};