// exposing the underlying library in a transparent way
const {wnn, sw, ngraminator, ehp} = dqp

// Listen to key up on headlinetext and initiate a daq-proc
document.getElementById("headlinetext").onkeyup = function() {
  daqProc()
}

// Listen to key up on bodytext and initiate daq-proc
document.getElementById("bodytext").onkeyup = function() {
  daqProc()
}

// document and query processing
const daqProc = function () {
  // Extract array of words and populate
  let headlineString = document.getElementById("headlinetext").value
  let bodyString = document.getElementById("bodytext").value
  let headlineArray = wnn.extract(headlineString, wnn.en, {toLowercase: true})
  let bodyArray = wnn.extract(bodyString, wnn.en, {toLowercase: true})
  populate(JSON.stringify(headlineArray, 2, ' '), 'headlineArrDiv')
  populate(JSON.stringify(bodyArray, 2, ' '), 'bodyArrDiv')

  // Removing stopwords
  let headlineStopped = sw.removeStopwords(headlineArray)
  let bodyStopped = sw.removeStopwords(bodyArray)
  populate(JSON.stringify(headlineStopped, 2, ' '), 'headlineStoppedDiv')
  populate(JSON.stringify(bodyStopped, 2, ' '), 'bodyStoppedDiv')

  // Ngramming
  let headlineNgrams = ngraminator(headlineStopped, [2,3,4])
  let bodyNgrams = ngraminator(bodyStopped, [2,3,4])
  populate(JSON.stringify(headlineNgrams, 2, ' '), 'headlineNgramifiedDiv')
  populate(JSON.stringify(bodyNgrams, 2, ' '), 'bodyNgramifiedDiv')

  // Calculating keywords
  let keywords = ehp.findKeywords(headlineStopped, bodyStopped, 5)
  populate(JSON.stringify(keywords, 2, ' '), 'keywordsFoundDiv')
}

// Populating HTML elements with results
const populate = function(result, elementToPopulate) {
  const node = document.createElement('pre')
  node.innerHTML = result
  emptyElement(elementToPopulate)
  document.getElementById(elementToPopulate).appendChild(node)
}

// Empty HTML elements
const emptyElement = function (elementToEmpty) {
  document.getElementById(elementToEmpty).innerHTML = ''
}