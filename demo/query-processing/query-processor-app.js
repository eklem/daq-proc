// exposing the underlying libraries in a transparent way
const { highlight, lvm } = dqp
const index = ['a', 'adding', 'and', 'at', 'be', 'better', 'by', 'can', 'ensuring', 'even', 'get', 'gets', 'good', 'input', 'interesting', 'it', 'item', 'just', 'least', 'levenshtein', 'limit', 'long', 'longer', 'lots', 'make', 'match', 'matcher', 'maximum', 'maybe', 'more', 'need', 'nice', 'of', 'query', 'resembles', 'result', 'search', 'seems', 'so', 'some', 'text', 'that', 'the', 'this', 'to', 'we', 'will', 'with', 'words', 'work']

// Populating div with only meaningful words
const populateItem = function (result) {
  // console.log('Boom')
  // console.log(result)
  const node = document.createElement('p')
  node.innerHTML = result
  emptyElement('itemWithHighlights')
  document.getElementById('itemWithHighlights').appendChild(node)
}

// Listen to key up on itemtext and initiate a hit highlighting
document.addEventListener('DOMContentLoaded', function (event) {
  hitHighlight()
})

// Listen to key up on querytext and initiate a hit highlighting
document.getElementById('querytext').onkeyup = function () {
  hitHighlight()
}

// Listen to change on selection input and initiate a hit highlighting
document.getElementById('maxwords').onchange = function () {
  hitHighlight()
}

// Listen to change on selection input and initiate a hit highlighting
document.getElementById('fuzzy').onchange = function () {
  hitHighlight()
}

// calculate item highlighted
const hitHighlight = function () {
  let querytext = document.getElementById('querytext').value.split(' ')
  const itemtext = 'some text that resembles a search result item with lots of nice words to match at least some of the query input and we can make it longer by adding even more interesting text so that maximum words limit gets interesting and it seems we need some more text to make the maximum words work better maybe this long text can be good and it will just get better and better the longer we make it ensuring lots of words that the query and levenshtein matcher can match'.split(' ')
  const itemmaxwords = document.getElementById('maxwords').value
  const fuzzyMatching = document.getElementById('fuzzy').checked
  let matchedQuery = ''

  // remove empty values in query array, to not get stupid matches from '' to 'a' for example.
  querytext = querytext.filter(function (word) {
    return word !== ''
  })
  if (fuzzyMatching) {
    matchedQuery = lvm.levenMatch(querytext, index, { distance: 1 }).flat()
  } else {
    matchedQuery = querytext
  }

  console.log(matchedQuery)
  const hitHighlighted = highlight(matchedQuery, itemtext, { itemMaxWords: itemmaxwords })
  console.log('Hit(s) highlighted: ' + hitHighlighted)
  populateItem(hitHighlighted)
}

// Empty HTML element
const emptyElement = function (element) {
  document.getElementById(element).innerHTML = ''
}
