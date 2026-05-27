// const http = require('http');

import http from 'http';  // import a module for making HTTPS requests

// http module is used to create an HTTP server

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });  // set the response header
  res.end('Hello, World!');
})
.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});