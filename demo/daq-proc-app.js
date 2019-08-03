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
  let headlineArray = dqp.wnn.extract(headlineString, dqp.wnn.en, {toLowercase: true})
  let bodyArray = dqp.wnn.extract(bodyString, dqp.wnn.en, {toLowercase: true})
  populate(JSON.stringify(headlineArray, 2, ' '), 'headlineArrDiv')
  populate(JSON.stringify(bodyArray, 2, ' '), 'bodyArrDiv')

  // Removing stopwords
  let headlineStopped = dqp.sw.removeStopwords(headlineArray)
  let bodyStopped = dqp.sw.removeStopwords(bodyArray)
  populate(JSON.stringify(headlineStopped, 2, ' '), 'headlineStoppedDiv')
  populate(JSON.stringify(bodyStopped, 2, ' '), 'bodyStoppedDiv')

  // Ngramming
  let headlineNgrams = dqp.ngraminator(headlineStopped, [2,3,4])
  let bodyNgrams = dqp.ngraminator(bodyStopped, [2,3,4])
  populate(JSON.stringify(headlineNgrams, 2, ' '), 'headlineNgramifiedDiv')
  populate(JSON.stringify(bodyNgrams, 2, ' '), 'bodyNgramifiedDiv')

  // Calculating keywords
  let keywords = dqp.ehp.findKeywords(headlineStopped, bodyStopped, 5)
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