var gulp 		= require('gulp');
var connect		= require('gulp-connect');
var cssnano 	= require('gulp-cssnano');
var gulpif  	= require('gulp-if');
var less 		= require('gulp-less');
var ngAnnotate	= require('gulp-ng-annotate');
var strip		= require('gulp-strip-comments');
var useref		= require('gulp-useref');
var uglify		= require('gulp-uglify');
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

gulp.task('build', ['clean:dist', 'compile-less', 'build-app', 'build-copy', 'build-css']);

gulp.task('compile-less', function() {
	return gulp.src('src/assets/less/**/*.less')
		.pipe(less())
		.on('error', swallowError)
		.pipe(gulp.dest('src/assets/css'));	
});

gulp.task('build-app', function() {

	return gulp.src(['src/**/*.html'], {base: 'src'} )
		.pipe(useref())
		.pipe(gulpif('*.js', ngAnnotate()))
    	.pipe(gulpif('*.js', uglify({ 
    		mangle: false
		})))
    	.pipe(gulpif('*.html', strip({ safe: true })))
		.pipe(gulp.dest('dist'));
});

gulp.task('build-copy', function() {
	return gulp.src(['src/**/*.{html,svg,png,jpg,gif,json}'], {base: 'src'} )
		.pipe(gulp.dest('dist'));
});

gulp.task('build-css', function() {
	return gulp.src(['src/**/*.css'], {base: 'src'} )
		.pipe(cssnano())
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