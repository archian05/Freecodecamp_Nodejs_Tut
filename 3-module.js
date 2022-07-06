//Modules
//every file is module
const names =require('./4-name')
const sayHi =require('./5-utils')
const data = require('./6-alternative-flavor')
sayHi(names.john)
sayHi(data.multiperson.secondperson)

require('./7-mindgrenade')
