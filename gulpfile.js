const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat'); // Slå ihop filer
const terser = require('gulp-terser').default; // Komprimera JS
const cleanCSS = require('gulp-clean-css'); // Komprimera CSS
const htmlmin = require('gulp-htmlmin'); // Komprimera HTML
const livereload = require('gulp-livereload'); // Läser in ändringar vid sparning
const sourcemaps = require('gulp-sourcemaps'); // Kartlägger kod

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
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub'))
    .pipe(livereload());
}

// JS-task, konkatenera filer
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/js'))
    .pipe(livereload());
}

// CSS-task, konkatenera filer
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('../maps'))
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