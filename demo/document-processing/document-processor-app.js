// exposing the underlying libraries in a transparent way
const { wnn, sw, ngraminator, ehp } = dqp

// Listen to key up on headlinetext and initiate a daq-proc
document.getElementById('languageSelected').onchange = function () {
  daqProc()
}

// Listen to key up on headlinetext and initiate a daq-proc
document.getElementById('headlinetext').onkeyup = function () {
  daqProc()
}

// Listen to key up on bodytext and initiate daq-proc
document.getElementById('bodytext').onkeyup = function () {
  daqProc()
}
// declaring some variables
let emojiString
let headlineStopped
let bodyStopped
let emojiArray

// document and query processing
const daqProc = function () {
  // Extract array of words and populate
  const headlineString = document.getElementById('headlinetext').value
  const bodyString = document.getElementById('bodytext').value
  if (headlineString.length > 0 || bodyString.length > 0) {
    emojiString = headlineString.concat(' ', bodyString)
  }
  const headlineArray = wnn.extract(headlineString, { regex: wnn.wordsNumbers, toLowercase: true })
  const bodyArray = wnn.extract(bodyString, { regex: wnn.wordsNumbers, toLowercase: true })
  emojiArray = wnn.extract(emojiString, { regex: wnn.emojis })

  populate(JSON.stringify(headlineArray, 2, ' '), 'headlineArrDiv')
  populate(JSON.stringify(bodyArray, 2, ' '), 'bodyArrDiv')

  // Prep for defining arrays of language to remove stopwords from.
  const languages = { af: sw.af, ar: sw.ar, bg: sw.bg, bn: sw.bn, br: sw.br, ca: sw.ca, cs: sw.cs, da: sw.da, de: sw.de, el: sw.el, en: sw.en, eo: sw.eo, es: sw.es, et: sw.et, eu: sw.eu, fa: sw.fa, fi: sw.fi, fr: sw.fr, ga: sw.ga, gl: sw.gl, ha: sw.ha, he: sw.he, hi: sw.hi, hr: sw.hr, hu: sw.hu, hy: sw.hy, id: sw.id, it: sw.it, ja: sw.ja, ko: sw.ko, la: sw.la, lgg: sw.lgg, lggo: sw.lggo, lv: sw.lv, mr: sw.mr, nl: sw.nl, no: sw.no, pl: sw.pl, pt: sw.pt, ptbr: sw.ptbr, pa: sw.pa, ro: sw.ro, ru: sw.ru, sk: sw.sk, sl: sw.sl, so: sw.so, st: sw.st, sv: sw.sv, sw: sw.sw, th: sw.th, tr: sw.tr, vi: sw.vi, yo: sw.yo, zh: sw.zh, zu: sw.zu }
  const code = document.getElementById('languageSelected').value
  console.log(code)

  // Removing stopwords
  if (headlineArray !== null) {
    headlineStopped = sw.removeStopwords(headlineArray, languages[code])
    populate(JSON.stringify(headlineStopped, 2, ' '), 'headlineStoppedDiv')
  }

  if (bodyArray !== null) {
    bodyStopped = sw.removeStopwords(bodyArray, languages[code])
    populate(JSON.stringify(bodyStopped, 2, ' '), 'bodyStoppedDiv')
  }

  // Ngramming
  if (headlineStopped !== null || headlineStopped.length > 0) {
    const headlineNgrams = ngraminator(headlineStopped, [1, 2, 3, 4])
    populate(JSON.stringify(headlineNgrams, 2, ' '), 'headlineNgramifiedDiv')
  }

  if (bodyStopped !== null || bodyStopped.length > 0) {
    const bodyNgrams = ngraminator(bodyStopped, [1, 2, 3, 4])
    populate(JSON.stringify(bodyNgrams, 2, ' '), 'bodyNgramifiedDiv')
  }

  // Calculating keywords
  if (headlineStopped.length > 0 || bodyStopped.length > 0) {
    const keywords = ehp.findKeywords(headlineStopped, bodyStopped, 5)
    populate(JSON.stringify(keywords, 2, ' '), 'keywordsCalculatedDiv')
  }

  // Extracting keywords
  if (headlineString.length > 0 || bodyString.length > 0) {
    let stringOfKeywords
    if (headlineString.length > 0) {
      stringOfKeywords = headlineString + ' '
    }
    if (bodyString.length > 0) {
      stringOfKeywords += bodyString
    }
    const keywords = wnn.extract(stringOfKeywords, { regex: wnn.tags, toLowercase: true })
    populate(JSON.stringify(keywords, 2, ' '), 'keywordsExtractedDiv')
  }

  // Extracting usernames
  if (headlineString.length > 0 || bodyString.length > 0) {
    let stringOfUsernames
    if (headlineString.length > 0) {
      stringOfUsernames = headlineString + ' '
    }
    if (bodyString.length > 0) {
      stringOfUsernames += bodyString
    }
    const keywords = wnn.extract(stringOfUsernames, { regex: wnn.usernames, toLowercase: true })
    populate(JSON.stringify(keywords, 2, ' '), 'usernamesExtractedDiv')
  }

  // Extracting email
  if (headlineString.length > 0 || bodyString.length > 0) {
    let stringOfEmailAddresses
    if (headlineString.length > 0) {
      stringOfEmailAddresses = headlineString + ' '
    }
    if (bodyString.length > 0) {
      stringOfEmailAddresses += bodyString
    }
    const keywords = wnn.extract(stringOfEmailAddresses, { regex: wnn.email, toLowercase: true })
    populate(JSON.stringify(keywords, 2, ' '), 'emailExtractedDiv')
  }

  // Emoji population
  if (emojiArray !== null && emojiArray.length > 0) {
    emojiArray = emojiArray.join('')
    emojiArray = [...new Set(emojiArray)]
    populate(JSON.stringify(emojiArray, 2, ' '), 'emojisExtractedDiv')
  }
}

// Populating HTML elements with results
const populate = function (result, elementToPopulate) {
  const node = document.createElement('pre')
  node.innerHTML = result
  emptyElement(elementToPopulate)
  document.getElementById(elementToPopulate).appendChild(node)
}

// Empty HTML elements
const emptyElement = function (elementToEmpty) {
  document.getElementById(elementToEmpty).innerHTML = ''
}
