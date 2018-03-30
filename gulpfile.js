var gulp = require('gulp');
var browserSync = require('browser-sync');

var site_base = 'site/',
    html_files = '**/*.html',
    js_files = site_base+'js/*.js',
    css_files = site_base+'css/*.css';


gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: site_base
        }
    });
});

gulp.task('refresh', function() {
    browserSync.reload();
});

gulp.task('watch', function () {
    gulp.watch([html_files, js_files, css_files], ['refresh']);
});

gulp.task('default', ['watch', 'browser-sync']);