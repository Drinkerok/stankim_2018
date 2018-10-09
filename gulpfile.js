'use strict';
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const named = require('vinyl-named');
const path = require('path');


function lazyRequireTask(taskName, path, options = {}) {
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);

    return task(callback);
  });
}



// TASKS

// PUG
lazyRequireTask('pug', './tasks/pug.js', {
  src: 'frontend/pug/*.pug',
  dest: 'public'
});

// Компиляция less файла из главного styles.less
lazyRequireTask('less', './tasks/less.js', {
  src: 'frontend/less/*.less',
  dest: 'public/css'
});

// Перенос всех файлов
lazyRequireTask('assets', './tasks/assets.js', {
  src: 'frontend/assets/**/*.*',
  dest: 'public'
});

// Перенос статичных картинок
lazyRequireTask('img:static', './tasks/assets.js', {
  src: 'frontend/img/**/*.*',
  dest: 'public/img/'
});

// Sprite SVG
lazyRequireTask('img:sprite-svg', './tasks/sprite_svg.js', {
  src: 'frontend/svg-sprite/*.svg',
  dest: 'public/svg',
});

// JS
lazyRequireTask('js', './tasks/js.js', {
  src: 'frontend/js/**/*.js',
  dest: 'public/js'
});
// lazyRequireTask('webpack', './tasks/webpack.js', {
//   src: 'frontend/js/*.js',
//   dest: 'public/js'
// });
lazyRequireTask('lint', './tasks/lint.js', {
  src: 'frontend/js/**/*.js'
});



gulp.task('webpack', function(callback) {
  let firstBuildReady = false;
  let isDevelopment = true;

  function done(err, stats) {
    firstBuildReady = true;

    if (err) { // hard error, see https://webpack.github.io/docs/node.js-api.html#error-handling
      return;  // emit('error', err) in webpack-stream
    }
  }

  let options = {
    output: {
      publicPath: '/js/',
      filename: '[name].js',
    },
    watch:   isDevelopment,
    devtool: false,
    module:  {
      loaders: [{
        test:    /\.js$/,
        include: path.join(__dirname, "frontend"),
      }]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  };

  return gulp.src('frontend/js/*.js')
      .pipe($.plumber({
        errorHandler: $.notify.onError(err => ({
          title:   'Webpack',
          message: err.message
        }))
      }))
      .pipe(named())
      .pipe(webpackStream(options, null, done))
      .pipe($.babel({
        presets: ['es2015', 'stage-0']
      }))
      // .pipe($.uglify({
      // }))
      .pipe(gulp.dest('public/js'))
      .on('data', function() {
        if (firstBuildReady) {
          callback();
        }
      });
});






// WORK tasks
lazyRequireTask('clean', './tasks/clean.js', {});

gulp.task('build', gulp.series(
  'clean',
  'img:sprite-svg',
  gulp.parallel('pug', 'less', 'assets', 'img:static', 'webpack'))
);

lazyRequireTask('server', './tasks/server.js', {
  src: 'public',
  watch: 'public/**/*.*'
});




// WATCH
gulp.task('watch', function() {
  gulp.watch('frontend/pug/**/*.pug', gulp.series('pug'));
  gulp.watch(['frontend/less/**/*.less', 'tmp/**/*.less'], gulp.series('less'));
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
  gulp.watch('frontend/img/**/*.*', gulp.series('img:static'));
  // gulp.watch('frontend/js/**/*.js', gulp.series('js'));
  gulp.watch('frontend/svg-sprite/*.svg', gulp.series('img:sprite-svg'));
})



// DEVELOPMENT
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'server')));