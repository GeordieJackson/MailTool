const mix = require('laravel-mix');

// SET UP VARIABLES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var server_name = 'mailtool.test'
var path = ''
var server_port = 3000
var open_tab = true;
var browser = "/Applications/Firefox Developer Edition.app";
//var browser = "C:/Program Files/Firefox Developer Edition/firefox.exe";
//var browser = "chrome";
//var browser = 'firefox'
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync({
    proxy: server_name + path,
    port: server_port,
    browser: browser,
    open: open_tab,
});
