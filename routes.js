// routes.js
const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('user', '/:id');
routes.add('albums', '/:id/albums/:album');
routes.add('songs', '/:id/songs');
//routes.add('about', '/about-us/:foo(bar|baz)', 'index')