const {wnn, sw, ngraminator, ehp} = require('../index.js')

let oldString = 'Some string with lots of words that are not interesting!?'
let someBodyText = 'We can have some string with lots of words. And some are interesting and some are not that are not interesting. It all depends. Mostly, you want only the interesting stuff, except when you want to show a document.'

console.log(oldString)
let newArray = wnn.extract(oldString, undefined, {toLowercase: true})
console.log(newArray)
let stoppedArray = sw.removeStopwords(newArray)
console.log(stoppedArray)
let ngramsArray = ngraminator(stoppedArray, [2,3,4])
console.log(ngramsArray)
let keywords = ehp.findKeywords(stoppedArray, wnn.extract(someBodyText, undefined, {toLowercase: true}), 3)
console.log(keywords)
