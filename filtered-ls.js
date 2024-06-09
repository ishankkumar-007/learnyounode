'use strict'
const fs = require('fs')
function callback(err, list){
    if(err){
        return console.error(err)
    }
    for(let list_item of list){
        if(process.argv[3] == list_item.split('.')[1]){
            console.log(list_item)
        }
    }
}

fs.readdir(process.argv[2], callback)


// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })