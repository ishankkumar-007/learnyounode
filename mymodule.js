const fs = require('fs');
const path = require('path');

function module_fn(dir, ext, callback){
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }
        const filteredFiles = files.filter(file => path.extname(file) === '.' + ext);
        callback(null, filteredFiles);
    });
}

module.exports = module_fn;


// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }