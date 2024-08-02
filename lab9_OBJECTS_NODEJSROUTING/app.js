// Import the required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the HTTP server
const server = http.createServer((request, response) => {
    const url = request.url;

    // Set the response header
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Handle different routes
    if (url === "/home" || url === "/") {
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(response);
    } else if (url === "/about") {
        fs.createReadStream(path.join(__dirname, 'about.html')).pipe(response);
    } else {
        fs.createReadStream(path.join(__dirname, '404.html')).pipe(response);
    }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
