'use strict'
const http =  require('http');

function callback (response) {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        console.log(chunk);
    });
    response.on('error', (err) => {
        console.error('Error:', err);
    });
    response.on('end', () => {
        console.log('Response ended.');
    });
}

http.get(process.argv[2], callback);