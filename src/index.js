const http = require('http');

const server= http.createServer((request, response) => {
    response.writeHead(200);
    response.end('Olá mundo!');
});

server.listen(3000, () => console.log('Iniciou servidor!'));