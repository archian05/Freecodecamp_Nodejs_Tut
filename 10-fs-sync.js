const fs = require('fs');

const first = fs.readFileSync('./content/subfolder/first.txt', 'utf-8')
const second =fs.readFileSync('./content/subfolder/second.txt', 'utf-8')
console.log(first + second);
fs.writeFileSync('./content/subfolder/third.txt', first + second,{flag: 'a'})