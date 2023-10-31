const http = require('http');

const routes = require('./routes');

const server = http.createServer((request, response) => {
    console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`)

    const route = routes.find(route => (
        request.url === route.endpoint && request.method === route.method
    ));

    if (route) {
        console.log(route);
        route.handler(request, response);
    } else {
        response.writeHead(401, { 'Content-Type': 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

server.listen(3000, () => console.log('Iniciou servidor!'));