
const a =require('lodash')

const items = [1,[ 2, [3]]]
const newitems = a.flattenDeep(items)
console.log(newitems)
