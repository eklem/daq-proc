# daq-proc
Simple document and query processor for [nowsearch.xyz](https://github.com/eklem/nowsearch.xyz) to makes search running in the browser and node.js a little better. Removes stopwords (smaller index and less irrelevant hits), extract keywords to filter on and prepares ngrams for auto-complete functionality.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

## Distribution and demo

Check out the [daq-proc interactive demo](https://eklem.github.io/daq-proc/demo/). Just add some words and figure it out.

This library is not creating anything new, but just packaging 4 libraries that goes well togehter into one browser distribution file. Also showing how it may be usefull through tests and the interactive demo.

## Dependencies

* [`words'n'numbers`](https://github.com/eklem/words-n-numbers) - Extract words and optionally numbers from a string of text into arrays. Arrays that can be fed to `stopword`, `eklem-headline-parser` and `ngraminator`.
* [`stopword`](https://github.com/fergiemcdowall/stopword) - Removes stopwords from an array of words. To keep your index small and remove all words without a scent of information.
* [`eklem-headline-parser`](https://github.com/eklem/eklem-headline-parser) - Determines the most relevant keywords in a headline by considering article context
* [`ngraminator`](https://github.com/fergiemcdowall/ngraminator) - Generate ngrams.

## Exapmle

Only Node.js for now, will make a browser example later

```javascript
const {wnn, sw, ngraminator, ehp} = require('../index.js')
const headlineString = 'Lib Dems win Brecon and Radnorshire byelection, cutting Johnson Commons majority to one'
const bodyString = 'Boris Johnson has suffered a major blow after the Tories were beaten by the Liberal Democrats in the Brecon and Radnorshire byelection. The victory for Jane Dodds means the new prime minister’s working majority in the House of Commons has been cut to just one. It will be seized on as a sign voters are concerned by Boris Johnson’s pledge to leave the EU without a deal if he deems it necessary. The Liberal Democrats won 13,826 votes with the Conservatives taking 12,401, a margin of 1,425 that overturned the Tories’ previous majority of more than 8,000. It was a sobering night for the Labour party (1,680 votes), which was beaten into fourth place by the Brexit party (3,331), and only just held on to its deposit. Ukip (242) came last behind the Monster Raving Loony party (334). In her acceptance speech, Dodds said: “I am incredibly humbled by the support. From every walk of life and every political persuasion, people have chosen to believe in my positive liberal vision for something better. “And by backing that liberal vision, people in Brecon and Radnorshire have sent a powerful message to Westminster: we demand better.” She continued: “People are desperately crying out for a different kind of politics. There is no time for tribalism when our country is faced with a Boris Johnson government and the threat of a no-deal Brexit. “My very first act as your MP when I arrive in Westminster will be to find Mr Boris Johnson, wherever he’s hiding, and tell him loud and clear: stop playing with the futures of our communities and rule out a no-deal Brexit.” The leader of the Liberal Democrats, Jo Swinson, who visited the constituency four times in the run-up to the byelection, said the results showed that the country didn\’t have to settle for Johnson or Jeremy Corbyn.'

let headlineArray = wnn.extract(headlineString, undefined, {toLowercase: true})
let bodyArray = wnn.extract(bodyString, undefined, {toLowercase: true})
console.log('Word arrays: ')
console.dir(headlineArray)
console.dir(bodyArray)

let headlineStopped = sw.removeStopwords(headlineArray)
let bodyStopped = sw.removeStopwords(bodyArray)
console.log('Stopword removed arrays: ')
console.dir(headlineStopped)
console.dir(bodyStopped)

let headlineNgrams = ngraminator(headlineStopped, [2,3,4])
let bodyNgrams = ngraminator(bodyStopped, [2,3,4])
console.log('Ngram arrays: ')
console.dir(headlineNgrams)
console.dir(bodyNgrams)

let keywords = ehp.findKeywords(headlineStopped, bodyStopped, 5)
console.log('Keyword array: ')
console.dir(keywords)
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/daq-proc
[npm-version-image]: http://img.shields.io/npm/v/daq-proc.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/daq-proc.svg?style=flat
[travis-url]: http://travis-ci.org/eklem/daq-proc
[travis-image]: http://img.shields.io/travis/eklem/daq-proc.svg?style=flat

