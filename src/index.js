const http = require('http');
const { URL } = require('url');

const routes = require('./routes');

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`);

    const route = routes.find(route => (
        parsedUrl.pathname === route.pathname && request.method === route.method
    ));

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        route.handler(request, response);
    } else {
        response.writeHead(401, { 'Content-Type': 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

server.listen(3000, () => console.log('Iniciou servidor!'));