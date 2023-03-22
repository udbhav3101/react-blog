const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const server = jsonServer.create();

const router = jsonServer.router('./db.json');

const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 8000;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);

server.use(router);
server.use(express.static(path.join(__dirname, 'build')));
server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(PORT, () => {
  console.log('Server is running');
});
