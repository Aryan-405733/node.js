const http = require('http');
const fs = require('fs');

const htmlfile = fs.readFileSync('./public/index.html');

function handleRequests(req, res) {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write(htmlfile);
        res.end();
    } else if (url === '/about') {
        res.write('This is the about page.');
        res.end();
    } else {
        res.write('Route is not existent.');
        res.end();
    }
}

const server = http.createServer(handleRequests);

server.listen(8000)