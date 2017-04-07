var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/normalize.scss',
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('src/css/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('img', function() {
  return gulp.src(['src/img/**/*'])
    .pipe(gulp.dest('public/img'))
});

gulp.task('js', function() {
  return gulp.src([
      'src/js/**/*',
      "node_modules/jquery/dist/jquery.js",
      "node_modules/what-input/dist/what-input.js",
      "node_modules/foundation-sites/dist/js/foundation.js",
      ])
    .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['sass', 'img', 'js']);

gulp.task('watch', ['sass', 'img', 'js'], function() {
  gulp.watch(['src/**/*.scss'], ['sass']);
  gulp.watch(['src/**/*.img'], ['img']);
  gulp.watch(['src/**/*.js'], ['js']);
})
