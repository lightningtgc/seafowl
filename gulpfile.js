'use strict';

var build = './build';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');

// For babel
require('babel/register')({
  only: /.+(?:(?:\.es6\.js))$/,
  extensions: ['.js', '.es6.js'],
  sourceMap: true
});


gulp.task("webpack", function() {
  return gulp.src("src/main.js")
  .pipe(webpack(require("./webpack.config.js")))
  .pipe(babel())
  .pipe(gulp.dest("build/"));
});

gulp.task("watch", function() {
  gulp.watch(["src/**/*.js"], ["webpack"]);
});

gulp.task('live', function(cb){
    var lr = livereload();
    var reloadPage = function(evt){
        lr.changed(evt.path); 
    };

    gulp.watch([build + '/**/*'], reloadPage);
});

gulp.task("default", ["webpack", "watch"]);


