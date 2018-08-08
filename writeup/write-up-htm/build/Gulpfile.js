var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	webserver = require('gulp-webserver'),
	watch = require('gulp-watch');

gulp.task('pug', function() {
	return gulp.src(['../local/templates/**/*.pug', '!../local/templates/**/_*.pug'])
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('.'));
});

gulp.task('sass', function() {
	return gulp.src('../local/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: 'localhost',
      port: '9000',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch', function() {
	gulp.watch('../local/templates/**/*.pug', ['pug']);
	gulp.watch('../local/scss/**/*.scss', ['sass']);
});

gulp.task('build', ['pug', 'sass']);
gulp.task('default', ['build', 'webserver', 'watch']);
