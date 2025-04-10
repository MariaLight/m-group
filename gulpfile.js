const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const picture = require('gulp-webp-html-nosvg')
const webp = require('gulp-webp')
const htmlImport = require('gulp-html-import');

const browserSync = require('browser-sync').create()

// import image from 'gulp-image';
// import webp from 'gulp-webp';


const styles = () => {
    return src(['src/assets/css/**/*.css', 'node_modules/swiper/swiper-bundle.min.css'])
        .pipe(sourcemaps.init())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/assets/css'))
        .pipe(browserSync.stream())
}
const htmlImportHTML = () => {
    return src('src/*.html')
        .pipe(htmlImport('src/components/'))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())

}
const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(picture())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}
const svgSprites = () => {
    return src('src/assets/img/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                symbol: true,
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/assets/img'))
}
const scripts = () => {
    return src(['src/assets/js/components/**/*.js', 'src/assets/js/main.js', 'node_modules/swiper/swiper-bundle.js'])
        .pipe(sourcemaps.init())

        .pipe(babel({
            presets: ['babel-preset-env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify({
            toplevel: true
        }).on('error', notify.onError))
        .pipe(sourcemaps.write())

        .pipe(dest('dist/assets/js'))
        .pipe(browserSync.stream())
}

const resources = () => {
    return src('src/assets/resources/**')
        .pipe(dest('dist/assets/resources'))
        .pipe(browserSync.stream())

}

const clean = () => {
    return del(['dist'])
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/assets/img/**/*.jpg',
        'src/assets/img/**/*.png',
        'src/assets/img/**/*.svg',
        'src/assets/img/**/*.jpeg'
    ])
        .pipe(image())
        .pipe(dest('dist/assets/img'))
        .pipe(webp())
        .pipe(dest('dist/assets/img'))
        .pipe(browserSync.stream())
}

const prod = () => {
    return src('dist/**')
        .pipe(dest('production'))
        .pipe(browserSync.stream())
}

watch('src/**/*.html', htmlMinify)
watch('src/assets/css/**/*.css', styles)
watch('src/assets/js/**/*.js', scripts)
watch('src/assets/resources/**', resources)
watch('src/assets/img/**/*.png', images)
watch('src/assets/img/**/*.jpg', images)
watch('src/assets/img/**/*.svg', images)
watch('src/assets/img/svg/**/*.svg', svgSprites)

exports.styles = styles
exports.scripts = scripts
exports.clean = clean
exports.images = images
exports.resources = resources
exports.htmlMinify = htmlMinify
exports.svgSprites = svgSprites
exports.default = series(clean, svgSprites, htmlImportHTML, htmlMinify, styles, images, scripts, resources, watchFiles)
// exports.prod = series(cleanProd, prod)