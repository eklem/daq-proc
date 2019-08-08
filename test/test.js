const test = require('tape')
const {wnn, sw, ngraminator, ehp} = require('../index.js')

test('extract arrays from strings, remove stopwords, make ngrams, find keywords ', function (t) {
  t.plan(4)
  const headlineString = 'Lib Dems win Brecon and Radnorshire byelection, cutting Johnson Commons majority to one'
  const bodyString = 'Boris Johnson has suffered a major blow after the Tories were beaten by the Liberal Democrats in the Brecon and Radnorshire byelection. The victory for Jane Dodds means the new prime minister’s working majority in the House of Commons has been cut to just one. It will be seized on as a sign voters are concerned by Boris Johnson’s pledge to leave the EU without a deal if he deems it necessary. The Liberal Democrats won 13,826 votes with the Conservatives taking 12,401, a margin of 1,425 that overturned the Tories’ previous majority of more than 8,000. It was a sobering night for the Labour party (1,680 votes), which was beaten into fourth place by the Brexit party (3,331), and only just held on to its deposit. Ukip (242) came last behind the Monster Raving Loony party (334). In her acceptance speech, Dodds said: “I am incredibly humbled by the support. From every walk of life and every political persuasion, people have chosen to believe in my positive liberal vision for something better. “And by backing that liberal vision, people in Brecon and Radnorshire have sent a powerful message to Westminster: we demand better.” She continued: “People are desperately crying out for a different kind of politics. There is no time for tribalism when our country is faced with a Boris Johnson government and the threat of a no-deal Brexit. “My very first act as your MP when I arrive in Westminster will be to find Mr Boris Johnson, wherever he’s hiding, and tell him loud and clear: stop playing with the futures of our communities and rule out a no-deal Brexit.” The leader of the Liberal Democrats, Jo Swinson, who visited the constituency four times in the run-up to the byelection, said the results showed that the country didn\’t have to settle for Johnson or Jeremy Corbyn.'
  let headlineArray = wnn.extract(headlineString, {toLowercase: true})
  let bodyArray = wnn.extract(bodyString, {toLowercase: true})
  t.looseEqual(headlineArray, [ 'lib', 'dems', 'win', 'brecon', 'and', 'radnorshire', 'byelection', 'cutting', 'johnson', 'commons', 'majority', 'to', 'one' ])
  console.log('Word arrays: ')
  console.dir(headlineArray)
  console.dir(bodyArray)

  let headlineStopped = sw.removeStopwords(headlineArray)
  let bodyStopped = sw.removeStopwords(bodyArray)
  t.looseEqual(headlineStopped, [ 'lib', 'dems', 'win', 'brecon', 'radnorshire', 'byelection', 'cutting', 'johnson', 'commons', 'majority', 'one' ])
  console.log('Stopword removed arrays: ')
  console.dir(headlineStopped)
  console.dir(bodyStopped)

  let headlineNgrams = ngraminator(headlineStopped, [2,3,4])
  let bodyNgrams = ngraminator(bodyStopped, [2,3,4])
  t.looseEqual(headlineNgrams, [ [ 'brecon', 'radnorshire' ], [ 'brecon', 'radnorshire', 'byelection' ], [ 'brecon', 'radnorshire', 'byelection', 'cutting' ], [ 'byelection', 'cutting' ], [ 'byelection', 'cutting', 'johnson' ], [ 'byelection', 'cutting', 'johnson', 'commons' ], [ 'commons', 'majority' ], [ 'commons', 'majority', 'one' ], [ 'cutting', 'johnson' ], [ 'cutting', 'johnson', 'commons' ], [ 'cutting', 'johnson', 'commons', 'majority' ], [ 'dems', 'win' ], [ 'dems', 'win', 'brecon' ], [ 'dems', 'win', 'brecon', 'radnorshire' ], [ 'johnson', 'commons' ], [ 'johnson', 'commons', 'majority' ], [ 'johnson', 'commons', 'majority', 'one' ], [ 'lib', 'dems' ], [ 'lib', 'dems', 'win' ], [ 'lib', 'dems', 'win', 'brecon' ], [ 'majority', 'one' ], [ 'radnorshire', 'byelection' ], [ 'radnorshire', 'byelection', 'cutting' ], [ 'radnorshire', 'byelection', 'cutting', 'johnson' ], [ 'win', 'brecon' ], [ 'win', 'brecon', 'radnorshire' ], [ 'win', 'brecon', 'radnorshire', 'byelection' ] ])
  console.log('Ngram arrays: ')
  console.dir(headlineNgrams)
  console.dir(bodyNgrams)

  let keywords = ehp.findKeywords(headlineStopped, bodyStopped, 5)
  t.looseEqual(keywords, [ 'johnson', 'brecon', 'radnorshire', 'byelection', 'majority' ])
  console.log('Keyword array: ')
  console.dir(keywords)
})