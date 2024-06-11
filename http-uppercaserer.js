const http = require('http');

// Get the port from the command-line arguments
const port = process.argv[2];

// Create the HTTP server
const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are allowed');
        return;
    }

    let body = '';

    // Read the incoming data
    req.on('data', chunk => {
        body += chunk.toString();
    });

    // When the data has been completely received
    req.on('end', () => {
        // Convert the body to uppercase
        const uppercasedBody = body.toUpperCase();

        // Send the response back to the client
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(uppercasedBody);
    });

    // Handle any errors during the request
    req.on('error', (err) => {
        console.error('Request error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))