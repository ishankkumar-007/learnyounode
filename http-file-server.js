const http = require('http');
const fs = require('fs');
// const path = require('path');

// Get the port and file path from the command-line arguments
const port = process.argv[2];
const filePath = process.argv[3];

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Create a read stream and pipe it to the response
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);

    // Handle errors while reading the file
    readStream.on('error', (err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        console.error('File read error:', err);
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
