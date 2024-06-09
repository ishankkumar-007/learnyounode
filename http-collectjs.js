// Appraoch - 1
// --------------------------------------------------------------
const http = require('http')
const url = process.argv[2];

http.get(url, (response) => {
    let data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data.length);
        console.log(data);
    });

    response.on('error', (err) => {
        console.error('Error:', err);
    });
}).on('error', (err) => {
    console.error('Request Error:', err);
});


// Appraoch - 2
// --------------------------------------------------------------
// const http = require('http');
// const bl = require('bl');

// const url = process.argv[2];

// http.get(url, (response) => {
//     response.pipe(bl((err, data) => {
//         if (err) {
//             return console.error('Error:', err);
//         }
//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//     }));

//     response.on('error', (err) => {
//         console.error('Error:', err);
//     });
// }).on('error', (err) => {
//     console.error('Request Error:', err);
// });
