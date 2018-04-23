const gulp          = require('gulp'),
      postcss       = require('gulp-postcss'),
      sass          = require('gulp-sass'),
      sourcemaps    = require('gulp-sourcemaps'),
      atImport      = require('postcss-import'),
      autoprefixer  = require('autoprefixer'),
      mqpacker      = require('css-mqpacker'),
      cssnano       = require('cssnano'),
      concat        = require('gulp-concat'),
      uglify        = require('gulp-uglify'),
      pump          = require('pump'),
      browserSync   = require('browser-sync');


gulp.task('css', () => {
    const processors = [
        atImport,
        autoprefixer({browsers: ['last 6 versions', 'ie 9', 'ie 10', 'ie 11']}),
        mqpacker,
        cssnano
    ];
    gulp.src('./src/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
  gulp.src('./src/js/global.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('img', () => {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('./dist/img/'))
});

gulp.task('watch', function() {
  gulp.watch('src/css/**/*.scss', ['css']);
  gulp.watch('src/js/global.js', ['js']);
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['css', 'js', 'img', 'watch', 'browser-sync']);