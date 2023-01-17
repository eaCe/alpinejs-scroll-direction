const mix = require('laravel-mix');

mix.webpackConfig({
    optimization: {
        providedExports: false,
        sideEffects: false,
        usedExports: false
    }
});

mix.minify('scroll-direction.js', 'dist/scroll-direction.min.js');
mix.disableNotifications();
mix.sourceMaps(false, 'source-map');
