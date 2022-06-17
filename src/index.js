const cheerio = require('cheerio')
const sw = require('../node_modules/stopword/dist/stopword.cjs')
const wnn = require('words-n-numbers')
const { ngraminator } = require('ngraminator')
const { findKeywords } = require('../node_modules/eklem-headline-parser/dist/eklem-headline-parser.cjs.js')
const highlight = require ('../node_modules/hit-highlighter/dist/hit-highlighter.cjs.js')
const { levenMatch } = require('leven-match')


module.exports = {
  cheerio,
  wnn,
  sw,
  ngraminator,
  findKeywords,
  highlight,
  levenMatch
}
