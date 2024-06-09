console.log(process.argv)
argv_length = process.argv.length

let sum = 0;
for (let i=2; i<argv_length; i++){
    sum += parseInt(process.argv[i]);
}
console.log(sum)