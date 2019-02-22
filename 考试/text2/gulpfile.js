var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var pump = require('pump');
const imagemin = require('gulp-imagemin');
let cleanCSS = require('gulp-clean-css');

//gulp.task('default', function () {
//  // 将你的默认的任务代码放在这
//  console.log(11);
//});
////创建一个任务，任务名称 minicss
//gulp.task('minicss', function () {
//  gulp.src('css/*.css')
//      .pipe(cleanCSS({compatibility: 'ie8'}))
//      .pipe(gulp.dest('dist/css'))
//  // 将你的默认的任务代码放在这
//  console.log('压缩css');
//});
//gulp.task('minijs',function(){
//  gulp.src('js/*.js')
//  .pipe(babel({
//      presets: ['env']
//  }))
//      .pipe(uglify())
//      .pipe(gulp.dest('dist/js'))
//  });
//// 将你的默认的任务代码放在这

gulp.task('minify', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

//gulp.task('default', () =>
//  gulp.src('dist/app.js')
//      .pipe(babel({
//          presets: ['@babel/env']
//      }))
//      .pipe(gulp.dest('dist'))
//);

gulp.task('default', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});
//gulp.task('minihtml', function () {
//  // 将你的默认的任务代码放在这
//  //获取对应的文件
//  //‘app/*.html’  app下的所有HTML文件
//  //'app/**/*.html' app文件夹下包括子文件的所有html文件
//  gulp.src('*.html')
//      //下一步
//      .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyCSS: true }))
//      //压缩到一个文件夹
//      .pipe(gulp.dest('dist/'))  //吧编译后的文件输出到dist文件夹
//
//  console.log('压缩HTML');
//});
//gulp.task('all', ['minicss', 'minijs']);