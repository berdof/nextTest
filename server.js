const cookie = require('react-cookie');
const next = require('next');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);

// With express.js
const express = require('express');
app.prepare().then(() => {
  const server = express();

  server.use(function (req, res, _next) {
    cookie.plugToRequest(req, res);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    _next();
  });



  server.use(handler).listen(3000);
});