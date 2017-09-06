/**
 * Created by stefan on 29.08.17.
 * gulp-clean is replaced by gulp-rimraf
 * http://learningwithjb.com/posts/cleaning-our-build-folder-with-gulp
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var clean = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
//var browserSync = require('browser-sync').create();

// //////////////////////////////////////////////
// Sass to css and copy to /dist
// /////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('src/styles.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});


// ////////////////////////////////////////////
// Copy Drupal files to /dist
// ///////////////////////////////////////////
gulp.task('copyDrupal', ['clean:drupalfiles'], function(){
    gulp.src(['src/**/*.yml', 'src/**/*.theme'])
        .pipe(gulp.dest('dist/'));
});


// ////////////////////////////////////////////
// Copy twig files to dist/templates
// ///////////////////////////////////////////
gulp.task('copyTwig', ['clean:twigfiles'], function(){
    gulp.src('src/templates/**/*.twig')
        .pipe(gulp.dest('dist/templates'));
});


// ////////////////////////////////////////////
// Minify JS and copy JS files to dist/js
// ///////////////////////////////////////////
gulp.task('minify', ['clean:jsfiles'], function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// /////////////////////////////////////////////
// Optimize Images and copy to dist/images
// gulp.task('imageMin', () => = nieuwe syntax
// /////////////////////////////////////////////
gulp.task('imageMin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('dist/images'))
});

// ///////////////////////////////////////////////////
// Clean up dist folder
// //////////////////////////////////////////////////
// Clean the related Drupal files
gulp.task('clean:drupalfiles', function () {
    return gulp.src(['dist/**/*.yml', 'dist/**/*.theme'], {read: false})
        .pipe(clean());
});

// Clean the JS folder
gulp.task('clean:jsfiles', function () {
    return gulp.src('dist/js', {read: false})
        .pipe(clean());
});


// Clean the templates folder
gulp.task('clean:twigfiles', function () {
    return gulp.src('dist/templates', {read: false})
        .pipe(clean());
});

// Clean the images folder
gulp.task('clean:imagefiles', function () {
    return gulp.src('dist/images', {read: false})
        .pipe(clean());
});

// Create dist folder
//gulp.task('dist', ['clean'], function () {
//    // the base option sets the relative root for the set of files,
//    // preserving the folder structure
//    gulp.src(filesToMove, {base: './'})
//        .pipe(gulp.dest('dist'));
//});

// Clean the whole dist folder
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

// ///////////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////////
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.{scss,sass}', ['sass']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch('src/templates/**/*.twig', ['copyTwig']);
    gulp.watch(['src/**/*.yml', 'src/**/*.theme'], ['copyDrupal']);
});

// ///////////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////////
gulp.task('default', ['sass', 'copyTwig', 'minify', 'copyDrupal', 'imageMin', 'watch']);