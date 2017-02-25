/**
 * 
 * @authors Phelps Chou
 * @date    2017-02-25 07:33:54
 * @version $Id$
 */

var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'), // js压缩
    concat = require('gulp-concat'), // 合并文件
    rename = require('gulp-rename'), // 重命名
    minhtml = require('gulp-htmlmin'), //html压缩，去掉空格注释
    jshint = require('gulp-jshint'), //js代码规范性检查
    imagemin = require('gulp-imagemin'); //图片压缩

// 压缩html
gulp.task('html', function() {
  gulp.src('src/*.html')
  .pipe(minhtml({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'));
});

// 合并、压缩、重命名css
gulp.task('css',function(){
	gulp.src('src/css/*.css')
	.pipe(concat('merge.css'))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css/'))
});

// 合并、压缩、重命名js
gulp.task('js',function(){
	return gulp.src('src/js/*.js')
	//.pipe(jshint())
	//.pipe(jshint.reporter('default'))// 对代码进行报错提示
	.pipe(concat('merge.js'))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
});

// 压缩img
gulp.task('img', function(argument){
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build',['html','css','js','img']);