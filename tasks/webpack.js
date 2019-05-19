'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const named = require('vinyl-named');
const path = require('path');
// const gulplog = require('gulplog');


// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const isDevelopment = true;

module.exports = function(options) {
  let firstBuildReady = false;

  function done(err, stats) {
    firstBuildReady = true;

    if (err) {
      return;
    }

    // gulplog[stats.hasError() ? 'error' : 'info'](stats.toString({
    //   colors: true,
    // }));
  }



  let webpackOptions = {
    watch: isDevelopment,
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
    module: {
      loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, "frontend"),
        loader: 'babel?presets[]=es2015'
      }]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  }



  return function(callback) {
    return gulp.src(options.src)
      .pipe($.plumber({
        errorHandled: $.notify.onError(err => ({
          title: 'Webpack',
          message: err.message
        })) 
      }))
      .pipe(named())
      .pipe(webpackStream(webpackOptions, null, done))
      .pipe($.if(!isDevelopment, $.uglify()))
      .pipe(gulp.dest(options.dest))
      .on('data', function() {
        if (firstBuildReady) {
          callback();
        }
      });
  }
};