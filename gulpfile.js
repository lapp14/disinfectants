var gulp 		= require('gulp');
var connect		= require('gulp-connect');
var cssnano 	= require('gulp-cssnano');
var gulpif  	= require('gulp-if');
var inject 		= require('gulp-inject-file');
var less 		= require('gulp-less');
var ngAnnotate	= require('gulp-ng-annotate');
var strip		= require('gulp-strip-comments');
var useref		= require('gulp-useref');
var del 		= require('del');


gulp.task('connect', function() {
	connect.server({
		base: './src/',
		root: './src/',
		port: 8000,
		keepalive: true
	});
});

gulp.task('watch', function() {
	gulp.watch(['src/assets/less/**/*.less', 'src/**/*.html'], ['build']);
});

gulp.task('build', ['clean:dist', 'compile-less', 'build-app', 'build-copy']);

gulp.task('compile-less', function() {
	return gulp.src('src/assets/less/**/*.less')
		.pipe(less())
		.on('error', swallowError)
		.pipe(gulp.dest('src/assets/css'));	
});

gulp.task('build-app', function() {

	return gulp.src('src/index.html')
		.pipe(inject({
			pattern: '<!--\\s*inject:<filename>-->'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build-copy', function() {
	return gulp.src(['src/**/*.{svg,png,jpg,gif,json}'], {base: 'src'} )
		.pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
	return del.sync('dist');
});

gulp.task('default', ['watch']);

function swallowError(error) {
	console.log(error.toString());
	this.emit('end');
}