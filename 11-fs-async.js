const fs = require('fs');

// const first = fs.readFileSync('./content/subfolder/first.txt', 'utf-8')
// const second =fs.readFileSync('./content/subfolder/second.txt', 'utf-8')
// console.log(first + second);
// fs.writeFileSync('./content/subfolder/third.txt', first + second,{flag: 'a'})

var first=null
fs.readFile('./content/subfolder/first.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
     first =data
}
)
var second= null
fs.readFile('./content/subfolder/second.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
    second=data
}
)
setInterval(() => {console.log(first + second)},1000)
