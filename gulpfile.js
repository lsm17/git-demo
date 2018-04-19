var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');//合并
var uglify=require('gulp-uglify');//js压缩
var htmlmin=require('gulp-htmlmin');//html压缩
var browserSync=require('browser-sync');
//less编译，压缩，合并没必要
gulp.task('style',function(){
    gulp.src(['src/styles/*.less','!src/styles/_*.less'])
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
});
//js合并 压缩 混淆
gulp.task('script',function(){
    gulp.src('src/script/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script'))
});
//图片复制
gulp.task('image', function () {
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'))
});
//html压缩复制
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace:true,
            removeComments:true
        }))
        .pipe(gulp.dest('dist'))
});
gulp.task('serve', function () {

})
