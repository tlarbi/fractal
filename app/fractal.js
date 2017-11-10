'use strict';

/*
 * Create a new Fractal instance and export it for use elsewhere if required
 */

const fractal = module.exports = require('@frctl/fractal').create();
const twigAdapter = require('@frctl/twig');
const twig = twigAdapter({
    handlePrefix: '@components/',
});

/*
 * General project configuration.
 */

fractal.set('project.title', 'ECD 2 Fractal');

/*
 * Configure components.
 */

fractal.components.set('path', `${__dirname}/components`);
fractal.components.set('default.preview', '@preview');
fractal.components.set('adelphe', '@adelphe');
fractal.components.set('ext', '.twig');
/*
 * Configure the Handlebars template engine used by components
 *
 * Components use Handlebars templates by default, so this step normally not required.
 * However in this example we are expicitly loading the handlebars adapter
 * to demonstrate how to add custom Handlebars helpers that you can then use
 * in your components.
 *
 * See https://github.com/frctl/handlebars for more information on the Handlebars
 * adapter and bundled helpers.
 */

const handlebarsAdapter = require('@frctl/handlebars');

const helpers = require('@frctl/handlebars-helpers'); // require the helpers

helpers.use(fractal); // initialise the helpers with the fractal instance




/*
 * Configure docs.
 */

fractal.docs.set('path', `${__dirname}/docs`);

/*
 * Configure the template engine used for documentation pages.
 *
 * In this example we are going to use Nunjucks as a templating engine for
 * our documentation pages, instead of Handlebars (the default). This example
 * also demonstrates how to customise the standard Nunjucks install with a bespoke filter.
 *
 * See https://github.com/frctl/nunjucks for more details on using Nunjucks with Fractal.
 */



/*
 * Configure the web interface.
 */

fractal.web.set('static.path', `${__dirname}/public`);
fractal.web.set('builder.dest', 'build');

/*
 * Customise the web interface theme.
 *
 * This step is not needed if you want to just use the default theme
 * out-of-the-box. This example demonstrates some simple theme customisation
 * but you can also create your own bespoke themes or undertake much more extensive
 * customisation if required.
 */

const theme = require('@frctl/mandelbrot')({
    // skin: 'maroon'
    nav: ['docs', 'components']
});

fractal.web.theme(theme);

