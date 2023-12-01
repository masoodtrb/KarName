const express = require('express');
const next = require('next');
const jsonServer = require('json-server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Set up json-server
  const jsonServerRouter = jsonServer.router('db.json'); // Specify your JSON file
  const middlewares = jsonServer.defaults();

  server.use('/api', middlewares, jsonServerRouter); // Mount json-server on '/api'

  // Next.js pages
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});


