const http = require('http');

const PORT = 8000;
const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to about us page');
    res.end();
    return;
  }
  if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to contact us page');
    res.end();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello world');
  res.end();
});

(() => {
  console.log(`Running on: localhost:${PORT}`);
  server.listen(PORT);
})();
