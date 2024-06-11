const http = require('http');
const url = require('url');

// Get the port from the command-line arguments
const port = process.argv[2];

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL and query string
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    const isoTime = query.iso;

    // Function to handle /api/parsetime
    function handleParseTime() {
        const date = new Date(isoTime);
        const result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        return result;
    }

    // Function to handle /api/unixtime
    function handleUnixTime() {
        const date = new Date(isoTime);
        const result = {
            unixtime: date.getTime()
        };
        return result;
    }

    // Routing
    if (pathname === '/api/parsetime' && isoTime) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(handleParseTime()));
    } else if (pathname === '/api/unixtime' && isoTime) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(handleUnixTime()));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
