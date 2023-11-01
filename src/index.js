const http = require('http');
const url = require('url');

const routes = require('./routes');

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);

    const route = routes.find(route => (
        parsedUrl.pathname === route.pathname && request.method === route.method
    ));
    
    if (route) {
        request.query = parsedUrl.query; 
        route.handler(request, response);
    } else {
        response.writeHead(401, { 'Content-Type': 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

server.listen(3000, () => console.log('Iniciou servidor!'));