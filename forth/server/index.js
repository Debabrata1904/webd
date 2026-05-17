// const https = require('https');

import https from 'https';  // import a module for making HTTPS requests
import fs from 'fs';  // import a module for file system operations


// http module is used to create an HTTP server
const options = {
  key: fs.readFileSync('key.pem'),  // read the private key from a file
  cert: fs.readFileSync('cert.pem')  // read the certificate from a file
};
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
});