const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser').default;
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');

// Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js"
}

// HTML-task, kopierar filer
function htmlTask() {
    return src(files.htmlPath)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('pub'))
    .pipe(livereload());
}

// JS-task, konkatenera filer
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(dest('pub/js'))
    .pipe(livereload());
}

// CSS-task, konkatenera filer
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cleanCSS())
    .pipe(dest('pub/style'))
    .pipe(livereload());
}

// Watch
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath], parallel(htmlTask, jsTask, cssTask));
}

exports.default = series(
    parallel(htmlTask, jsTask, cssTask),
    watchTask
);