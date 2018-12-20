const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

gulp.task('build', gulp.series('sass'));
gulp.task('watch', gulp.series('sass:watch'));