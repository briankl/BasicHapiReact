'use strict';

const Hapi = require('hapi');

// add connection
const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('./public/index.html');
  }
});

server.route({
  method: 'GET',
  path: '/js/bundle.js',
  handler: function(request, h) {
    return h.file('./public/js/bundle.js');
  }
});

// init server
const init = async () => {
  await server.register(require('inert'));

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
