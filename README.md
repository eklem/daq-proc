# daq-proc
Simple document and query processor for [nowsearch.xyz](https://github.com/eklem/nowsearch.xyz) to makes search running in the browser and node.js a little better. Removes stopwords (smaller index and less irrelevant hits), extract keywords to filter on and prepares ngrams for auto-complete functionality.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

## Distribution and demo

Check out the [daq-proc interactive demo](https://eklem.github.io/daq-proc/demo/). Just add some words and figure it out.

![Screenshot of the daq-proc broser demo](./demo/daq-proc-demo-screenshot.png)

This library is not creating anything new, but just packaging 4 libraries that goes well togehter into one browser distribution file. Also showing how it may be usefull through tests and the interactive demo.

## Dependencies

* [`words'n'numbers`](https://github.com/eklem/words-n-numbers) - Extract words and optionally numbers from a string of text into arrays. Arrays that can be fed to `stopword`, `eklem-headline-parser` and `ngraminator`.
* [`stopword`](https://github.com/fergiemcdowall/stopword) - Removes stopwords from an array of words. To keep your index small and remove all words without a scent of information.
* [`eklem-headline-parser`](https://github.com/eklem/eklem-headline-parser) - Determines the most relevant keywords in a headline by considering article context
* [`ngraminator`](https://github.com/fergiemcdowall/ngraminator) - Generate ngrams.

## Exapmle

Only Node.js for now, will make a browser example later

```javascript
<script src="daq-proc.js"></script>

<script>
  const headlineString = 'Document and query processing for the browser!'
  const bodyString = 'Yay! The day is here =) We now have document and query processing for the browser. It is mostly packaging 4 modules together in a browser distribution file. The modules are words-n-numbers, stopword, ngraminator and eklem-headline-parser'

  let headlineArray = dqp.wnn.extract(headlineString, undefined, {toLowercase: true})
  let bodyArray = dqp.wnn.extract(bodyString, undefined, {toLowercase: true})
  console.log('Word arrays: ')
  console.dir(headlineArray)
  console.dir(bodyArray)

  let headlineStopped = dqp.sw.removeStopwords(headlineArray)
  let bodyStopped = dqp.sw.removeStopwords(bodyArray)
  console.log('Stopword removed arrays: ')
  console.dir(headlineStopped)
  console.dir(bodyStopped)

  let headlineNgrams = dqp.ngraminator(headlineStopped, [2,3,4])
  let bodyNgrams = dqp.ngraminator(bodyStopped, [2,3,4])
  console.log('Ngram arrays: ')
  console.dir(headlineNgrams)
  console.dir(bodyNgrams)

  let keywords = dqp.ehp.findKeywords(headlineStopped, bodyStopped, 5)
  console.log('Keyword array: ')
  console.dir(keywords)
</script>
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/daq-proc
[npm-version-image]: http://img.shields.io/npm/v/daq-proc.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/daq-proc.svg?style=flat
[travis-url]: http://travis-ci.org/eklem/daq-proc
[travis-image]: http://img.shields.io/travis/eklem/daq-proc.svg?style=flat

