// exposing the underlying libraries in a transparent way
const {wnn, sw, ngraminator, ehp} = dqp

// Listen to key up on headlinetext and initiate a daq-proc
document.getElementById("languageSelected").onchange = function() {
  daqProc()
}

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
  let headlineArray = wnn.extract(headlineString, {regex:wnn.wordsAndNumbers, toLowercase: true})
  let bodyArray = wnn.extract(bodyString, {regex:wnn.wordsAndNumbers, toLowercase: true})
  populate(JSON.stringify(headlineArray, 2, ' '), 'headlineArrDiv')
  populate(JSON.stringify(bodyArray, 2, ' '), 'bodyArrDiv')

  // Prep for defining arrays of language to remove stopwords from.
  const languages = { af: sw.af, bn: sw.bn, br: sw.br, zh: sw.zh, da: sw.da, nl: sw.nl, en: sw.en, fa: sw.fa, fi: sw.fi, fr: sw.fr, de: sw.de, ha: sw.ha, he: sw.he, hi: sw.hi, id: sw.id, it: sw.it, ja: sw.ja, lgg: sw.lgg, lggo: sw.lggo, ar: sw.ar, no: sw.no, pl: sw.pl, pt: sw.pt, pa: sw.pa, ru: sw.ru, so: sw.so, st: sw.st, es: sw.es, sw: sw.sw, sv: sw.sv, vi: sw.vi, yo: sw.yo, zu: sw.zu }
  let code = document.getElementById("languageSelected").value || en
  console.log(code)
  // Removing stopwords
  let headlineStopped = sw.removeStopwords(headlineArray, languages[code])
  populate(JSON.stringify(headlineStopped, 2, ' '), 'headlineStoppedDiv')
  let bodyStopped = sw.removeStopwords(bodyArray, languages[code])
  populate(JSON.stringify(bodyStopped, 2, ' '), 'bodyStoppedDiv')

  // Ngramming
  let headlineNgrams = ngraminator(headlineStopped, [2,3,4])
  populate(JSON.stringify(headlineNgrams, 2, ' '), 'headlineNgramifiedDiv')
  let bodyNgrams = ngraminator(bodyStopped, [2,3,4])
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