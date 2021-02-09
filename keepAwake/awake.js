import http from 'http';
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('What are you doing here? This page only exists to keep this bot awake.');
});

console.log('Server started on port 3000')

server.listen(3000);