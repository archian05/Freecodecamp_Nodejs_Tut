const path = require('path');
const filepath = path.join('/content', 'subfolder', 'test.txt');

console.log(filepath)
const base = path.basename(filepath)
console.log(base)
const abspath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(abspath)
console.log(__dirname)