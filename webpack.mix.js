const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// MY STYLES
mix.styles([
    'resources/css/vendor.min.css',
], 'public/css/vendor.css');///VENDOR
mix.styles([
    'resources/css/theme.min.css',
], 'public/css/theme.css');///THEME
mix.styles([
    'resources/css/docs.css',
], 'public/css/docs.css');///DOCS
/// PLUGINS
mix.styles([
    'resources/libs/sweetalert2/sweetalert2.min.css',
], 'public/css/sweetalert2.css');///SWEETALERT2
mix.styles([
    'resources/libs/toastr/toastr.min.css',
], 'public/css/toastr.css');///TOASTR

// MY JS
mix.scripts([
    'resources/js/vendor.min.js',
], 'public/js/vendor.js');///VENDOR
mix.scripts([
    'resources/js/theme.min.js',
], 'public/js/theme.js');///THEME
mix.scripts([
    'resources/js/demo.js',
], 'public/js/demo.js');///DEMO
//PLUGINS
mix.scripts([
    'resources/vendor/hs-navbar-vertical-aside/hs-navbar-vertical-aside-mini-cache.js',
], 'public/js/hs-navbar-vertical-aside-mini-cache.js');///HS NAVBAR ASIDE & VERTICAL
mix.scripts([
    'resources/libs/sweetalert2/sweetalert2.min.js',
], 'public/js/sweetalert2.js');///SWEETALERT2
mix.scripts([
    'resources/libs/toastr/toastr.min.js',
], 'public/js/toastr.js');///TOASTR
mix.scripts([
    'resources/libs/moment/moment.js',
], 'public/js/moment.js');///MOMENT


mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css');
