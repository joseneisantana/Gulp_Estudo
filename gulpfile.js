const gulp =require('gulp');
const  sass =require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/style/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/style'));
}

exports.sass = compilaSass;