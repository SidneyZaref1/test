const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const{method, url} = req;

    
    res.write('Hello from Node.js!\n');
    res.write(`Method: ${method}, URL: ${url}`);
    res.end();
   
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}: ${port}`);
});
