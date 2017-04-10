
var gulp = require('gulp');

var webserver = require('gulp-webserver');

var livereload = require('gulp-livereload');

gulp.task('webserver', function() {
	gulp.src( './src' ) // 服务器目录（./代表根目录）
	.pipe(webserver({ // 运行gulp-webserver
		livereload: true, // 启用LiveReload
		open: true // 服务器启动时自动打开网页
	}));
});
gulp.task('watchChange',function(){
	return gulp.src(['src/*.{html,php}','src/**/*.{css,js,jpg,png,gif.svg}'])
		  .pipe(gulp.dest('build/*'));	
});
// 监听任务
gulp.task('watch',function(){
	gulp.watch( 'src/*.html', ['watchChange']) // 监听根目录下所有.html文件
});

var uglify = require('gulp-uglify'), // js压缩
	concat = require('gulp-concat');

gulp.task('uglifyjs', function() {
  return gulp.src('src/js/*.js') // 指明源文件路径、并进行文件匹配
  	.pipe(concat('JZ.min.js')) //拼接成某个特定的函数
    .pipe(uglify()) // 使用uglify进行压缩，并保留部分注释
    .pipe(gulp.dest('build/js')); // 输出路径
});

gulp.task('move',function(){
	return gulp.src('src/*.{php,html,ico}')
		.pipe(gulp.dest('build/'));
	
	
})

var imagemin = require('gulp-imagemin'), // 图片压缩
  pngquant = require('imagemin-pngquant'); // 深度压缩

gulp.task('images', function(){
  return gulp.src('src/img/**/*.{png,jpg,gif,svg}') // 指明源文件路径、并进行文件匹配
    .pipe(imagemin({
      progressive: true, // 无损压缩JPG图片
      svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
      use: [pngquant()] // 使用pngquant插件进行深度压缩
    }))
    .pipe(gulp.dest('build/images')); // 输出路径
});

var clean = require('gulp-clean-css');

gulp.task('clean', function () {
     return gulp.src('src/css/*.css')
     		.pipe(clean())
          .pipe(gulp.dest('build/css')); // 输出路径
});

// 默认任务
gulp.task('default',['webserver','uglifyjs','clean','images','move','watch']);
