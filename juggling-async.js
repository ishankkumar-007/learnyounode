const http = require('http');

const urls = process.argv.slice(2);
let results = [];
let count = 0;

function printResults() {
    for (let i = 0; i < urls.length; i++) {
        console.log(results[i]);
    }
}

function fetchUrl(index) {
    http.get(urls[index], (response) => {
        let data = '';

        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            results[index] = data;
            count++;

            if (count === urls.length) {
                printResults();
            }
        });

        response.on('error', (err) => {
            console.error('Error:', err);
        });
    }).on('error', (err) => {
        console.error('Request Error:', err);
    });
}

for (let i = 0; i < urls.length; i++) {
    fetchUrl(i);
}
