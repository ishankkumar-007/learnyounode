const fs = require('fs');
let file;
if (process.argv.length >= 2){
    file = process.argv[2];
}
else{
    console.log("No file argument was passed");
    return
}

let filecontents = fs.readFileSync(file);
filecontents = filecontents.toString();
const filelines = filecontents.split('\n');
console.log(filelines.length - 1);

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1