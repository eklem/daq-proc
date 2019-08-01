const dop = require('./index.js')

let oldString = 'Some string with lots of words that are not interesting'

console.log(oldString)
let newArray = dop.wnn.extract(oldString)
console.log(newArray)
let stoppedArray = dop.sw.removeStopwords(newArray)
console.log(stoppedArray)
let ngramsArray = dop.ngi(stoppedArray, [1,2,3])
console.log(ngramsArray)
//let keywords = dop.ehp.findKeywords()
