const gulp =require('gulp');
const  sass =require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'));
}

exports.sass = compilaSass;
exports.watch =function(){
    gulp.watch(' source/style/*.scss' , {ignoreItial: false}, gulp.series(compilaSass));
}