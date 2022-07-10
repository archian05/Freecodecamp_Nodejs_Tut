const file = require('fs')
console.log("started first task")
file.readFile('./content/childcontent/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data)
    console.log("finished first task")
}
)
console.log("started second task")
