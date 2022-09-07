// exposing the underlying libraries in a transparent way
const {
  load,
  removeStopwords, _123, afr, ara, hye, eus, ben, bre, bul, cat, zho, hrv, ces, dan, nld, eng, epo, est, fin, fra, glg, deu, ell, guj, hau, heb, hin, hun, ind, gle, ita, jpn, kor, kur, lat, lav, lit, lgg, lggNd, msa, mar, mya, nob, fas, pol, por, porBr, panGu, ron, rus, slk, slv, som, sot, spa, swa, swe, tha, tgl, tur, urd, ukr, vie, yor, zul,
  extract, words, numbers, emojis, tags, usernames, email,
  ngraminator,
  findKeywords,
  highlight,
  levenMatch
} = dqp

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
  const headlineArray = extract(headlineString, { regex: [words, numbers], toLowercase: true })
  const bodyArray = extract(bodyString, { regex: [words, numbers], toLowercase: true })
  emojiArray = extract(emojiString, { regex: [emojis] })

  populate(JSON.stringify(headlineArray, 2, ' '), 'headlineArrDiv')
  populate(JSON.stringify(bodyArray, 2, ' '), 'bodyArrDiv')

  // Prep for defining arrays of language to remove stopwords from.
  const languages = { _123: _123, afr: afr, ara: ara, hye: hye, eus: eus, ben: ben, bre: bre, bul: bul, cat: cat, zho: zho, hrv: hrv, ces: ces, dan: dan, nld: nld, eng: eng, epo: epo, est: est, fin: fin, fra: fra, glg: glg, deu: deu, ell: ell, guj: guj, hau: hau, heb: heb, hin: hin, hun: hun, ind: ind, gle: gle, ita: ita, jpn: jpn, kor: kor, kur: kur, lat: lat, lav: lav, lit: lit, lgg: lgg, lggNd: lggNd, msa: msa, mar: mar, mya: mya, nob: nob, fas: fas, pol: pol, por: por, porBr: porBr, panGu: panGu, ron: ron, rus: rus, slk: slk, slv: slv, som: som, sot: sot, spa: spa, swa: swa, swe: swe, tha: tha, tgl: tgl, tur: tur, urd: urd, ukr: ukr, vie: vie, yor: yor, zul: zul }
  const code = document.getElementById('languageSelected').value
  console.log(code)

  // Removing stopwords
  if (headlineArray !== null) {
    headlineStopped = removeStopwords(headlineArray, languages[code])
    populate(JSON.stringify(headlineStopped, 2, ' '), 'headlineStoppedDiv')
  }

  if (bodyArray !== null) {
    bodyStopped = removeStopwords(bodyArray, languages[code])
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
    const keywords = findKeywords(headlineStopped, bodyStopped, 5)
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
    const keywords = extract(stringOfKeywords, { regex: tags, toLowercase: true })
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
    const keywords = extract(stringOfUsernames, { regex: usernames, toLowercase: true })
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
    const keywords = extract(stringOfEmailAddresses, { regex: email, toLowercase: true })
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