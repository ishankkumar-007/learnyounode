const mymodule = require('./mymodule.js')
// The '.js' is optional here and you will often see it omitted.

// You now have the module.exports object in your module assigned to the
// mymodule variable. Since you are exporting a single function, mymodule is
// a function you can call!

const dir = process.argv[2]
const ext = process.argv[3]

mymodule(dir, ext, (err, files) => {
    if (err) {
        return console.error('There was an error', err);
    }
    files.forEach(file => console.log(file));
});


// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//     return console.error('There was an error:', err)
//     }

//     list.forEach(function (file) {
//     console.log(file)
//     })
// })