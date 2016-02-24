'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyDeps', function() {

  gulp.src(config.sourceDir + 'vendor/**/*.js').pipe(gulp.dest(config.buildDir + 'js/'));

});