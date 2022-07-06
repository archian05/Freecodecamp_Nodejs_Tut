const http = require('http');
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World!');
        res.end()
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('About page');
        res.end()
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
        res.end()   
    }  
}
).listen(3000);