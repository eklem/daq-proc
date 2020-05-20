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

// calculate item highlighted
const hitHighlight = function () {
  const querytext = document.getElementById('querytext').value.split(' ')
  const itemtext = 'some text that resembles a search result item with lots of nice words to match at least some of the query input and we can make it longer by adding even more interesting text so that maximum words limit gets interesting'.split(' ')
  const itemmaxwords = document.getElementById('maxwords').value
  // console.log(querytext)
  // console.log(itemtext)
  // console.log(itemmaxwords)
  const hitHighlighted = window.highlight(querytext, itemtext, { itemMaxWords: itemmaxwords })
  console.log('Hit(s) highlighted: ' + hitHighlighted)
  populateItem(hitHighlighted)
}

// Empty HTML element
const emptyElement = function (element) {
  document.getElementById(element).innerHTML = ''
}
